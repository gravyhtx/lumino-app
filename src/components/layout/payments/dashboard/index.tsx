"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'
import { FileText, Users, Wallet, Clock } from 'lucide-react'

// Mock data for the revenue chart
const revenueData = [
  { date: 'Aug 25', amount: 0 },
  { date: 'Sep 01', amount: 0 },
  { date: 'Sep 08', amount: 0 },
  { date: 'Sep 15', amount: 0 },
  { date: 'Sep 22', amount: 2000 },
  { date: 'Sep 29', amount: 4500 },
  { date: 'Oct 06', amount: 1000 },
  { date: 'Oct 13', amount: 500 },
  { date: 'Oct 20', amount: 4500 },
  { date: 'Oct 27', amount: 1000 },
  { date: 'Nov 03', amount: 4000 },
  { date: 'Nov 10', amount: 0 },
]

// Mock data for the donut charts
const outstandingBalanceData = [
  { name: 'Upcoming', value: 12664, count: 10, color: '#FFB98A' },
  { name: '0-14 days', value: 12250, count: 2, color: '#FFA366' },
  { name: '15-30 days', value: 400, count: 2, color: '#FF8C42' },
  { name: '>30 days', value: 0, count: 0, color: '#FF751F' },
]

const timeToPayData = [
  { name: '< 1 hour', value: 100, color: '#90CDF4' },
  { name: '< 1 day', value: 0, color: '#63B3ED' },
  { name: '< 1 week', value: 0, color: '#4299E1' },
  { name: '> 1 week', value: 0, color: '#2B6CB0' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Revenue Summary</h2>
          <p className="text-sm text-muted-foreground">
            $14,305 ($493 avg. transaction)
          </p>
        </div>
        <div className="flex gap-2">
          <Select defaultValue="total">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total">Total Revenue</SelectItem>
              <SelectItem value="net">Net Revenue</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="12weeks">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="12weeks">Last 12 Weeks</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis 
                  tickFormatter={(value) => `$${value/1000}K`}
                  ticks={[0, 1000, 2000, 3000, 4000, 5000]}
                />
                <Tooltip
                  formatter={(value: number | string, name: string, props: unknown) => [
                    `$${value}`,
                    'Revenue',
                  ]}
                  labelFormatter={(label: string) => `Date: ${label}`}
                />
                <Line 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-muted/50">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <FileText className="h-6 w-6 mb-2" />
            <h3 className="text-sm font-medium">Create an Invoice</h3>
          </CardContent>
        </Card>
        <Card className="bg-muted/50">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Wallet className="h-6 w-6 mb-2" />
            <h3 className="text-sm font-medium">Request a Payment</h3>
          </CardContent>
        </Card>
        <Card className="bg-muted/50">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Clock className="h-6 w-6 mb-2" />
            <h3 className="text-sm font-medium">Take a Payment</h3>
          </CardContent>
        </Card>
        <Card className="bg-muted/50">
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Users className="h-6 w-6 mb-2" />
            <h3 className="text-sm font-medium">Add a Customer</h3>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Outstanding Balance
            </CardTitle>
            <div className="text-2xl font-bold">$25,314</div>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={outstandingBalanceData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {outstandingBalanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number | string, name: string, props: {payload?: {count?: number}}) => {
                      const count = props?.payload?.count ?? 0; // Ensure safe access
                      return [`$${value.toLocaleString()} (${count} items)`, name];
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {outstandingBalanceData.map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>{item.name}</div>
                  <div className="ml-auto">
                    ${item.value.toLocaleString()} ({item.count})
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Average Time To Pay
            </CardTitle>
            <div className="text-2xl font-bold">7m</div>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={timeToPayData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {timeToPayData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: number | string) => [`${value}%`, 'Percentage']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-1">
              {timeToPayData.map((item, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div
                    className="h-3 w-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <div>{item.name}</div>
                  <div className="ml-auto">{item.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

