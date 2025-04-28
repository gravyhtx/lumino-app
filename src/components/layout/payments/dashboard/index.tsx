"use client"

import React, { useEffect, useState } from 'react'
import { AuraCard, Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PieChart, Pie, Cell } from 'recharts'
import { FileText, Users, Wallet, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NotificationCard } from '../../../ui/notification-card';
import { closeScreen } from '@/utils'
import { InvoiceCreator } from '../window/invoice-creator'
import { NewPayRequest } from '../window/new-pay-request'
import { NewCustomer } from '../window/new-customer'
import NewPayment from '../window/new-payment'

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

// const [showNotification, setShowNotification] = useState(false)

// const triggerNotification = () => {
//   setShowNotification(true)
// }

const closeNotification = () => { return }

const sampleTransaction = {
  amount: 75.50,
  pointsEarned: 150,
  merchant: "Lumino Store"
}


// Mock data for the donut charts
const outstandingBalanceData = [
  { name: 'Upcoming', value: 12664, count: 10, color: '#19e8aa' },
  { name: '0-14 days', value: 12250, count: 2, color: '#19e8aa' },
  { name: '15-30 days', value: 8400, count: 2, color: '#00cd8f' },
  { name: '>30 days', value: 0, count: 0, color: '#00cd8f' },
]

const timeToPayData = [
  { name: '< 1 hour', value: 100, color: '#90CDF4' },
  { name: '< 1 day', value: 0, color: '#63B3ED' },
  { name: '< 1 week', value: 0, color: '#4299E1' },
  { name: '> 1 week', value: 0, color: '#2B6CB0' },
]

export default function Dashboard() {
  const [openInvoice, setOpenInvoice] = useState<boolean>(false);
  const onClose1 = () => setOpenInvoice(false);
  const [openRequest, setOpenRequest] = useState<boolean>(false);
  const onClose2 = () => setOpenRequest(false);
  const [openCustomer, setOpenCustomer] = useState<boolean>(false);
  const onClose3 = () => setOpenCustomer(false);
  const [openPay, setOpenPay] = useState<boolean>(false);
  const onClose4 = () => setOpenPay(false);

  return (<>
    {openInvoice ? <InvoiceCreator onClose={onClose1} onSave={onClose1} /> : <></>}
    {openRequest ? <NewPayRequest onClose={onClose2} onSave={onClose2} /> : <></>}
    {openCustomer ? <NewCustomer onClose={onClose3} onSave={onClose3} /> : <></>}
    {openPay ? <NewPayment onClose={onClose4} onSave={onClose4} /> : <></>}
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
                  stroke="#19e8aa" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AuraCard className="bg-muted/50" onClick={() => setOpenInvoice(true)}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <FileText className="h-6 w-6 mb-2 text-lumi-accent-blue" />
            <h3 className="text-sm font-medium text-lumi-accent-yellow">Create an Invoice</h3>
          </CardContent>
        </AuraCard>
        <AuraCard className="bg-muted/50" onClick={() => setOpenRequest(true)}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Wallet className="h-6 w-6 mb-2 text-lumi-accent-blue" />
            <h3 className="text-sm font-medium text-lumi-accent-yellow">Request a Payment</h3>
          </CardContent>
        </AuraCard>
        <AuraCard className="bg-muted/50" onClick={() => setOpenPay(true)}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Clock className="h-6 w-6 mb-2 text-lumi-accent-blue" />
            <h3 className="text-sm font-medium text-lumi-accent-yellow">Take a Payment</h3>
          </CardContent>
        </AuraCard>
        <AuraCard className="bg-muted/50" onClick={() => setOpenCustomer(true)}>
          <CardContent className="flex flex-col items-center justify-center p-6">
            <Users className="h-6 w-6 mb-2 text-lumi-accent-blue" />
            <h3 className="text-sm font-medium text-lumi-accent-yellow">Add a Customer</h3>
          </CardContent>
        </AuraCard>
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
                  <div className="ml-auto  text-lumi-accent-green">
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
                  <div className="ml-auto text-lumi-accent-green">{item.value}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div>
      {/* <Button onClick={triggerNotification} className="glass-effect">
        Simulate Transaction
      </Button> */}
      <NotificationCard
        transaction={sampleTransaction}
        onClose={closeNotification}
      />
    </div>
      </div>
    </div>
  </>)
}

