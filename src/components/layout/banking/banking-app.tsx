import {
  Bell,
  ChevronRight,
  CreditCard,
  Download,
  Home,
  PieChart,
  Plus,
  Search,
  Send,
  Settings,
  User,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BankingApp() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <header className="px-4 py-6 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border border-slate-200">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm font-medium">Welcome back</h1>
            <p className="text-xs text-slate-500">John Doe</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5 text-slate-700" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5 text-slate-700" />
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6 overflow-auto">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white border-none shadow-lg">
          <CardHeader className="pb-2">
            <CardDescription className="text-slate-300">Available Balance</CardDescription>
            <CardTitle className="text-3xl font-bold">$12,456.78</CardTitle>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-300">Monthly Spending</p>
                <p className="text-sm font-medium">$3,245.33</p>
              </div>
              <div>
                <p className="text-xs text-slate-300">Monthly Limit</p>
                <p className="text-sm font-medium">$5,000.00</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 pt-2">
            <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
            <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
              <Download className="h-4 w-4 mr-2" />
              Receive
            </Button>
            <Button size="sm" variant="secondary" className="flex-1 bg-white/10 hover:bg-white/20 border-none">
              <Plus className="h-4 w-4 mr-2" />
              Top Up
            </Button>
          </CardFooter>
        </Card>

        {/* Virtual Card */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Virtual Card</h2>
            <Button variant="ghost" size="sm" className="text-xs text-slate-500">
              Manage
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-xl">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 rounded-xl aspect-[16/9] relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div className="text-white font-bold text-lg">Lumino</div>
                  <div className="text-white opacity-80">VISA</div>
                </div>
                <div className="space-y-4">
                  <div className="text-white opacity-80 tracking-widest">•••• •••• •••• 4589</div>
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

          <div className="grid grid-cols-3 gap-3">
            <Button variant="outline" size="sm" className="flex flex-col items-center py-3 h-auto">
              <CreditCard className="h-5 w-5 mb-1" />
              <span className="text-xs">Freeze</span>
            </Button>
            <Button variant="outline" size="sm" className="flex flex-col items-center py-3 h-auto">
              <Settings className="h-5 w-5 mb-1" />
              <span className="text-xs">Limits</span>
            </Button>
            <Button variant="outline" size="sm" className="flex flex-col items-center py-3 h-auto">
              <Search className="h-5 w-5 mb-1" />
              <span className="text-xs">Details</span>
            </Button>
          </div>
        </div>

        {/* Transactions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Button variant="ghost" size="sm" className="text-xs text-slate-500">
              See All
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="grid grid-cols-3 mb-2">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expense</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-3">
              <TransactionItem name="Amazon" category="Shopping" amount="-$34.50" date="Today" type="expense" />
              <TransactionItem name="Payroll" category="Salary" amount="+$2,450.00" date="Yesterday" type="income" />
              <TransactionItem
                name="Starbucks"
                category="Food & Drink"
                amount="-$5.40"
                date="Yesterday"
                type="expense"
              />
              <TransactionItem
                name="Transfer from Sarah"
                category="Transfer"
                amount="+$120.00"
                date="Mar 15"
                type="income"
              />
              <TransactionItem name="Netflix" category="Subscription" amount="-$14.99" date="Mar 14" type="expense" />
            </TabsContent>
            <TabsContent value="income" className="space-y-3">
              <TransactionItem name="Payroll" category="Salary" amount="+$2,450.00" date="Yesterday" type="income" />
              <TransactionItem
                name="Transfer from Sarah"
                category="Transfer"
                amount="+$120.00"
                date="Mar 15"
                type="income"
              />
            </TabsContent>
            <TabsContent value="expense" className="space-y-3">
              <TransactionItem name="Amazon" category="Shopping" amount="-$34.50" date="Today" type="expense" />
              <TransactionItem
                name="Starbucks"
                category="Food & Drink"
                amount="-$5.40"
                date="Yesterday"
                type="expense"
              />
              <TransactionItem name="Netflix" category="Subscription" amount="-$14.99" date="Mar 14" type="expense" />
            </TabsContent>
          </Tabs>
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="bg-white border-t border-slate-200 py-2">
        <div className="grid grid-cols-5 gap-1">
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto rounded-none">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto rounded-none">
            <CreditCard className="h-5 w-5" />
            <span className="text-xs mt-1">Cards</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto rounded-none">
            <Send className="h-5 w-5" />
            <span className="text-xs mt-1">Payments</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto rounded-none">
            <PieChart className="h-5 w-5" />
            <span className="text-xs mt-1">Insights</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center py-2 h-auto rounded-none">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </footer>
    </div>
  )
}

function TransactionItem({ name, category, amount, date, type }) {
  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === "income" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {type === "income" ? (
            <Download className={`h-5 w-5 text-green-600`} />
          ) : (
            <Send className={`h-5 w-5 text-red-600`} />
          )}
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-slate-500">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${type === "income" ? "text-green-600" : "text-slate-900"}`}>{amount}</p>
        <p className="text-xs text-slate-500">{date}</p>
      </div>
    </div>
  )
}
