"use client"

import React, { useState, useMemo } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Search, Calendar, ChevronDown, Upload, Eye, Mail, Clock, Link2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NewPayRequest } from '../window/new-pay-request'

// Mock data
const paymentRequests = [
  {
    id: 'H10001',
    status: 'Sent',
    customer: 'Test Customer',
    amount: 500.00,
    invoiceNumber: 'H10001',
    lastSent: '2024-01-02',
  },
  {
    id: 'H10002',
    status: 'Sent',
    customer: 'Test Customer',
    amount: 89.00,
    invoiceNumber: 'H10002',
    lastSent: '2024-01-03',
  },
  {
    id: 'H10003',
    status: 'Paid',
    customer: 'Matt Jez',
    amount: 4000.00,
    invoiceNumber: 'H10003',
    lastSent: '2024-01-08',
  },
  {
    id: 'H10004',
    status: 'Pending',
    customer: 'KJ',
    amount: 4000.00,
    invoiceNumber: 'H10004',
    lastSent: '2024-01-27',
  },
]

const dateRanges = [
  { label: '1 Day', value: '1day' },
  { label: '1 Week', value: '1week' },
  { label: '1 Month', value: '1month' },
  { label: '3 Months', value: '3months' },
  { label: '1 Year', value: '1year' },
  { label: 'All Time', value: 'alltime' },
]

export default function PayRequest() {
  const [view, setView] = useState('sent')
  const [dateRange, setDateRange] = useState('3months')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRequests = useMemo(() => {
    let filtered = [...paymentRequests]

    // Filter by view
    if (view !== 'all') {
      filtered = filtered.filter(request => 
        request.status.toLowerCase() === view.toLowerCase()
      )
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(request =>
        request.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        request.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort by date
    filtered.sort((a, b) => new Date(b.lastSent).getTime() - new Date(a.lastSent).getTime())

    return filtered
  }, [view, searchQuery])

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'sent':
        return 'default'
      case 'paid':
        return 'outline'
      case 'pending':
        return 'secondary'
      default:
        return 'default'
    }
  }

    const [openWindow, setOpenWindow] = useState<boolean>(false);
    const onClose = () => setOpenWindow(false);

  return (<>
    {openWindow && <NewPayRequest onClose={onClose} />}
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Requests</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Payment Requests"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="w-[160px]">
            <Calendar className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Select date range" />
          </SelectTrigger>
          <SelectContent>
            {dateRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>
              New Payment Request
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setOpenWindow(true)}>New Payment Request</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Upload className="mr-2 h-4 w-4" />
              Upload Payment Requests
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
              Pending
            </TabsTrigger>
            <TabsTrigger
              value="sent"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Sent {filteredRequests.filter(r => r.status === 'Sent').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="paid"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Paid {filteredRequests.filter(r => r.status === 'Paid').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Cancelled
            </TabsTrigger>
            <TabsTrigger
              value="all"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              All
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <div className="border rounded-lg">
        {filteredRequests.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            No results found
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="w-4 p-4">
                  <div className="h-4 w-4" />
                </th>
                <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Invoice #</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Last Sent</th>
                <th className="w-[140px] py-3 px-4" />
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request.id} className="border-b">
                  <td className="w-4 p-4">
                    <div className="h-4 w-4" />
                  </td>
                  <td className="py-3 px-4">
                    <Badge variant={getStatusBadgeVariant(request.status)}>
                      {request.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4">{request.customer}</td>
                  <td className="py-3 px-4">${request.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">{request.invoiceNumber}</td>
                  <td className="py-3 px-4">
                    {formatDistanceToNow(new Date(request.lastSent), { addSuffix: true })}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Clock className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Link2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  </>)
}