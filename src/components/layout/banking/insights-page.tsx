import { ArrowUp, ChevronRight, TrendingDown, TrendingUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 py-6 ">
        <h1 className="text-xl font-bold">Financial Insights</h1>
        <p className="text-sm text-slate-500">Track your spending and savings</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6 overflow-auto">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Monthly Income</CardDescription>
              <CardTitle className="text-lg font-bold flex items-center">
                $4,580.00
                <TrendingUp className="h-4 w-4 ml-1 text-lumi-accent-green" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-lumi-accent-green">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs">Monthly Expenses</CardDescription>
              <CardTitle className="text-lg font-bold flex items-center">
                $3,245.33
                <TrendingDown className="h-4 w-4 ml-1 text-lumi-accent-red" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-lumi-accent-red">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Spending Analysis */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Spending Analysis</CardTitle>
            <CardDescription>Your top spending categories</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Shopping</span>
                <span className="font-medium">$1,240.00</span>
              </div>
              <Progress value={38} className="h-2" />
              <p className="text-xs text-slate-500">38% of total expenses</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Food & Dining</span>
                <span className="font-medium">$845.50</span>
              </div>
              <Progress value={26} className="h-2" />
              <p className="text-xs text-slate-500">26% of total expenses</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Housing</span>
                <span className="font-medium">$650.00</span>
              </div>
              <Progress value={20} className="h-2" />
              <p className="text-xs text-slate-500">20% of total expenses</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Entertainment</span>
                <span className="font-medium">$325.75</span>
              </div>
              <Progress value={10} className="h-2" />
              <p className="text-xs text-slate-500">10% of total expenses</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Other</span>
                <span className="font-medium">$184.08</span>
              </div>
              <Progress value={6} className="h-2" />
              <p className="text-xs text-slate-500">6% of total expenses</p>
            </div>
          </CardContent>
        </Card>

        {/* Savings Goals */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Savings Goals</h2>
            <Button variant="ghost" size="sm" className="text-xs text-slate-500">
              Add New
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Vacation Fund</CardTitle>
              <CardDescription>$1,200 of $3,000 goal</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={40} className="h-2 mb-2" />
              <div className="flex justify-between text-xs text-slate-500">
                <span>40% complete</span>
                <span>$1,800 to go</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Emergency Fund</CardTitle>
              <CardDescription>$5,400 of $10,000 goal</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={54} className="h-2 mb-2" />
              <div className="flex justify-between text-xs text-slate-500">
                <span>54% complete</span>
                <span>$4,600 to go</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Comparison */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle className="text-lg">Monthly Comparison</CardTitle>
            <Tabs defaultValue="expenses" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="expenses">Expenses</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
              </TabsList>
              <TabsContent value="expenses" className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-slate-900 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">March 2025</p>
                        <p className="text-xs text-slate-500">Current month</p>
                      </div>
                    </div>
                    <p className="font-medium">$3,245.33</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-slate-300 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">February 2025</p>
                        <p className="text-xs text-slate-500">Previous month</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$3,012.45</p>
                      <p className="text-xs text-lumi-accent-red">
                        +7.7% <ArrowUp className="inline h-3 w-3" />
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="income" className="pt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-slate-900 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">March 2025</p>
                        <p className="text-xs text-slate-500">Current month</p>
                      </div>
                    </div>
                    <p className="font-medium">$4,580.00</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-10 bg-slate-300 rounded-full mr-3"></div>
                      <div>
                        <p className="text-sm font-medium">February 2025</p>
                        <p className="text-xs text-slate-500">Previous month</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">$4,089.25</p>
                      <p className="text-xs text-lumi-accent-green">
                        +12.0% <ArrowUp className="inline h-3 w-3" />
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </main>
    </div>
  )
}
