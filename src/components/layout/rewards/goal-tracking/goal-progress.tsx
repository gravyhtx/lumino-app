"use client"

import type { Goal } from "./types/goals"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface GoalProgressProps {
  goal: Goal
}

export function GoalProgress({ goal }: GoalProgressProps) {
  const progress = (goal.current / goal.target) * 100
  const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium">{goal.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
            </span>
            <span className="font-medium text-primary">{goal.multiplier}x Multiplier</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {daysLeft} days remaining • {Math.round(progress)}% Complete
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

