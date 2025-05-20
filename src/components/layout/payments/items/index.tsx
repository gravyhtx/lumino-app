"use client"

import React, { useState } from 'react'
import { Search, ChevronDown, Upload, ArrowUpDown, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NewItem from '../window/new-item'

// Mock data for items
const items = [
  {
    id: 1,
    name: '1 Day',
    type: 'PRODUCT',
    description: '',
    price: 89.00,
    taxRate: 0
  },
  {
    id: 2,
    name: '1 Month Rent',
    type: 'PRODUCT',
    description: '',
    price: 8300.00,
    taxRate: 0
  },
  {
    id: 3,
    name: '10 Month Mentorship',
    type: 'PRODUCT',
    description: 'This is a one time purchase for our coaching program.',
    price: 6730.77,
    taxRate: 0
  },
  {
    id: 4,
    name: 'Biz Opp Basic',
    type: 'PRODUCT',
    description: 'Basic Intro Tier',
    price: 4000.00,
    taxRate: 0
  }
]

export default function Items() {
  const [activeTab, setActiveTab] = useState('items')
  const [searchQuery, setSearchQuery] = useState('')
  const [openWindow, setOpenWindow] = useState(false)
  const onClose = () => setOpenWindow(false)

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (<>
    {openWindow && (<NewItem onClose={onClose} />)}
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList>
          <TabsTrigger value="items">Items</TabsTrigger>
          <TabsTrigger value="plans">Plans</TabsTrigger>
        </TabsList>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={`Search ${activeTab === 'items' ? 'Items' : 'Plans'}`}
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {activeTab === 'items' ? (
              <div className="flex gap-1">
                <Button onClick={() => setOpenWindow(true)}>New Item</Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="default" className="px-2">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Items
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Button>New Plan</Button>
            )}
          </div>

          {activeTab === 'items' ? (
            <div className="border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="w-4 p-4">
                      <div className="h-4 w-4" />
                    </th>
                    <th className="text-left py-3 px-4">
                      <Button 
                        variant="ghost" 
                        className="h-8 p-0 font-medium"
                      >
                        Name
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </th>
                    <th className="text-left py-3 px-4">Type</th>
                    <th className="text-left py-3 px-4">Description</th>
                    <th className="text-right py-3 px-4">Price</th>
                    <th className="text-right py-3 px-4">Total Tax Rate</th>
                    <th className="w-[50px]" />
                  </tr>
                </thead>
                <tbody>
                  {filteredItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="w-4 p-4">
                        <div className="h-4 w-4" />
                      </td>
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary">{item.type}</Badge>
                      </td>
                      <td className="py-3 px-4">{item.description}</td>
                      <td className="py-3 px-4 text-right">${item.price.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right">{item.taxRate}%</td>
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
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-4">
                <Package className="h-16 w-16 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Keep track of your plans and use plans to quickly create subscriptions.
              </p>
            </div>
          )}
        </div>
      </Tabs>
    </div>
  </>)
}