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
    <div className="flex flex-col">
      {/* Header */}
      {/* <header className="px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border border-slate-200">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm font-medium">Welcome back</h1>
            <p className="text-xs text-lumi-slate">John Doe</p>
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
      </header> */}

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
            <Button size="sm" variant="secondary" className="flex-1 border-none">
              <Send className="h-4 w-4 mr-2" />
              Send
            </Button>
            <Button size="sm" variant="secondary" className="flex-1 border-none">
              <Download className="h-4 w-4 mr-2" />
              Receive
            </Button>
            <Button size="sm" variant="secondary" className="flex-1 border-none">
              <Plus className="h-4 w-4 mr-2" />
              Add Cash
            </Button>
          </CardFooter>
        </Card>

        {/* Transactions */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
            <Button variant="ghost" size="sm" className="text-xs text-lumi-slate">
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
      {/* <footer className="border-t border-slate-200 py-2">
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
      </footer> */}
    </div>
  )
}

type TransactionType = "income" | "expense" | "pending"

interface TransactionItemProps {
  name: string
  category: string
  amount: string
  date: string
  type: TransactionType
}

function TransactionItem({ name, category, amount, date, type }: TransactionItemProps) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-200">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            type === "income" ? "bg-lumi-green" : "bg-lumi-red"
          }`}
        >
          {type === "income" ? (
            <Download className={`h-5 w-5 text-lumi-green`} />
          ) : (
            <Send className={`h-5 w-5 text-lumi-red`} />
          )}
        </div>
        <div>
          <p className="font-medium text-sm">{name}</p>
          <p className="text-xs text-lumi-slate">{category}</p>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${type === "income" ? "text-lumi-accent-green" : "text-white"}`}>{amount}</p>
        <p className="text-xs text-lumi-slate">{date}</p>
      </div>
    </div>
  )
}
