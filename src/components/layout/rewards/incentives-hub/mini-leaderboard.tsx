"use client"

import type { LeaderboardEntry } from "@/types/incentives"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"

interface MiniLeaderboardProps {
  entries: LeaderboardEntry[]
}

export function MiniLeaderboard({ entries }: MiniLeaderboardProps) {
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
              key={entry.rank}
              className={`flex items-center justify-between p-4 rounded-lg ${
                entry.isCurrentUser ? "bg-primary/10" : "hover:bg-accent"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-primary">#{entry.rank}</span>
                <div>
                  <p className="font-medium">{entry.businessName}</p>
                  <p className="text-sm text-muted-foreground">{entry.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">{entry.points.toLocaleString()} pts</p>
                <p className="text-sm text-primary">+{entry.growth}%</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

