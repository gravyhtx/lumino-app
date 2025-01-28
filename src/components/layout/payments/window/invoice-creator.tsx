"use client"

import { ChangeEvent, TextareaHTMLAttributes, useState } from "react"
import { format, addDays } from "date-fns"
import { Calendar, ChevronDown, Search, X } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PopupWindow } from "../../window/popup-window"

interface InvoiceItem {
  id: number
  name: string
  price: number
  quantity: number
}
interface InvoiceCreatorProps {
  onClose: () => void;
  onSave?: () => void;
}

const customers = [
  { id: 1, name: "John Smith", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Robert Johnson", email: "robert@example.com" },
  { id: 4, name: "Sarah Williams", email: "sarah@example.com" },
  { id: 5, name: "Michael Brown", email: "michael@example.com" },
]

const items = [
  { id: 1, name: "Business Consultation", price: 150.00 },
  { id: 2, name: "Career Coaching Session", price: 99.00 },
  { id: 3, name: "Leadership Workshop", price: 299.00 },
  { id: 4, name: "Resume Review", price: 75.00 },
  { id: 5, name: "Interview Preparation", price: 125.00 },
]

const paymentOptions = [
  { id: 1, name: "Send to customer immediately" },
  { id: 2, name: "Schedule for later" },
]

const terms = [
  { id: 1, name: "Due on receipt", days: 0 },
  { id: 2, name: "Net 15", days: 15 },
  { id: 3, name: "Net 30", days: 30 },
  { id: 4, name: "Net 60", days: 60 },
]

export function InvoiceCreator({ onClose, onSave }: InvoiceCreatorProps) {
  const defaultTerms = { id: 1, name: "Due on receipt", days: 0 }
  const [date, setDate] = useState<Date>(new Date())
  const [term, setTerm] = useState(defaultTerms)
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null)
  const [open, setOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<InvoiceItem[]>([])
  const [message, setMessage] = useState("")

  const dueDate = addDays(date, term.days??0)

  const handleAddItem = (item: typeof items[0]) => {
    setSelectedItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setSelectedItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    )
  }

  const handleRemoveItem = (id: number) => {
    setSelectedItems((prev) => prev.filter((item) => item.id !== id))
  }

  const total = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const Dropdown = () => {
    return (
      <li>Save and Close</li>
    )
  }

  return (
    // <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
    //   <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto">
    //     <div className="min-h-screen w-full max-w-6xl p-4">
    //       <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
    //         <div className="flex items-center justify-between border-b p-4">
    //           <div className="flex items-center gap-2">
    //             <Button onClick={onClose} variant="ghost" size="sm">
    //               Close
    //             </Button>
    //             <Button variant="ghost" size="sm">
    //               Reset
    //             </Button>
    //           </div>
    //           <div className="flex items-center gap-2">
    //             {/* <Button variant="outline" size="sm">
    //               Create another invoice
    //             </Button> */}
    //             <Button size="sm" onClick={onSave}>
    //               Save and send immediately
    //               <ChevronDown className="ml-2 h-4 w-4" />
    //             </Button>
    //           </div>
    //         </div>
    <PopupWindow
      onClose={onClose}
      onSave={onSave}
      saveButtonText="Save and Send Immediately"
      dropdown={<Dropdown />}
      columns>
      <div className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        {/* Form Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Create Invoice</h2>

          {/* Date and Term */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
            <Label>Customer</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {selectedCustomer
                    ? selectedCustomer.name
                    : "Select customer..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search customers..." />
                  {customers.length > 0 ? (
                    <CommandGroup>
                      {customers.map((customer) => (
                        <CommandItem
                          key={customer.id}
                          onSelect={() => {
                            setSelectedCustomer(customer);
                            setOpen(false);
                          }}
                        >
                          {customer.name}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>No customer found.</CommandEmpty>
                  )}
                </Command>
              </PopoverContent>
            </Popover>
          </div>
            <div className="space-y-2">
              <Label>Term</Label>
              <Select
                value={term.id.toString()}
                onValueChange={(value) =>
                  setTerm(terms.find((t) => t.id.toString() === value)!)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  {terms.map((term) => (
                    <SelectItem key={term.id} value={term.id.toString()}>
                      {term.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Customer Selection */}
          <div className="space-y-2">
            <Label>Customer</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {selectedCustomer
                    ? selectedCustomer.name
                    : "Select customer..."}
                  <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search customers..." />
                  <CommandEmpty>No customer found.</CommandEmpty>
                  <CommandGroup>
                    {customers.map((customer) => (
                      <CommandItem
                        key={customer.id}
                        onSelect={() => {
                          setSelectedCustomer(customer)
                          setOpen(false)
                        }}
                      >
                        {customer.name}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          {/* Items Selection */}
          <div className="space-y-4">
            <Label>Items</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-between">
                  <span>Add items</span>
                  <Search className="ml-2 h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search items..." />
                  {items.length > 0 ? (
                    <CommandGroup>
                      {items.map((item) => (
                        <CommandItem
                          key={item.id}
                          onSelect={() => handleAddItem(item)}
                        >
                          <span>{item.name}</span>
                          <span className="ml-auto">${item.price.toFixed(2)}</span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  ) : (
                    <CommandEmpty>No items found.</CommandEmpty>
                  )}
                </Command>
              </PopoverContent>
            </Popover>

            {selectedItems.length > 0 && (
              <div className="space-y-2">
                {selectedItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 rounded-lg border p-2"
                  >
                    <div className="flex-1">
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleUpdateQuantity(
                          item.id,
                          parseInt(e.target.value)
                        )
                      }
                      className="w-20"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <div className="text-right text-lg font-semibold">
                  Total: ${total.toFixed(2)}
                </div>
              </div>
            )}
          </div>

          {/* Payment Collection */}
          <div className="space-y-2">
            <Label>Payment Collection</Label>
            <Select defaultValue={paymentOptions[0]?.id.toString() ?? ""}>
              <SelectTrigger>
                <SelectValue placeholder="Select payment option" />
              </SelectTrigger>
              <SelectContent>
                {paymentOptions.map((option) => (
                  <SelectItem
                    key={option.id}
                    value={option.id.toString()}
                  >
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Advanced Section */}
          <div className="space-y-4">
            <h3 className="font-medium">Advanced</h3>
            <div className="space-y-2">
              <Label>Message to customer</Label>
              <Textarea
                placeholder="Add a message to your customer..."
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="rounded-lg border bg-white p-6">
          <div className="space-y-6">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl font-bold">Demo Coaching Product</h2>
                <p className="text-sm text-muted-foreground">
                  123 Business St
                  <br />
                  Anytown, ST 12345
                  <br />
                  (555) 123-4567
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-muted-foreground">
                  Date: {format(date, "PP")}
                  <br />
                  Due Date: {format(dueDate, "PP")}
                </div>
              </div>
            </div>

            {selectedCustomer && (
              <div>
                <h3 className="font-medium">Bill To:</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCustomer.name}
                  <br />
                  {selectedCustomer.email}
                </p>
              </div>
            )}

            {selectedItems.length > 0 && (
              <div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b text-left">
                      <th className="py-2">Item</th>
                      <th className="py-2 text-right">Quantity</th>
                      <th className="py-2 text-right">Price</th>
                      <th className="py-2 text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedItems.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-2">{item.name}</td>
                        <td className="py-2 text-right">{item.quantity}</td>
                        <td className="py-2 text-right">
                          ${item.price.toFixed(2)}
                        </td>
                        <td className="py-2 text-right">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3} className="py-2 text-right font-medium">
                        Total:
                      </td>
                      <td className="py-2 text-right font-medium">
                        ${total.toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}

            {message && (
              <div className="rounded-lg bg-muted/50 p-4 text-sm">
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </PopupWindow>
  )
}