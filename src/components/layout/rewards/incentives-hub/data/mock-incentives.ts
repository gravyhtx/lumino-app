import type {
  RewardsSummary,
  TransactionMetrics,
  ActiveMilestone,
  BadgePreview,
  LeaderboardEntry,
  Recommendation,
} from "../types/incentives"

export const rewardsSummary: RewardsSummary = {
  currentMonth: {
    points: 2500,
    bonuses: 1200,
    total: 3700,
  },
  rewardLevel: {
    current: 3,
    next: 4,
    progress: 75,
  },
  multiplier: {
    current: 1.5,
    next: 2.0,
    remaining: 2500,
    deadline: "2025-03-01",
  },
}

export const transactionMetrics: TransactionMetrics[] = [
  { month: "Sep", volume: 25000, revenue: 22000, growth: 0 },
  { month: "Oct", volume: 28000, revenue: 24500, growth: 11.4 },
  { month: "Nov", volume: 32000, revenue: 28000, growth: 14.3 },
  { month: "Dec", volume: 35000, revenue: 30500, growth: 8.9 },
  { month: "Jan", volume: 40000, revenue: 35000, growth: 14.8 },
  { month: "Feb", volume: 45000, revenue: 39000, growth: 11.4 },
]

export const activeMilestones: ActiveMilestone[] = [
  {
    id: "1",
    name: "Monthly Revenue Target",
    progress: 75,
    estimatedCompletion: "2025-03-01",
    points: 500,
  },
  {
    id: "2",
    name: "Customer Retention Rate",
    progress: 85,
    estimatedCompletion: "2025-02-28",
    points: 750,
  },
  {
    id: "3",
    name: "Transaction Volume Goal",
    progress: 60,
    estimatedCompletion: "2025-03-15",
    points: 1000,
  },
]

export const badges: BadgePreview[] = [
  {
    id: "1",
    name: "Revenue Champion",
    icon: "Trophy",
    points: 1000,
    isLocked: false,
  },
  {
    id: "2",
    name: "Growth Master",
    icon: "TrendingUp",
    points: 750,
    isLocked: false,
  },
  {
    id: "3",
    name: "Elite Performer",
    icon: "Award",
    points: 1500,
    isLocked: true,
    progress: 80,
  },
  {
    id: "4",
    name: "Referral King",
    icon: "Users",
    points: 2000,
    isLocked: true,
    progress: 45,
  },
]

export const leaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    businessName: "Tech Solutions Inc",
    category: "Technology",
    points: 12500,
    growth: 25,
  },
  {
    rank: 2,
    businessName: "Your Business",
    category: "Technology",
    points: 10800,
    growth: 22,
    isCurrentUser: true,
  },
  {
    rank: 3,
    businessName: "Digital Services Co",
    category: "Technology",
    points: 9500,
    growth: 18,
  },
]

export const recommendations: Recommendation[] = [
  {
    id: "1",
    type: "goal",
    title: "Boost Your February Revenue",
    description: "You're just $2,500 away from a 2x reward multiplier!",
    reward: "2x Multiplier",
    deadline: "2025-02-28",
    action: "View Transactions",
  },
  {
    id: "2",
    type: "promotion",
    title: "Limited Time Offer",
    description: "Process $10,000 in the next 7 days to earn double points",
    reward: "2x Points",
    deadline: "2025-02-15",
    action: "Accept Challenge",
  },
  {
    id: "3",
    type: "milestone",
    title: "Next Badge Within Reach",
    description: "Complete 5 more transactions to unlock the Elite Performer badge",
    reward: "1500pts",
    action: "Track Progress",
  },
]

