"use client"

import type React from "react"

import { useState } from "react"
import { ArrowLeft, Lightbulb, MessageSquare, CheckCircle, ChevronRight } from "lucide-react"

interface PillarDetailPageProps {
  pillar: {
    id: string
    title: string
    icon: React.ElementType
    description: string
    prompts: string[]
    color: string
  }
  onBack: () => void
}

export function PillarDetailPage({ pillar, onBack }: PillarDetailPageProps) {
  const [activePrompt, setActivePrompt] = useState<string | null>(null)
  const [response, setResponse] = useState("")

  const { title, icon: Icon, description, prompts, color } = pillar

  const handleSubmitResponse = () => {
    // Here you would typically send the response to your backend
    console.log("Submitted response:", response)
    setActivePrompt(null)
    setResponse("")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Pillars
      </button>

      <div className="flex items-center gap-4 mb-6">
        <div className={`p-4 rounded-lg bg-gradient-to-r ${color}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#131629] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <h3 className="text-xl font-semibold">Reflection Prompts</h3>
          </div>
          <div className="space-y-4">
            {prompts.map((prompt, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-colors cursor-pointer ${
                  activePrompt === prompt ? "border-purple-500 bg-[#1a1f36]" : "border-gray-800 hover:border-gray-700"
                }`}
                onClick={() => setActivePrompt(prompt)}
              >
                <p className="text-sm">{prompt}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#131629] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-5 w-5 text-blue-400" />
            <h3 className="text-xl font-semibold">Your Response</h3>
          </div>

          {activePrompt ? (
            <>
              <p className="text-sm text-gray-400 mb-3">Responding to:</p>
              <p className="text-sm font-medium mb-4 p-3 bg-[#1a1f36] rounded-lg border border-gray-800">
                {activePrompt}
              </p>

              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Type your response here..."
                className="w-full h-32 p-3 bg-[#1a1f36] rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleSubmitResponse}
                  disabled={!response.trim()}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Response <CheckCircle className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-gray-400 mb-4">Select a prompt to respond to</p>
              <Lightbulb className="h-8 w-8 text-yellow-400 opacity-50" />
            </div>
          )}
        </div>
      </div>

      <div className="bg-[#131629] rounded-xl p-6 border border-gray-800">
        <h3 className="text-xl font-semibold mb-4">AI Tools for this Pillar</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {getAiToolsForPillar(pillar.id).map((tool, index) => (
            <div
              key={index}
              className="p-4 rounded-lg border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer"
            >
              <h4 className="font-medium mb-2">{tool.name}</h4>
              <p className="text-sm text-gray-400 mb-3">{tool.description}</p>
              <div className="flex justify-end">
                <button className="text-purple-400 text-sm flex items-center gap-1 hover:text-purple-300">
                  Launch <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function getAiToolsForPillar(pillarId: string) {
  const toolsByPillar: Record<string, Array<{ name: string; description: string }>> = {
    "free-inspired": [
      {
        name: "AI-guided Vision Setting",
        description: "Create a personalized vision board for your business and life goals.",
      },
      { name: "Weekly Purpose Sync", description: "Automated reminders to keep you aligned with your core values." },
      { name: "Milestone Rewards", description: "Gamified rewards for achieving values-aligned goals." },
    ],
    navigation: [
      { name: "Real-time Dashboards", description: "Track revenue, fees saved, and growth rates in real-time." },
      { name: "News Relevance Engine", description: "Industry-specific alerts filtered for your business." },
      { name: "Scenario Advisor", description: "Get actionable advice based on your business data." },
    ],
    risk: [
      { name: "Risk Audit Checklist", description: "AI-generated checklist to identify potential risks." },
      { name: "Alert Notifications", description: "Get notified about chargebacks, compliance issues, and more." },
      {
        name: "Business Health Monitor",
        description: "Red/yellow/green status indicators for key business functions.",
      },
    ],
    "living-equity": [
      { name: "Client Equity Tracker", description: "Measure and visualize long-term customer value." },
      { name: "Referral Engine", description: "Build living equity inside the Lumino ecosystem." },
      { name: "Skill Development", description: "Course recommendations to upskill via Aether Learn." },
    ],
    "financial-equity": [
      { name: "Net Worth Visualizer", description: "Integrated balance sheet and net worth tracking." },
      { name: "AI Budget Builder", description: "Create a 'profit-first' allocation system." },
      { name: "Financial Growth Alerts", description: "Real-time alerts about your financial growth." },
    ],
    "turtle-forth": [
      { name: "Micro-task Gamification", description: "Break down big goals into small, achievable tasks." },
      { name: "Weekly Win Tracker", description: "Log and reflect on your weekly wins." },
      { name: "Consistency Dashboard", description: "Track your 'time in the game' with compounding metrics." },
    ],
  }

  return toolsByPillar[pillarId] || []
}
