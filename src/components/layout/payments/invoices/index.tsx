"use client"

import React, { useState, useMemo, ReactNode } from 'react'
import { format } from 'date-fns'
import { Search, Calendar, ChevronDown, Send, Clock, AlertCircle } from 'lucide-react'
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InvoiceCreator } from '../window/invoice-creator'

type Invoice = {
  id: string;
  status: string;
  customer: string;
  total: number;
  balance: number;
  created: string;
  due: string;
};

// Mock data with proper date formatting
const invoices: Invoice[] = [
  {
    id: 'H10001',
    status: 'PAST DUE',
    customer: 'Test Customer',
    total: 500.00,
    balance: 500.00,
    created: '2024-10-22',
    due: '2024-10-22',
  },
  {
    id: 'H10002',
    status: 'PAST DUE',
    customer: 'Test Customer',
    total: 89.00,
    balance: 89.00,
    created: '2024-10-23',
    due: '2024-10-23',
  },
  {
    id: 'H10003',
    status: 'Paid',
    customer: 'Matt Jez',
    total: 4000.00,
    balance: 0.00,
    created: '2024-11-08',
    due: '2024-11-08',
  },
  {
    id: 'H10004',
    status: 'Outstanding',
    customer: 'KJ',
    total: 4000.00,
    balance: 2650.00,
    created: '2024-11-27',
    due: '2025-01-27',
  },
  // Add more invoices for different date ranges
  {
    id: 'H10005',
    status: 'Paid',
    customer: 'Long Term Client',
    total: 1500.00,
    balance: 0.00,
    created: '2023-12-15',
    due: '2023-12-30',
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

export default function Invoices() {
  const [openInvoice, setOpenInvoice] = useState<boolean>(false);
  const onClose = () => setOpenInvoice(false);
  const [view, setView] = useState('all')
  const [dateRange, setDateRange] = useState('3months')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredInvoices: Invoice[] = useMemo(() => {
    let filtered = [...invoices]

    // Filter by view
    if (view !== 'all') {
      if (view === 'outstanding') {
        filtered = filtered.filter(invoice => 
          invoice.status === 'Outstanding' || invoice.status === 'PAST DUE'
        )
      } else {
        filtered = filtered.filter(invoice => 
          invoice.status.toLowerCase() === view
        )
      }
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(invoice =>
        invoice.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        invoice.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Sort by date
    filtered.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())

    return filtered
  }, [view, searchQuery])

  const renderInvoiceTable = () => {
    if (view === 'cancelled' || filteredInvoices.length === 0) {
      return (
        <div className="text-center py-8 text-muted-foreground">
          No results found
        </div>
      )
    }

    const groupedInvoices = view === 'outstanding' 
      ? {
          'PAST DUE': filteredInvoices.filter(i => i.status === 'PAST DUE'),
          'UPCOMING': filteredInvoices.filter(i => i.status === 'Outstanding'),
        }
      : { '': filteredInvoices }

    return Object.entries(groupedInvoices).map(([group, invoices]) => (
      <div key={group}>
        {group && (
          <div className="px-4 py-2 font-medium text-sm bg-muted/50">
            {group}
          </div>
        )}
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2 px-4 font-medium text-sm">Status</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Customer</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Total</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Balance</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Invoice #</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Created</th>
              <th className="text-left py-2 px-4 font-medium text-sm">Due</th>
            </tr>
          </thead>
          <tbody>
              {(invoices as Invoice[]).map((invoice: Invoice) => (
                <tr key={invoice.id} className="border-b">
                <td className="py-2 px-4">
                  <Badge variant={
                    invoice.status === 'PAST DUE' ? 'destructive' :
                    invoice.status === 'Paid' ? 'default' :
                    invoice.status === 'Outstanding' ? 'outline' :
                    'secondary'
                  }>
                    {invoice.status}
                  </Badge>
                </td>
                <td className="py-2 px-4">{invoice.customer}</td>
                <td className="py-2 px-4">${invoice.total.toFixed(2)}</td>
                <td className="py-2 px-4">${invoice.balance.toFixed(2)}</td>
                <td className="py-2 px-4">{invoice.id}</td>
                <td className="py-2 px-4">{format(new Date(invoice.created), 'MM/dd/yyyy')}</td>
                <td className="py-2 px-4">{format(new Date(invoice.due), 'MM/dd/yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))
  }

  return (<>
    {openInvoice ? <InvoiceCreator onClose={onClose} /> : <></>}
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Invoices</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Invoices"
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
              New Invoice
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setOpenInvoice(true)}>Create Invoice</DropdownMenuItem>
            <DropdownMenuItem>Quick Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs value={view} onValueChange={setView}>
        <div className="flex items-center justify-between border-b">
          <TabsList className="h-auto p-0">
            <TabsTrigger
              value="draft"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Draft
            </TabsTrigger>
            <TabsTrigger
              value="outstanding"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Outstanding {filteredInvoices.filter(i => i.status === 'Outstanding' || i.status === 'PAST DUE').length || ''}
            </TabsTrigger>
            <TabsTrigger
              value="paid"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Paid {filteredInvoices.filter(i => i.status === 'Paid').length || ''}
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
            <TabsTrigger
              value="templates"
              className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary"
            >
              Templates
            </TabsTrigger>
          </TabsList>
          {view === 'outstanding' && (
            <div className="flex items-center gap-4 px-4">
              <Button variant="ghost" size="sm" className="h-8">
                <Clock className="mr-2 h-4 w-4" />
                On Hold
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <Calendar className="mr-2 h-4 w-4" />
                Scheduled
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <Send className="mr-2 h-4 w-4" />
                Sent
              </Button>
              <Button variant="ghost" size="sm" className="h-8">
                <AlertCircle className="mr-2 h-4 w-4" />
                Past Due
              </Button>
            </div>
          )}
        </div>
      </Tabs>

      <div className="border rounded-lg">
        {renderInvoiceTable()}
      </div>
    </div>
  </>)
}