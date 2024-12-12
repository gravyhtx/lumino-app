import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { InfoCard } from "@/components/ui/info-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { classnames } from "@/utils"

// Mock data for goals
const salesGoals = [
  { id: 1, name: "Monthly Sales", target: 20000, completed: 15000 },
  { id: 2, name: "Quarterly Revenue", target: 60000, completed: 45000 },
  { id: 3, name: "Annual Target", target: 240000, completed: 180000 },
]

const revenueData = [
  { month: 'Jan', revenue: 20000 },
  { month: 'Feb', revenue: 22000 },
  { month: 'Mar', revenue: 25000 },
  { month: 'Apr', revenue: 28000 },
  { month: 'May', revenue: 30000 },
  { month: 'Jun', revenue: 32000 },
]

const adSpendGoals = [
  { id: 1, name: "Monthly Ad Spend", target: 5000, spent: 4000 },
  { id: 2, name: "Quarterly Ad Budget", target: 15000, spent: 12000 },
]

export default function GoalTrackingSuggestions() {
  const [activeTab, setActiveTab] = useState("sales")
  const [timeRange, setTimeRange] = useState("month")

  return (
    <div style={{ width: "100%", padding: "0 20px" }}>
      <h1 className="text-2xl font-bold mb-6">Goal Tracking & Suggestions Builder</h1>
      <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mb-6')}>
        <InfoCard title="Active Goals" amount="5" timeSince="Current" />
        <InfoCard title="Goals Completed" amount="12" timeSince="This Quarter" />
        <InfoCard title="Upcoming Deadlines" amount="3" timeSince="Next 7 Days" />
        <InfoCard title="Goal Success Rate" amount="80%" timeSince="All Time" />
      </div>
      <Card className="w-full">
        <CardContent className="pt-6">
          <CardTitle className="mb-4">Goal Categories</CardTitle>
          <Tabs defaultValue="sales" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="sales">Sales Goals</TabsTrigger>
              <TabsTrigger value="revenue">Total Revenue</TabsTrigger>
              <TabsTrigger value="cash">Total Cash Collected</TabsTrigger>
              <TabsTrigger value="adspend">Ad Spend Goals</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="mt-6">
              <div className="mb-4">
                <Select onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="quarter">Quarter</SelectItem>
                    <SelectItem value="year">Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-4">
                {salesGoals.map(goal => (
                  <div key={goal.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{goal.name}</span>
                      <span className="text-sm font-medium">
                        ${goal.completed.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(goal.completed / goal.target) * 100} className="w-full" />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="revenue" className="mt-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                At the current rate, you&apos;ll reach $384,000 by year-end.
              </p>
            </TabsContent>
            <TabsContent value="cash" className="mt-6">
              <div className="mb-4">
                <h3 className="text-lg font-semibold">Cash Collected: $150,000</h3>
                <p className="text-sm text-muted-foreground">Goal: $200,000</p>
              </div>
              <Progress value={75} className="w-full mb-4" />
              <p className="text-sm text-muted-foreground">
                You&apos;re 75% of the way to your cash collection goal. Keep it up!
              </p>
            </TabsContent>
            <TabsContent value="adspend" className="mt-6">
              <div className="space-y-4">
                {adSpendGoals.map(goal => (
                  <div key={goal.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{goal.name}</span>
                      <span className="text-sm font-medium">
                        ${goal.spent.toLocaleString()} / ${goal.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(goal.spent / goal.target) * 100} className="w-full" />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                ROI: $5 revenue per $1 spent on ads.
              </p>
              <p className="mt-2 text-sm font-medium">
                Suggestion: Increase ad spend by $500 to hit your revenue goal.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Card className="w-full mt-6">
        <CardContent className="pt-6">
          <CardTitle className="mb-4">Create New Goal</CardTitle>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="goalName">Goal Name</Label>
                <Input id="goalName" placeholder="Enter goal name" />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="revenue">Revenue</SelectItem>
                    <SelectItem value="adSpend">Ad Spend</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="targetAmount">Target Amount</Label>
                <Input id="targetAmount" type="number" placeholder="Enter target amount" />
              </div>
              <div>
                <Label htmlFor="deadline">Deadline</Label>
                <Input id="deadline" type="date" />
              </div>
            </div>
            <div>
              <Label htmlFor="reward">Optional Reward</Label>
              <Input id="reward" placeholder="Enter reward for completion" />
            </div>
            <Button type="submit">Create Goal</Button>
          </form>
        </CardContent>
      </Card>
      <div className="mt-6 bg-muted p-4 rounded-lg">
        <h3 className="font-semibold mb-2">AI-Driven Suggestion</h3>
        <p className="text-sm text-muted-foreground">
          Based on your current performance, we recommend a $5,000 sales goal for this month.
        </p>
        <Button variant="outline" className="mt-2">Generate More Suggestions</Button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-muted-foreground">
          Need inspiration? Use our AI to suggest your next goal!
        </p>
      </div>
    </div>
  )
}

