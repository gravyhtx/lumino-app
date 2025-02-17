"use client"

import type { LeaderboardEntry } from "./types/goals"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface LeaderboardProps {
  entries: LeaderboardEntry[]
}

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-primary" />
          Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className={`flex items-center justify-between p-4 rounded-lg ${
                entry.isCurrentUser ? "bg-primary/10" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-primary">#{entry.rank}</span>
                <div>
                  <p className="font-medium">{entry.businessName}</p>
                  <p className="text-sm text-muted-foreground">${entry.volume.toLocaleString()} in volume</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-primary">+{entry.growth}%</p>
                <p className="text-sm text-muted-foreground">Growth</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

