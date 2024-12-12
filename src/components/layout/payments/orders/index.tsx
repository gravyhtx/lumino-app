"use client"

import React, { useState } from 'react'
import { Search, Calendar, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Type for orders when we add them later
type Order = {
  id: string
  customer: string
  amount: number
  status: string
  date: string
  // Add more fields as needed
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const filteredOrders = orders.filter(order =>
    order?.customer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order?.id?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search Orders"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <Calendar className="h-4 w-4" />
        </Button>
        <Button>Export Orders</Button>
      </div>

      {orders.length === 0 ? (
        <div className="text-center py-16">
          <div className="flex justify-center mb-6">
            <ShoppingCart className="h-32 w-32 text-muted-foreground/20" />
          </div>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            When a customer places an order from a{" "}
            <span className="text-foreground">Payment Link</span>, you&apos;ll find it
            here. You can manage the status of orders, apply shipping details, and
            perform refunds.
          </p>
        </div>
      ) : (
        <div className="border rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Order ID</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
                <th className="text-right py-3 px-4 font-medium text-sm">Amount</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                <th className="w-[50px]" />
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="py-3 px-4">{order.id}</td>
                  <td className="py-3 px-4">{order.customer}</td>
                  <td className="py-3 px-4">{order.status}</td>
                  <td className="py-3 px-4 text-right">
                    ${order.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">{order.date}</td>
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
      )}
    </div>
  )
}