"use client"

import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  ChevronRight,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  Filter,
  Plus,
  Search,
  Send,
  Settings,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ConsolidatedDashboard() {
  const [showCardNumber, setShowCardNumber] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white border-b">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Lumino</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5 text-slate-700" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Settings className="h-5 w-5 text-slate-700" />
            </Button>
            <Avatar className="h-9 w-9 border border-slate-200">
              <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 max-w-7xl mx-auto w-full">
        <div className="grid gap-6">
          {/* Welcome Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">Welcome back, John</h1>
              <p className="text-slate-500">Here&apos;s your financial overview</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Money
              </Button>
              <Button size="sm" variant="outline">
                <Send className="h-4 w-4 mr-2" />
                Send Money
              </Button>
            </div>
          </div>

          {/* Balance Card - Prominent */}
          <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg">
            <CardHeader className="pb-2">
              <CardDescription className="text-slate-300">Available Balance</CardDescription>
              <CardTitle className="text-4xl font-bold">$12,456.78</CardTitle>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div>
                  <p className="text-xs text-slate-300">Monthly Income</p>
                  <p className="text-sm font-medium flex items-center">
                    $8,350.00
                    <ArrowUpRight className="h-3 w-3 text-green-400 ml-1" />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-300">Monthly Spending</p>
                  <p className="text-sm font-medium flex items-center">
                    $3,245.33
                    <ArrowDownLeft className="h-3 w-3 text-red-400 ml-1" />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-300">Savings</p>
                  <p className="text-sm font-medium">$5,104.67</p>
                </div>
                <div>
                  <p className="text-xs text-slate-300">Monthly Goal</p>
                  <p className="text-sm font-medium">$5,000.00</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2 pt-0 pb-4">
              <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
                <Download className="h-4 w-4 mr-2" />
                Receive
              </Button>
              <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
                <Send className="h-4 w-4 mr-2" />
                Send
              </Button>
              <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
                <Plus className="h-4 w-4 mr-2" />
                Top Up
              </Button>
            </CardFooter>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Transactions Section - Large */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Transactions</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8">
                    See All
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Input placeholder="Search transactions..." className="h-9" />
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Search className="h-4 w-4" />
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="income">Income</TabsTrigger>
                  <TabsTrigger value="expense">Expense</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3 mt-0">
                  <TransactionItem
                    name="Payroll Deposit"
                    category="Income"
                    amount="+$2,450.00"
                    date="Today, 9:15 AM"
                    type="income"
                  />
                  <TransactionItem
                    name="Amazon"
                    category="Shopping"
                    amount="-$34.50"
                    date="Today, 11:30 AM"
                    type="expense"
                  />
                  <TransactionItem
                    name="Starbucks"
                    category="Food & Drink"
                    amount="-$5.40"
                    date="Yesterday, 8:30 AM"
                    type="expense"
                  />
                  <TransactionItem
                    name="Transfer from Sarah"
                    category="Transfer"
                    amount="+$120.00"
                    date="Yesterday, 3:45 PM"
                    type="income"
                  />
                  <TransactionItem
                    name="Netflix"
                    category="Subscription"
                    amount="-$14.99"
                    date="Mar 15, 2025"
                    type="expense"
                  />
                  <TransactionItem
                    name="Uber Ride"
                    category="Transportation"
                    amount="-$22.50"
                    date="Mar 14, 2025"
                    type="expense"
                  />
                  <TransactionItem
                    name="Freelance Payment"
                    category="Income"
                    amount="+$350.00"
                    date="Mar 12, 2025"
                    type="income"
                  />
                </TabsContent>

                <TabsContent value="income" className="space-y-3 mt-0">
                  <TransactionItem
                    name="Payroll Deposit"
                    category="Income"
                    amount="+$2,450.00"
                    date="Today, 9:15 AM"
                    type="income"
                  />
                  <TransactionItem
                    name="Transfer from Sarah"
                    category="Transfer"
                    amount="+$120.00"
                    date="Yesterday, 3:45 PM"
                    type="income"
                  />
                  <TransactionItem
                    name="Freelance Payment"
                    category="Income"
                    amount="+$350.00"
                    date="Mar 12, 2025"
                    type="income"
                  />
                </TabsContent>

                <TabsContent value="expense" className="space-y-3 mt-0">
                  <TransactionItem
                    name="Amazon"
                    category="Shopping"
                    amount="-$34.50"
                    date="Today, 11:30 AM"
                    type="expense"
                  />
                  <TransactionItem
                    name="Starbucks"
                    category="Food & Drink"
                    amount="-$5.40"
                    date="Yesterday, 8:30 AM"
                    type="expense"
                  />
                  <TransactionItem
                    name="Netflix"
                    category="Subscription"
                    amount="-$14.99"
                    date="Mar 15, 2025"
                    type="expense"
                  />
                  <TransactionItem
                    name="Uber Ride"
                    category="Transportation"
                    amount="-$22.50"
                    date="Mar 14, 2025"
                    type="expense"
                  />
                </TabsContent>

                <TabsContent value="pending" className="space-y-3 mt-0">
                  <TransactionItem
                    name="Deposit Pending"
                    category="Income"
                    amount="+$150.00"
                    date="Processing"
                    type="pending"
                  />
                  <TransactionItem
                    name="Refund Processing"
                    category="Shopping"
                    amount="+$29.99"
                    date="Processing"
                    type="pending"
                  />
                </TabsContent>
              </Tabs>
            </div>

            {/* Card Management - Smaller */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Card Management</h2>

              {/* Virtual Card */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4 rounded-xl aspect-[16/9] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start">
                      <div className="text-white font-bold text-base">Lumino</div>
                      <div className="text-white opacity-80 text-sm">VISA</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-white opacity-80 tracking-widest text-sm">
                        {showCardNumber ? "4589 7458 2145 9874" : "•••• •••• •••• 4589"}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-white text-xs opacity-80">
                          <div>CARD HOLDER</div>
                          <div className="font-medium">JOHN DOE</div>
                        </div>
                        <div className="text-white text-xs opacity-80">
                          <div>EXPIRES</div>
                          <div className="font-medium">05/28</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowCardNumber(!showCardNumber)}
                  className="text-xs"
                >
                  {showCardNumber ? (
                    <>
                      <EyeOff className="h-3 w-3 mr-2" />
                      Hide Details
                    </>
                  ) : (
                    <>
                      <Eye className="h-3 w-3 mr-2" />
                      Show Details
                    </>
                  )}
                </Button>
                <Button variant="outline" size="sm" className="text-xs">
                  <CreditCard className="h-3 w-3 mr-2" />
                  Manage Card
                </Button>
              </div>

              {/* Quick Card Controls */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Card Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 p-2 rounded-full">
                        <CreditCard className="h-4 w-4 text-slate-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Card Status</p>
                        <p className="text-xs text-slate-500">Active and working</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-slate-100 p-2 rounded-full">
                        <Download className="h-4 w-4 text-slate-700" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Spending Limit</p>
                        <p className="text-xs text-slate-500">Monthly limit</p>
                      </div>
                    </div>
                    <p className="font-medium text-sm">$5,000</p>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button variant="outline" size="sm" className="w-full text-xs">
                    View All Settings
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent Payments */}
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Recent Payments</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-slate-100 text-slate-800 text-xs">NF</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Netflix</p>
                        <p className="text-xs text-slate-500">Mar 15, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-sm">$14.99</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-slate-100 text-slate-800 text-xs">SB</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Spotify</p>
                        <p className="text-xs text-slate-500">Mar 10, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-sm">$9.99</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-slate-100 text-slate-800 text-xs">AZ</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Amazon Prime</p>
                        <p className="text-xs text-slate-500">Mar 5, 2025</p>
                      </div>
                    </div>
                    <p className="font-medium text-sm">$12.99</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function TransactionItem({ name, category, amount, date, type }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === "income" ? "bg-green-100" : type === "expense" ? "bg-red-100" : "bg-yellow-100"
          }`}
        >
          {type === "income" ? (
            <ArrowUpRight className={`h-5 w-5 text-green-600`} />
          ) : type === "expense" ? (
            <ArrowDownLeft className={`h-5 w-5 text-red-600`} />
          ) : (
            <Clock className={`h-5 w-5 text-yellow-600`} />
          )}
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-slate-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p
          className={`font-medium ${
            type === "income" ? "text-green-600" : type === "expense" ? "text-slate-900" : "text-yellow-600"
          }`}
        >
          {amount}
        </p>
        <p className="text-xs text-slate-500">{date}</p>
      </div>
    </div>
  )
}

function Clock(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
