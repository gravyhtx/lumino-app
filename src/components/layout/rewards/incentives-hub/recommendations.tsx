"use client"

import type { Recommendation } from "./types/incentives"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

interface RecommendationsProps {
  recommendations: Recommendation[]
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Recommended Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-4 rounded-lg border bg-card hover:bg-accent transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-medium">{rec.title}</h4>
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
                <span className="text-sm font-medium text-primary">{rec.reward}</span>
              </div>
              {rec.deadline && (
                <p className="text-sm text-muted-foreground mb-3">
                  Expires: {new Date(rec.deadline).toLocaleDateString()}
                </p>
              )}
              <Button variant="outline" size="sm" className="w-full">
                {rec.action}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

