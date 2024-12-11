import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { InfoCard } from "@/components/ui/info-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { classnames } from "@/utils"

// Mock data for rewards
const allRewards = [
  { id: 1, name: "$50 Cash Back", points: 5000, category: "Cash Rewards", image: "/placeholder.svg?height=100&width=100" },
  { id: 2, name: "10% Off Next Purchase", points: 2000, category: "Discounts", image: "/placeholder.svg?height=100&width=100" },
  { id: 3, name: "Exclusive NFT", points: 10000, category: "NFTs", image: "/placeholder.svg?height=100&width=100" },
  { id: 4, name: "Premium Product", points: 15000, category: "Products", image: "/placeholder.svg?height=100&width=100" },
  // Add more rewards as needed
]

const categories = ["All", "Cash Rewards", "Discounts", "NFTs", "Products"]

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
        <InfoCard title="Total Points Available" amount="25,000" timeSince="Current Balance" />
        <InfoCard title="Points Redeemed This Month" amount="10,000" timeSince="This Month" />
        <InfoCard title="Highest Value Reward Redeemed" amount="$100" timeSince="All Time" />
        <InfoCard title="Next Tier Progress" amount="75%" timeSince="500 pts to Gold" />
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

