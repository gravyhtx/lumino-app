"use client"

import type { ActiveMilestone } from "./types/incentives"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface MilestoneTrackerProps {
  milestones: ActiveMilestone[]
}

export function MilestoneTracker({ milestones }: MilestoneTrackerProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Active Milestones</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {milestones.map((milestone) => (
          <div key={milestone.id} className="space-y-2">
            <div className="flex justify-between">
              <div>
                <h4 className="font-medium">{milestone.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Est. completion: {new Date(milestone.estimatedCompletion).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <span className="font-medium text-primary">+{milestone.points}</span>
                <p className="text-sm text-muted-foreground">points</p>
              </div>
            </div>
            <Progress value={milestone.progress} className="h-2" />
            <p className="text-sm text-muted-foreground text-right">{milestone.progress}% Complete</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

