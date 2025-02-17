export interface RewardsSummary {
  currentMonth: {
    points: number
    bonuses: number
    total: number
  }
  rewardLevel: {
    current: number
    next: number
    progress: number
  }
  multiplier: {
    current: number
    next: number
    remaining: number
    deadline?: string
  }
}

export interface TransactionMetrics {
  month: string
  volume: number
  revenue: number
  growth: number
}

export interface ActiveMilestone {
  id: string
  name: string
  progress: number
  estimatedCompletion: string
  points: number
}

export interface BadgePreview {
  id: string
  name: string
  icon: string
  points: number
  isLocked: boolean
  progress?: number
}

export interface LeaderboardEntry {
  rank: number
  businessName: string
  category: string
  points: number
  growth: number
  isCurrentUser?: boolean
}

export interface Recommendation {
  id: string
  type: "goal" | "promotion" | "milestone"
  title: string
  description: string
  reward: string
  deadline?: string
  action: string
}

