"use client"

import { activeGoals, aiSuggestions, leaderboard, streakData } from "./data/mock-data"
import { AISuggestions } from "./ai-suggestions"
import { GoalProgress } from "./goal-progress"
import { Leaderboard } from "./leaderboard"
import { StreakTracker } from "./streak-tracker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Advanced } from "@/components/ui/advanced"

export default function GoalsPage() {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* <h1 className="text-3xl font-bold">Goal Tracking</h1>
      <div className="mb-8">Earn Points Multipliers</div> */}
      <Advanced
        title="Goal Tracking"
        description="Earn Points Multipliers"
        className="mb-8" />

      <div className="grid gap-6 mb-8 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeGoals.length}</div>
            <p className="text-xs text-muted-foreground">Current</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Goals Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">This Quarter</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Multiplier</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.5x</div>
            <p className="text-xs text-muted-foreground">7 Days Remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Goal Success Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">80%</div>
            <p className="text-xs text-muted-foreground">All Time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Current Goals</h2>
          {activeGoals.map((goal) => (
            <GoalProgress key={goal.id} goal={goal} />
          ))}

          <h2 className="text-xl font-semibold pt-4">AI Suggestions</h2>
          <AISuggestions suggestion={aiSuggestions[0]} />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Performance Tracking</h2>
          <StreakTracker {...streakData} />
          <Leaderboard entries={leaderboard} />
        </div>
      </div>
    </div>
  )
}