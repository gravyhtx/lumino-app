"use client"

import type React from "react"

import { ChevronDown, ChevronUp } from "lucide-react"

interface PillarCardProps {
  pillar: {
    id: string
    title: string
    icon: React.ElementType
    description: string
    progress: number
    color: string
  }
  isActive: boolean
  onClick: () => void
}

export function PillarCard({ pillar, isActive, onClick }: PillarCardProps) {
  const { title, icon: Icon, description, progress, color } = pillar

  return (
    <div
      className={`bg-[#131629] rounded-xl p-6 border transition-all cursor-pointer ${
        isActive ? "border-lumi-sky" : "border-gray-800 hover:border-gray-700"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color} bg-opacity-20`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-400">
          {isActive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className={`h-2 rounded-full bg-gradient-to-r ${color}`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}
