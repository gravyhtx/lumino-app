"use client"

import { useState } from "react"
import { Award, Compass, Shield, Users, DollarSign, Clock, ChevronRight, Lightbulb } from "lucide-react"
import { PillarCard } from "./pillar-card"
import { ProgressStats } from "./progress-stats"
import { PillarPrompt } from "./pillar-prompt"

export function AetherPillarsPage() {
  const [activePillar, setActivePillar] = useState<string | null>(null)

  const pillars = [
    {
      id: "free-inspired",
      title: "Free & Inspired Life",
      icon: Award,
      description: "Align your business goals with personal purpose and long-term freedom.",
      progress: 65,
      color: "from-lumi-emerald to-lumi-emerald2",
      prompts: [
        "What does financial freedom look like to you?",
        "If your business could change one thing in the world, what would it be?",
        "Which habits are moving you closer to the life you want?",
      ],
    },
    {
      id: "navigation",
      title: "Navigation Tools",
      icon: Compass,
      description: "Equip yourself with tools to make data-driven decisions.",
      progress: 42,
      color: "from-lumi-blue to-lumi-blue2",
      prompts: [
        "What is the difference between your current cash flow and projected growth?",
        "What assumptions are you making in your business right now?",
        "How do you track and measure your business performance?",
      ],
    },
    {
      id: "risk",
      title: "Risk Management",
      icon: Shield,
      description: "Anticipate and prevent threats to your business.",
      progress: 28,
      color: "from-lumi-red to-lumi-red2",
      prompts: [
        "Do you have backup processing for high-risk volume?",
        "Is your customer data backed up and secured?",
        "How would you survive 90 days of no revenue?",
      ],
    },
    {
      id: "living-equity",
      title: "Living Equity",
      icon: Users,
      description: "Reinforce the value of relationships, skills, and trust as long-term wealth.",
      progress: 53,
      color: "from-lumi-purple to-lumi-purple2",
      prompts: [
        "Which referral partners generate the most trust and value?",
        "What new skill would unlock your next level?",
        "Who are your top 5 long-term clients — and why?",
      ],
    },
    {
      id: "financial-equity",
      title: "Financial Equity",
      icon: DollarSign,
      description: "Build smart financial systems and access capital.",
      progress: 37,
      color: "from-lumi-gold to-lumi-gold2",
      prompts: [
        "Are you reinvesting into your growth systems?",
        "Do you know your break-even cost on every dollar of revenue?",
        "Have you structured your pricing for maximum lifetime value?",
      ],
    },
    {
      id: "turtle-forth",
      title: "Turtle Forth",
      icon: Clock,
      description: "Instill patience, resilience, and long-term commitment.",
      progress: 19,
      color: "from-lumi-green to-lumi-green2",
      prompts: [
        "Where were you 6 months ago? Where are you now?",
        "What would compound results look like in 3 years?",
        "What small step can you take today?",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0c14] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Aether Wealth Protocol</h1>
          <div className="text-right">
            <p className="text-sm text-gray-400">Talking:</p>
          </div>
        </div>

        <ProgressStats />

        <h2 className="text-2xl font-bold mt-12 mb-6">The 6 Pillars of Conscious Capital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.id}
              pillar={pillar}
              isActive={activePillar === pillar.id}
              onClick={() => setActivePillar(pillar.id === activePillar ? null : pillar.id)}
            />
          ))}
        </div>

        {activePillar && (
          <div className="mt-8 bg-[#131629] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-lumi-accent-yellow" />
              <h3 className="text-xl font-semibold">AI-Suggested Prompts</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars
                .find((p) => p.id === activePillar)
                ?.prompts.map((prompt, index) => (
                  <PillarPrompt key={index} prompt={prompt} />
                ))}
            </div>
            <div className="mt-6 flex justify-end">
              <button className="bg-gradient-to-r from-lumi-sky to-lumi-sky2 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity">
                Start This Pillar <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
