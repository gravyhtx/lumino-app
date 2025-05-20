"use client"

import { ArrowLeft, ChevronRight, CreditCard, Eye, EyeOff, Lock, Plus, Search, Settings, Shield, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function CardManagement() {
  const [showCardNumber, setShowCardNumber] = useState(false)
  const [isCardFrozen, setIsCardFrozen] = useState(false)
  const [isContactlessEnabled, setIsContactlessEnabled] = useState(true)
  const [isOnlinePaymentsEnabled, setIsOnlinePaymentsEnabled] = useState(true)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">Card Management</h1>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCardNumber(!showCardNumber)}
          className="text-xs"
        >
          {showCardNumber ? (
            <>
              <EyeOff className="h-3 w-3 mr-2" />
              Hide Card Details
            </>
          ) : (
            <>
              <Eye className="h-3 w-3 mr-2" />
              Show Card Details
            </>
          )}
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 space-y-6 overflow-auto">
        {/* Virtual Card */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className={`bg-gradient-to-r from-lumi-green via-lumi-emerald to-lumi-teal w-full max-w-[400px] mx-auto p-5 rounded-lg aspect-[16/9] relative overflow-hidden ${isCardFrozen ? "opacity-70" : ""}`}
          >
            {isCardFrozen && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="bg-white/90 px-4 py-2 rounded-full flex items-center">
                  <Lock className="h-4 w-4 mr-2" />
                  <span className="font-medium text-sm">Card Frozen</span>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <div className="text-white font-bold text-lg">Lumino</div>
                <div className="text-white opacity-80">VISA</div>
              </div>
              <div className="space-y-4">
                <div className="text-white opacity-80 tracking-widest">
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

        <div className="grid grid-cols-3 gap-3 max-w-[500px] w-full mx-auto">
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

        {/* Card Details */}
        <Card>
          <CardHeader>
            <CardTitle>Card Details</CardTitle>
            <CardDescription>View and manage your virtual card details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-lumi-slate">Card Number</p>
                <p className="font-medium">{showCardNumber ? "4589 7458 2145 9874" : "•••• •••• •••• 4589"}</p>
              </div>
              <div>
                <p className="text-xs text-lumi-slate">CVV</p>
                <p className="font-medium">{showCardNumber ? "123" : "•••"}</p>
              </div>
              <div>
                <p className="text-xs text-lumi-slate">Expiry Date</p>
                <p className="font-medium">05/28</p>
              </div>
              <div>
                <p className="text-xs text-lumi-slate">Card Type</p>
                <p className="font-medium">Virtual Debit</p>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-xs text-lumi-slate">Billing Address</p>
              <p className="font-medium">123 Main Street</p>
              <p className="text-sm">San Francisco, CA 94105</p>
            </div>
          </CardContent>
        </Card>

        {/* Card Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Card Controls</CardTitle>
            <CardDescription>Manage your card security settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="freeze-card">Freeze Card</Label>
                <p className="text-xs text-lumi-slate">Temporarily disable your card</p>
              </div>
              <Switch id="freeze-card" checked={isCardFrozen} onCheckedChange={setIsCardFrozen} />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="contactless">Contactless Payments</Label>
                <p className="text-xs text-lumi-slate">Enable tap-to-pay functionality</p>
              </div>
              <Switch id="contactless" checked={isContactlessEnabled} onCheckedChange={setIsContactlessEnabled} />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="online-payments">Online Payments</Label>
                <p className="text-xs text-lumi-slate">Allow online and in-app purchases</p>
              </div>
              <Switch
                id="online-payments"
                checked={isOnlinePaymentsEnabled}
                onCheckedChange={setIsOnlinePaymentsEnabled}
              />
            </div>
          </CardContent>
        </Card>

        {/* Spending Limits */}
        <Card>
          <CardHeader>
            <CardTitle>Spending Limits</CardTitle>
            <CardDescription>Manage your card spending limits</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Daily Limit</p>
                <p className="text-xs text-lumi-slate">Maximum daily spending</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">$1,000</p>
                <Button variant="ghost" size="sm" className="ml-2">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Monthly Limit</p>
                <p className="text-xs text-lumi-slate">Maximum monthly spending</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">$5,000</p>
                <Button variant="ghost" size="sm" className="ml-2">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">ATM Withdrawal</p>
                <p className="text-xs text-lumi-slate">Maximum ATM withdrawal</p>
              </div>
              <div className="flex items-center">
                <p className="font-medium">$500</p>
                <Button variant="ghost" size="sm" className="ml-2">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Custom Limit
            </Button>
          </CardFooter>
        </Card>

        {/* Security Features */}
        <Card>
          <CardHeader>
            <CardTitle>Security Features</CardTitle>
            <CardDescription>Additional security options for your card</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center p-3 bg-lumi-dark-blue rounded-lg">
              <Shield className="h-10 w-10 text-white2 mr-3" />
              <div>
                <p className="font-medium text-white2">Purchase Protection</p>
                <p className="text-xs text-lumi-slate">Your card is protected against fraudulent transactions</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-lumi-dark-blue rounded-lg">
              <Smartphone className="h-10 w-10 text-white2 mr-3" />
              <div>
                <p className="font-medium text-white2">Mobile Notifications</p>
                <p className="text-xs text-lumi-slate">Receive alerts for all card transactions</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-lumi-dark-blue rounded-lg">
              <CreditCard className="h-10 w-10 text-white2 mr-3" />
              <div>
                <p className="font-medium text-white2">Virtual Card Number</p>
                <p className="text-xs text-lumi-slate">Use a different number for online purchases</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
