"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Flame } from "lucide-react"

interface StreakTrackerProps {
  currentStreak: number
  bestStreak: number
  nextMilestone: number
  reward: string
}

export function StreakTracker({ currentStreak, bestStreak, nextMilestone, reward }: StreakTrackerProps) {
  const progress = (currentStreak / nextMilestone) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Flame className="h-5 w-5 text-primary" />
          Goal Streak
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">{currentStreak} Months</p>
            <p className="text-sm text-muted-foreground">Current Streak</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-medium">{bestStreak} Months</p>
            <p className="text-sm text-muted-foreground">Best Streak</p>
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground">
            {nextMilestone - currentStreak} months until {reward}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

