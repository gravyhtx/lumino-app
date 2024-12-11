import React, { useState } from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { InfoCard } from "@/components/ui/info-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell, Legend } from 'recharts'
import { classnames } from "@/utils"

// Mock data for the line chart
const pointsData = [
  { date: '2023-01-01', points: 100 },
  { date: '2023-02-01', points: 250 },
  { date: '2023-03-01', points: 380 },
  { date: '2023-04-01', points: 470 },
  { date: '2023-05-01', points: 600 },
  { date: '2023-06-01', points: 750 },
]

// Mock data for the pie chart
const activityData = [
  { name: 'Transactions', value: 70 },
  { name: 'Goal completions', value: 20 },
  { name: 'Referrals', value: 10 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export default function PointsSummary() {
  const [timeRange, setTimeRange] = useState('monthly')

  return (
    <div style={{width: "100%", padding: "0 20px"}}>
      <h1 className="text-2xl font-bold mb-6">Points Summary</h1>
      <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-4 w-full mb-6')}>
        <InfoCard title="Total Points Available" amount="1,250" timeSince="Current Balance" />
        <InfoCard title="Lifetime Points Earned" amount="5,000" timeSince="All Time" />
        <InfoCard title="Rewards Redeemed" amount="3,750" timeSince="Points Used" />
        <InfoCard title="Expiring Points" amount="500" timeSince="Next 30 Days" />
      </div>
      <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
        <div className="w-full lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">Points Accumulation Over Time</CardTitle>
              <div className="mb-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={pointsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="points" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <CardTitle className="mb-4">Breakdown by Activity</CardTitle>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={activityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {activityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg mb-4">Ready to use your points?</p>
        <Button size="lg">Redeem Your Points Now!</Button>
      </div>
    </div>
  )
}