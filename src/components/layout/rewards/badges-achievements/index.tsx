"use client"

import { motion } from "framer-motion"
import { badges, milestones } from "./data/mock-data"
import { BadgeCard } from "./badge-card"
import { MilestoneProgress } from "./milestone-progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BadgesAndAchievements() {
  const earnedBadges = badges.filter((b) => !b.isLocked)
  const nextBadge = badges.find((b) => b.isLocked)

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Badges & Achievements</h1>

      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Badges Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{earnedBadges.length}</div>
            <p className="text-xs text-muted-foreground">All Time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Upcoming Milestones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{milestones.length - earnedBadges.length}</div>
            <p className="text-xs text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Next Badge Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {nextBadge ? milestones.find((m) => m.name === nextBadge.name)?.percentage + "%" : "N/A"}
            </div>
            <p className="text-xs text-muted-foreground">{nextBadge?.name || "All badges earned!"}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-4">Badge Showcase</h2>
          <motion.div variants={container} initial="hidden" animate="show" className="grid gap-4 sm:grid-cols-2">
            {badges.map((badge) => (
              <motion.div key={badge.id} variants={item}>
                <BadgeCard badge={badge} />
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Process more payments to unlock your next badge!</p>
            <Button variant="outline">View Available Transactions</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Milestone Tracker</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              {milestones.map((milestone) => (
                <MilestoneProgress key={milestone.id} milestone={milestone} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}