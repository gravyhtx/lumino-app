"use client"

import React, { useState } from 'react'
import { Search, CheckCircle2, XCircle, ArrowUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Mock data
const paymentLinks = [
  {
    id: 1,
    type: 'Product Link',
    active: true,
    name: '10 Month Mentorship',
    created: '2024-10-24',
    updated: '2024-10-24',
  },
  {
    id: 2,
    type: 'Rapid Checkout Link',
    active: true,
    name: 'Rapid Checkout Link',
    created: '2024-10-24',
    updated: '2024-10-24',
  },
  {
    id: 3,
    type: 'Hosted Payment Link',
    active: true,
    name: 'Hosted Payment Link',
    created: '2024-10-24',
    updated: '2024-10-24',
  },
  {
    id: 4,
    type: 'Product Link',
    active: true,
    name: '10 Month Mentorship',
    created: '2024-10-23',
    updated: '2024-10-24',
  },
  {
    id: 5,
    type: 'Hosted Payment Link',
    active: false,
    name: 'Hosted Payment Link',
    created: '2024-10-18',
    updated: '2024-10-23',
  },
]

export default function PayLinks() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')

  const filteredLinks = paymentLinks
    .filter(link =>
      link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.created).getTime()
      const dateB = new Date(b.created).getTime()
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA
    })

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Links</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Payment Links"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>New Payment Link</Button>
      </div>

      <div className="border rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4 font-medium text-sm">Type</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Active</th>
              <th className="text-left py-3 px-4 font-medium text-sm">Name</th>
              <th className="text-left py-3 px-4 font-medium text-sm">
                <Button 
                  variant="ghost" 
                  className="h-8 p-0 font-medium"
                  onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
                >
                  Created
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </th>
              <th className="text-left py-3 px-4 font-medium text-sm">Updated</th>
              <th className="w-[50px]" />
            </tr>
          </thead>
          <tbody>
            {filteredLinks.map((link) => (
              <tr key={link.id} className="border-b">
                <td className="py-3 px-4">{link.type}</td>
                <td className="py-3 px-4">
                  {link.active ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </td>
                <td className="py-3 px-4">{link.name}</td>
                <td className="py-3 px-4">{link.created}</td>
                <td className="py-3 px-4">{link.updated}</td>
                <td className="py-3 px-4">
                  <Button variant="ghost" size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}