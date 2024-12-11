import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { InfoCard } from "@/components/ui/info-card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { classnames } from "@/utils"

export default function BadgesAndAchievements() {
  // Mock data for badges and milestones
  const badges = [
    { id: 1, name: "First Transaction", earned: true, icon: "🏅", description: "Complete your first transaction" },
    { id: 2, name: "Power Seller", earned: true, icon: "🌟", description: "Reach $10,000 in total sales" },
    { id: 3, name: "Loyal Customer", earned: false, icon: "🏆", description: "Maintain an account for 1 year" },
    { id: 4, name: "Referral King", earned: false, icon: "👑", description: "Refer 10 new customers" },
    { id: 5, name: "Big Spender", earned: false, icon: "💰", description: "Process a single transaction over $5,000" },
    { id: 6, name: "Early Bird", earned: true, icon: "🐦", description: "Log in 5 days in a row before 9 AM" },
  ]

  const milestones = [
    { id: 1, name: "Complete 100 Transactions", progress: 80 },
    { id: 2, name: "$10,000 in Revenue", progress: 65 },
    { id: 3, name: "Onboard 50 Customers", progress: 30 },
    { id: 4, name: "5-Star Ratings", progress: 90 },
  ]

  const [hoveredBadge, setHoveredBadge] = useState<number | null>(null)

  const totalEarnedBadges = badges.filter(b => b.earned).length
  const nextBadgeProgress = 75 // This would be calculated based on the user's progress

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <h1 className="text-2xl font-bold mb-6">Badges & Achievements</h1>
      <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-3 w-full mb-6')}>
        <InfoCard title="Total Badges Earned" amount={totalEarnedBadges.toString()} timeSince="All Time" />
        <InfoCard title="Upcoming Milestones" amount={milestones.length.toString()} timeSince="In Progress" />
        <InfoCard title="Next Badge Progress" amount={`${nextBadgeProgress}%`} timeSince="Loyal Customer" />
      </div>
      <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
        <div className="w-full lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">Badge Showcase</CardTitle>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {badges.map((badge) => (
                  <TooltipProvider key={badge.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div 
                          className={classnames(
                            "flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer transition-all duration-200",
                            badge.earned ? "bg-primary/10" : "bg-muted opacity-50"
                          )}
                          onMouseEnter={() => setHoveredBadge(badge.id)}
                          onMouseLeave={() => setHoveredBadge(null)}
                        >
                          <span className="text-4xl mb-2">{badge.icon}</span>
                          <Badge variant={badge.earned ? "default" : "secondary"}>
                            {badge.name}
                          </Badge>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{badge.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">Milestone Tracker</CardTitle>
              <div className="space-y-4">
                {milestones.sort((a, b) => b.progress - a.progress).map((milestone) => (
                  <div key={milestone.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{milestone.name}</span>
                      <span className="text-sm font-medium">{milestone.progress}% Complete</span>
                    </div>
                    <Progress value={milestone.progress} className="w-full" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg mb-4">Process more payments to unlock your next badge!</p>
        <Button>View Available Transactions</Button>
      </div>
    </div>
  )
}

