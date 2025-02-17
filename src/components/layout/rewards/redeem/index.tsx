import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { InfoCard } from "@/components/ui/info-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { classnames } from "@/utils"

// Mock data for rewards
const allRewards = [
  { id: 1, name: `GameStop $100 E-Gift Card`, points: 10000, category: `Digital`, image: `/rewards/reward1.png` },
  { id: 2, name: `Apple iPad Air 11" - 128GB`, points: 68999, category: `Electronics`, image: `/rewards/reward2.jpg` },
  { id: 3, name: `Flights for 2 + 3 Nights at the Fountainbleu Miami Beach`, points: 375000, category: `Travel`, image: `/rewards/reward3.png` },
  { id: 4, name: `Rolex Rolesor Datejust 41 Blue Diamond`, points: 1654000, category: `Products`, image: `/rewards/reward4.jpg` },
  // Add more rewards as needed
]

const categories = ["All", "Digital", "Electronics", "Travel", "Products"]

export default function RewardRedemption() {
  const [rewards, setRewards] = useState(allRewards)
  const [activeCategory, setActiveCategory] = useState("All")
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const observer = useRef<IntersectionObserver | null>(null)

  const loadMoreRewards = useCallback(() => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      const newRewards = allRewards.slice((page - 1) * 8, page * 8)
      setRewards(prevRewards => [...prevRewards, ...newRewards])
      setPage(prevPage => prevPage + 1)
      setHasMore(newRewards.length > 0)
      setLoading(false)
    }, 1000)
  }, [page])

  useEffect(() => {
    loadMoreRewards()
  }, [])

  const lastRewardElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      const firstEntry = entries[0];
      if (firstEntry && firstEntry.isIntersecting && hasMore) {
        loadMoreRewards();
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMoreRewards]);

  const filteredRewards = rewards.filter(reward => 
    activeCategory === "All" || reward.category === activeCategory
  )

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <h1 className="text-2xl font-bold mb-6">Reward Redemption</h1>
      <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-6')}>
        <InfoCard title="Available Points" amount="25,000" timeSince="" />
        <InfoCard title="Estimated Points Next Month" amount="10,000" timeSince="" />
        <InfoCard title="Estimated Points Next Year" amount="240,000" timeSince="" />
        <InfoCard title="Estimated Points Next 3 Years" amount="500,000" timeSince="" />
      </div>
      <Card className="w-full">
        <CardContent className="pt-6">
          <CardTitle className="mb-4">Reward Catalog</CardTitle>
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
              {categories.map(category => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredRewards.map((reward, index) => (
                  <div 
                    key={reward.id} 
                    ref={index === filteredRewards.length - 1 ? lastRewardElementRef : null}
                    className="bg-muted p-4 rounded-lg flex flex-col items-center"
                  >
                    <img src={reward.image} alt={reward.name} className="w-24 h-24 object-cover mb-2" />
                    <h3 className="font-semibold text-center">{reward.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{reward.points} Points</p>
                    <Button variant="outline" size="sm" disabled={reward.points > 25000}>
                      {reward.points > 25000 ? 'Not Enough Points' : 'Redeem'}
                    </Button>
                  </div>
                ))}
              </div>
              {loading && <p className="text-center mt-4">Loading more rewards...</p>}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <div className="mt-6 text-center">
        <p className="text-muted-foreground">
          Looking for more rewards? Complete goals to earn more points!
        </p>
      </div>
    </div>
  )
}

