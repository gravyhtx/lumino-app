"use client"

import {
  rewardsSummary,
  transactionMetrics,
  activeMilestones,
  badges,
  leaderboard,
  recommendations,
} from "./data/mock-incentives"
import { PerformanceSnapshot } from "./performance-snapshot"
import { RevenueChart } from "./revenue-chart"
import { MilestoneTracker } from "./milestone-tracker"
import { BadgeCarousel } from "./badge-carousel"
import { MiniLeaderboard } from "./mini-leaderboard"
import { Recommendations } from "./recommendations"

export default function IncentivesHub() {
  return (
    <div className="container mx-auto p-6 max-w-7xl space-y-8">
      <h1 className="text-3xl font-bold">Incentives Hub</h1>

      <PerformanceSnapshot summary={rewardsSummary} />

      <div className="grid gap-6 md:grid-cols-2">
        <RevenueChart data={transactionMetrics} />
        <MilestoneTracker milestones={activeMilestones} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <BadgeCarousel badges={badges} />
          <MiniLeaderboard entries={leaderboard} />
        </div>
        <Recommendations recommendations={recommendations} />
      </div>
    </div>
  )
}