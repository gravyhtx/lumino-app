import type { Goal, AIGoalSuggestion, LeaderboardEntry } from "../types/goals"

export const activeGoals: Goal[] = [
  {
    id: "1",
    name: "Monthly Revenue Target",
    category: "revenue",
    target: 20000,
    current: 15000,
    deadline: "2025-03-01",
    multiplier: 1.2,
  },
  {
    id: "2",
    name: "Quarterly Transactions",
    category: "transactions",
    target: 60000,
    current: 45000,
    deadline: "2025-04-01",
    multiplier: 1.5,
  },
  {
    id: "3",
    name: "Annual Target",
    category: "revenue",
    target: 240000,
    current: 180000,
    deadline: "2025-12-31",
    multiplier: 2.0,
  },
]

export const aiSuggestions: AIGoalSuggestion[] = [
  {
    category: "revenue",
    tiers: {
      conservative: {
        target: 40250,
        multiplier: 1.2,
        description: "Aim for a 15% increase from last month ($35,000)",
      },
      ambitious: {
        target: 45500,
        multiplier: 1.5,
        description: "Push for a 30% increase to maximize rewards",
      },
      aggressive: {
        target: 52500,
        multiplier: 2.0,
        description: "Go big with a 50% increase for maximum multiplier",
      },
    },
    previousValue: 35000,
    timeframe: "monthly",
  },
  {
    category: "transactions",
    tiers: {
      conservative: {
        target: 90,
        multiplier: 1.2,
        description: "Increase from 75 to 90 transactions",
      },
      ambitious: {
        target: 100,
        multiplier: 1.5,
        description: "Push for 100 transactions this month",
      },
      aggressive: {
        target: 120,
        multiplier: 2.0,
        description: "Aim for 120 transactions for max rewards",
      },
    },
    previousValue: 75,
    timeframe: "monthly",
  },
]

export const leaderboard: LeaderboardEntry[] = [
  {
    id: "1",
    businessName: "Tech Solutions Inc",
    growth: 45,
    volume: 250000,
    rank: 1,
  },
  {
    id: "2",
    businessName: "Your Business",
    growth: 35,
    volume: 180000,
    rank: 2,
    isCurrentUser: true,
  },
  {
    id: "3",
    businessName: "Digital Services Co",
    growth: 30,
    volume: 150000,
    rank: 3,
  },
]

export const streakData = {
  currentStreak: 3,
  bestStreak: 6,
  nextMilestone: 6,
  reward: "10% bonus on next payout",
}

