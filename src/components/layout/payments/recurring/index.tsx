"use client"

import React, { useState, useMemo } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Search, Calendar, ChevronDown, Upload, Filter, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data
const recurringPayments = [
  {
    id: 'R10001',
    status: 'Pending',
    customer: 'John',
    oneTimeFees: 0,
    recurringTotal: 8300.00,
    frequency: 'Monthly',
    starts: '2024-10-23',
    duration: '12 payments',
    updated: '2023-11-23',
  },
  {
    id: 'R10002',
    status: 'Active',
    customer: 'Sarah Smith',
    oneTimeFees: 500,
    recurringTotal: 2500.00,
    frequency: 'Weekly',
    starts: '2024-02-01',
    duration: '52 payments',
    updated: '2024-01-15',
  },
  {
    id: 'R10003',
    status: 'Active',
    customer: 'Tech Corp LLC',
    oneTimeFees: 1000,
    recurringTotal: 15000.00,
    frequency: 'Monthly',
    starts: '2024-03-01',
    duration: '24 payments',
    updated: '2024-01-20',
  },
  {
    id: 'R10004',
    status: 'Paused',
    customer: 'Digital Solutions Inc',
    oneTimeFees: 0,
    recurringTotal: 5000.00,
    frequency: 'Quarterly',
    starts: '2024-04-01',
    duration: '8 payments',
    updated: '2024-01-18',
  },
  {
    id: 'R10005',
    status: 'Closed',
    customer: 'Marketing Pro',
    oneTimeFees: 750,
    recurringTotal: 3000.00,
    frequency: 'Monthly',
    starts: '2024-01-01',
    duration: '6 payments',
    updated: '2024-01-10',
  },
]

export default function RecurringPayments() {
  const [view, setView] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPayments = useMemo(() => {
    let filtered = [...recurringPayments]

    // Filter by view
    if (view !== 'all') {
      filtered = filtered.filter(payment => 
        payment.status.toLowerCase() === view.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(payment =>
        payment.customer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort by updated date
    filtered.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime())

    return filtered
  }, [view, searchQuery])

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success'
      case 'pending':
        return 'warning'
      case 'paused':
        return 'secondary'
      case 'closed':
        return 'destructive'
      default:
        return 'default'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Recurring</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Recurring"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              New Recurring Payment
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuItem>New Recurring Payment</DropdownMenuItem>
            <DropdownMenuItem>Quick Recurring Payment</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" />
              Upload Recurring Payments
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs value={view} onValueChange={setView}>
        <div className="flex items-center justify-between border-b">
          <TabsList className="h-auto p-0">
            <TabsTrigger
              value="pending"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Pending {filteredPayments.filter(p => p.status === 'Pending').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Active {filteredPayments.filter(p => p.status === 'Active').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="paused"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Paused {filteredPayments.filter(p => p.status === 'Paused').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="closed"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Closed {filteredPayments.filter(p => p.status === 'Closed').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="manage"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Manage Plans <ExternalLink className="ml-2 h-3 w-3" />
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="border rounded-lg">
        {filteredPayments.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No results found
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-sm">One-Time Fees</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Recurring Total</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Frequency</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Starts</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Duration</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Updated</th>
                <th className="w-[50px]" />
              </tr>
            </thead>
            <tbody>
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="border-b">
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(payment.status)}>
                      {payment.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">{payment.customer}</td>
                  <td className="py-3 px-4">${payment.oneTimeFees.toFixed(2)}</td>
                  <td className="py-3 px-4">${payment.recurringTotal.toFixed(2)}</td>
                  <td className="py-3 px-4">{payment.frequency}</td>
                  <td className="py-3 px-4">{format(new Date(payment.starts), 'MM/dd/yyyy')}</td>
                  <td className="py-3 px-4">{payment.duration}</td>
                  <td className="py-3 px-4">{formatDistanceToNow(new Date(payment.updated), { addSuffix: true })}</td>
                  <td className="py-3 px-4">
                    <Button variant="ghost" size="icon">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}