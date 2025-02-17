"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Badge } from "./types/badges"
import { iconMap } from "./data/mock-data"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface BadgeCardProps {
  badge: Badge
}

export function BadgeCard({ badge }: BadgeCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = iconMap[badge.icon as keyof typeof iconMap]

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Card className={`relative overflow-hidden ${badge.isLocked ? "opacity-50" : ""}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 z-0" />
              <CardHeader className="relative z-10 p-4">
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">+{badge.points} pts</span>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 p-4 pt-0">
                <h3 className="font-semibold mb-1">{badge.name}</h3>
                <CardDescription className="text-xs">{badge.criteria}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="p-4 max-w-[200px]">
          <p className="font-medium mb-1">{badge.name}</p>
          <p className="text-sm text-muted-foreground mb-2">{badge.criteria}</p>
          {badge.earnedDate && (
            <p className="text-xs text-muted-foreground">
              Earned on: {new Date(badge.earnedDate).toLocaleDateString()}
            </p>
          )}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

