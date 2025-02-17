"use client"

import type { AIGoalSuggestion, GoalTier } from "./types/goals"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface AISuggestionsProps {
  suggestion: AIGoalSuggestion
}

export function AISuggestions({ suggestion }: AISuggestionsProps) {
  suggestion = suggestion ? suggestion : {
    category: "revenue",
    tiers: {
      conservative: {
        target: NaN,
        multiplier: NaN,
        description: ""
      }
    },
    previousValue: NaN,
    timeframe: "monthly"
  }
  const tiers: GoalTier[] = ["conservative", "ambitious", "aggressive"]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI-Generated Goals
        </CardTitle>
        <CardDescription>
          Based on your previous {suggestion?.timeframe} performance of ${suggestion?.previousValue.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {tiers.map((tier) => {
          const goalData = suggestion?.tiers[tier]
          return (
            <div
              key={tier}
              className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
            >
              <div className="space-y-1">
                <p className="font-medium capitalize">{tier} Goal</p>
                <p className="text-sm text-muted-foreground">{goalData.description}</p>
              </div>
              <div className="text-right space-y-1">
                <p className="font-medium">${goalData.target.toLocaleString()}</p>
                <p className="text-sm text-primary">{goalData.multiplier}x Multiplier</p>
              </div>
            </div>
          )
        })}
        <div className="flex justify-end gap-2 mt-2">
          <Button variant="outline">Customize</Button>
          <Button>Accept Goal</Button>
        </div>
      </CardContent>
    </Card>
  )
}

