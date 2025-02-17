"use client"

import { motion } from "framer-motion"
import type { Milestone } from "./types/badges"
import { iconMap } from "./data/mock-data"
import { Progress } from "@/components/ui/progress"

interface MilestoneProgressProps {
  milestone: Milestone
}

export function MilestoneProgress({ milestone }: MilestoneProgressProps) {
  const Icon = iconMap[milestone.icon as keyof typeof iconMap]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">{milestone.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{milestone.percentage}% Complete</span>
      </div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Progress value={milestone.percentage} className="h-2" />
      </motion.div>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>
          {milestone.current} {milestone.unit}
        </span>
        <span>
          {milestone.target} {milestone.unit}
        </span>
      </div>
    </div>
  )
}

