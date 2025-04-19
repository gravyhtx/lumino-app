"use client"

import type { BadgePreview } from "./types/incentives"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, TrendingUp, Award, Users } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const iconMap = {
  Trophy,
  TrendingUp,
  Award,
  Users,
}

interface BadgeCarouselProps {
  badges: BadgePreview[]
}

export function BadgeCarousel({ badges }: BadgeCarouselProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badge Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {badges.map((badge) => {
            const Icon = iconMap[badge.icon as keyof typeof iconMap]
            return (
              <div key={badge.id} className={`p-4 rounded-lg border ${badge.isLocked ? "opacity-50" : "bg-primary/5"}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-[#00ff6a]" />
                  </div>
                  <div>
                    <h4 className="font-medium">{badge.name}</h4>
                    <p className="text-sm text-primary">+{badge.points} pts</p>
                  </div>
                </div>
                {badge.isLocked && badge.progress && <Progress value={badge.progress} className="h-1.5" />}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

