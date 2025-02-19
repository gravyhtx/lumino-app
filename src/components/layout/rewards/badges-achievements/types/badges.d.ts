export interface Badge {
  id: string
  name: string
  icon: string
  points: number
  earnedDate?: string
  criteria: string
  description: string
  isLocked?: boolean
}

export interface Milestone {
  id: string
  name: string
  icon: string
  current: number
  target: number
  percentage: number
  unit: string
}

export type Icon = "award" | "zap" | "timer" | "trophy"