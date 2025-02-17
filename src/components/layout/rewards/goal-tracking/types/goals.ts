export type GoalCategory = "revenue" | "transactions" | "retention" | "referrals"
export type GoalTier = "conservative" | "ambitious" | "aggressive"

export interface Goal {
  id: string
  name: string
  category: GoalCategory
  target: number
  current: number
  deadline: string
  completed?: boolean
  multiplier: number
  streak?: number
}

export interface AIGoalSuggestion {
  category: GoalCategory
  tiers: {
    [key in GoalTier]: {
      target: number
      multiplier: number
      description: string
    }
  }
  previousValue: number
  timeframe: "monthly" | "quarterly" | "yearly"
}

export interface LeaderboardEntry {
  id: string
  businessName: string
  growth: number
  volume: number
  rank: number
  isCurrentUser?: boolean
}

