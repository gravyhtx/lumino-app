"use client"

import { motion } from "framer-motion"
import type { RewardsSummary } from "./types/incentives"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Gift, Target, Activity } from "lucide-react"

interface PerformanceSnapshotProps {
  summary: RewardsSummary
}

export function PerformanceSnapshot({ summary }: PerformanceSnapshotProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="col-span-2 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-medium text-white mb-2">Total Points & Bonuses This Month</h3>
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl font-bold"
              >
                {summary.currentMonth.total.toLocaleString()}
              </motion.div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-muted-foreground">Points:</span>
                  <span className="ml-1 text-lumi-accent-blue">{summary.currentMonth.points.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Bonuses:</span>
                  <span className="ml-1 text-lumi-accent-green">{summary.currentMonth.bonuses.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-2">Reward Level Progress</h3>
              <div className="space-y-2">
                <Progress value={summary.rewardLevel.progress} className="h-2" />
                <div className="text-sm text-lumi-accent-yellow">
                  Level {summary.rewardLevel.current} → {summary.rewardLevel.next}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-white mb-2">Current Multiplier</h3>
              <div className="text-2xl font-bold text-primary">{summary.multiplier.current}x</div>
              <p className="text-sm text-lumi-accent-blue mt-1">
                {summary.multiplier.remaining.toLocaleString()} until {summary.multiplier.next}x
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="col-span-2 flex gap-4 justify-center md:justify-start">
        <Button className="gap-2">
          <Gift className="h-4 w-4" />
          Redeem Rewards
        </Button>
        <Button variant="outline" className="gap-2">
          <Target className="h-4 w-4" />
          Set New Goal
        </Button>
        <Button variant="outline" className="gap-2">
          <Activity className="h-4 w-4" />
          Track Transactions
        </Button>
      </div>
    </div>
  )
}

