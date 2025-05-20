"use client"

import React, { useState } from 'react'
import { Search, ChevronDown, Mail, Phone, Upload, ArrowUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { InvoiceCreator } from '../window/invoice-creator'
import { NewCustomer } from '../window/new-customer'

// Mock data
const customers = [
  {
    id: 1,
    name: 'Coaching Expert',
    email: 'i.am.stephenwilliams@gmail.com',
    phone: '(222) 222-2222',
    paymentRequested: true,
    invited: false
  },
  {
    id: 2,
    name: 'John',
    email: '',
    phone: '(707) 529-8767',
    paymentRequested: false,
    invited: false
  },
  {
    id: 3,
    name: 'KJ',
    email: 'kjaffer786@gmail.com',
    phone: '(559) 754-7151',
    paymentRequested: false,
    invited: false
  },
  {
    id: 4,
    name: 'Matt Jez',
    email: 'mattjez@hey.com',
    phone: '(732) 692-9223',
    paymentRequested: true,
    invited: true
  },
  {
    id: 5,
    name: 'Test Customer',
    email: 'ian@golumino.com',
    phone: '(951) 226-6579',
    paymentRequested: false,
    invited: false
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    email: 'sarah.j@business.com',
    phone: '(415) 555-0123',
    paymentRequested: true,
    invited: true
  },
  {
    id: 7,
    name: 'Tech Solutions Inc',
    email: 'contact@techsolutions.com',
    phone: '(650) 555-0189',
    paymentRequested: true,
    invited: false
  },
  {
    id: 8,
    name: 'David Miller',
    email: 'david@millerconsulting.net',
    phone: '(408) 555-0147',
    paymentRequested: false,
    invited: true
  }
]

export default function Customers() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')

  const [openAddCustomer, setOpenAddCustomer] = useState<boolean>(false);
  const onClose = () => setOpenAddCustomer(false);

  const sortedCustomers = [...customers].sort((a, b) => {
    return sortDirection === 'asc' 
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  })

  const filteredCustomers = sortedCustomers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.phone.includes(searchQuery)
  )

  return (<>
    {openAddCustomer ? <NewCustomer onClose={onClose} /> : <></>}
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Customers"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-1">
          <Button onClick={() => setOpenAddCustomer(true)}>New Customer</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="default" className="px-2">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Upload className="mr-2 h-4 w-4" />
                Upload Customers
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">
                <Button 
                  variant="ghost" 
                  className="h-8 p-0 font-medium"
                  onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                >
                  Customer Name
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </th>
              <th className="text-left py-3 px-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </div>
              </th>
              <th className="text-left py-3 px-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </div>
              </th>
              <th className="text-left py-3 px-4">Payment On File</th>
              <th className="text-left py-3 px-4">Client Portal</th>
              <th className="w-[50px]" />
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id} className="border-b">
                <td className="py-3 px-4">{customer.name}</td>
                <td className="py-3 px-4">{customer.email}</td>
                <td className="py-3 px-4">{customer.phone}</td>
                <td className="py-3 px-4">
                  {customer.paymentRequested && (
                    <Badge variant="secondary">Requested</Badge>
                  )}
                </td>
                <td className="py-3 px-4">
                  {customer.invited && (
                    <Badge variant="secondary">Invited</Badge>
                  )}
                </td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="icon">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </>)
}