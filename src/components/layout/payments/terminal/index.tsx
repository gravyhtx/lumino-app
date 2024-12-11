"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Landmark } from "lucide-react";

export default function Terminal() {
  const [activeTab, setActiveTab] = useState<"debit" | "bank">("debit");

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Universal Information Column */}
      <div className="flex-1 space-y-4">
        <div>
          <label htmlFor="customer" className="block text-sm font-medium">
            Customer *
          </label>
          <Input id="customer" placeholder="Select a customer" />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium">
            Amount *
          </label>
          <Input id="amount" placeholder="Enter amount" />
        </div>
        <div>
          <label htmlFor="invoice" className="block text-sm font-medium">
            Invoice #
          </label>
          <Input id="invoice" placeholder="Enter invoice number" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            rows={4}
            className="w-full border rounded-md p-2"
            placeholder="Enter description"
          />
        </div>
      </div>

      {/* Payment Options Column */}
      <div className="flex-1 space-y-4">
        <Tabs
          defaultValue="debit"
          onValueChange={(value) => setActiveTab(value as "debit" | "bank")}
        >
          <TabsList className="grid grid-cols-2">
            <TabsTrigger value="debit">
              <div className="flex items-center gap-2">
                <span className="icon"><CreditCard className="w-5 h-5" /></span> Debit/Credit Card
              </div>
            </TabsTrigger>
            <TabsTrigger value="bank">
              <div className="flex items-center gap-2">
                <span className="icon"><Landmark className="w-5 h-5" /></span> Bank Account
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="debit">
            {/* Debit/Credit Card Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="cardName" className="block text-sm font-medium">
                  Cardholder Name *
                </label>
                <Input id="cardName" placeholder="Enter cardholder name" />
              </div>
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium">
                  Card Number
                </label>
                <div className="flex gap-2">
                  <Input id="cardNumber" placeholder="#### #### #### ####" />
                  <Input placeholder="MM/YY" className="w-20" />
                  <Input placeholder="CVV" className="w-20" />
                </div>
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium">
                  Billing Zip Code
                </label>
                <Input id="zip" placeholder="Enter zip code" />
              </div>
              <div className="flex items-center gap-2">
                <img src="/visa.png" alt="Visa" className="h-6" />
                <img src="/mastercard.png" alt="Mastercard" className="h-6" />
                <img src="/discover.png" alt="Discover" className="h-6" />
                <img src="/amex.png" alt="American Express" className="h-6" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bank">
            {/* Bank Account Fields */}
            <div className="space-y-4">
              <div>
                <label htmlFor="accountName" className="block text-sm font-medium">
                  Name on Account
                </label>
                <Input id="accountName" placeholder="Enter account name" />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label htmlFor="routing" className="block text-sm font-medium">
                    Routing Number
                  </label>
                  <Input id="routing" placeholder="Enter routing number" />
                </div>
                <div className="flex-1">
                  <label htmlFor="account" className="block text-sm font-medium">
                    Account Number
                  </label>
                  <Input id="account" placeholder="Enter account number" />
                </div>
              </div>
              <div>
                <label htmlFor="zip" className="block text-sm font-medium">
                  Billing Zip Code
                </label>
                <Input id="zip" placeholder="Enter zip code" />
              </div>
              <div className="flex gap-4">
                <div>
                  <label className="block text-sm font-medium">Account Type</label>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="checking" name="accountType" />
                    <label htmlFor="checking">Checking</label>
                    <input type="radio" id="savings" name="accountType" />
                    <label htmlFor="savings">Savings</label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">Check Type</label>
                  <div className="flex items-center gap-2">
                    <input type="radio" id="business" name="checkType" />
                    <label htmlFor="business">Business</label>
                    <input type="radio" id="personal" name="checkType" />
                    <label htmlFor="personal">Personal</label>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <Button className="w-full">Process Payment</Button>
      </div>
    </div>
  );
}
