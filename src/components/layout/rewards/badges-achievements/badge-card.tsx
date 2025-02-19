"use client"

import { Award, Zap, Timer, Trophy, Users, DollarSign, Star, TrendingUp, CreditCard } from "lucide-react"
import { Card } from "@/components/ui/card"

interface BadgeCardProps {
  title: string
  description: string
  points: number
  icon: keyof typeof icons
}

const icons = {
  award: Award,
  zap: Zap,
  timer: Timer,
  trophy: Trophy,
  users: Users,
  dollarSign: DollarSign,
  star: Star,
  trendingUp: TrendingUp,
  creditCard: CreditCard,
}

export function BadgeCard({ title, description, points, icon }: BadgeCardProps) {
  const Icon = icons[icon] || Trophy; // Default to Trophy if undefined

  return (
    <div className="group relative h-[320px] w-[250px] [perspective:1000px] overflow-visible">
      {/* Inner flipping container */}
      <div className="absolute inset-0 h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* Front of card */}
        <Card className="!absolute inset-0 flex flex-col rounded-xl border-0 bg-card p-4 [backface-visibility:hidden] h-full">
          <div className="flex h-[60%] items-center justify-center rounded-t-lg bg-gradient-to-br from-background/50 to-background/10 backdrop-blur-sm">
            <Icon className="h-16 w-16 text-primary" />
          </div>
          <div className="mt-4 space-y-2 flex-grow">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">ACHIEVEMENT</span>
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="absolute bottom-3 right-3 rounded bg-primary px-2 py-1 text-sm font-medium text-primary-foreground">
            +{points} pts
          </div>
        </Card>

        {/* Back of card */}
        <Card className="!absolute inset-0 flex flex-col items-center justify-center rounded-xl border-0 bg-card p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] h-full">
          <div className="relative mb-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
              <Icon className="h-12 w-12 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
          </div>
          <h3 className="mb-1 text-xl font-semibold">{title}</h3>
          <p className="mb-6 text-muted-foreground">Achievement</p>
          <button className="w-full rounded-md bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20">
            Track
          </button>
        </Card>

      </div>
    </div>
  )
}