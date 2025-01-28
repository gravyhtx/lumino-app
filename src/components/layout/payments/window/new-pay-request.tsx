"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PopupWindow } from "../../window/popup-window";

interface NewPayRequestProps {
  onClose: () => void;
  onSave?: () => void;
}

export function NewPayRequest({ onClose, onSave }: NewPayRequestProps) {
  const [customer, setCustomer] = useState("");
  const [amount, setAmount] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");

  const handleSave = () => {
    if (onSave) {
      // Pass data if needed
      onSave();
      onClose();
    }
  };

  return (
    <PopupWindow onClose={onClose} onSave={handleSave} saveButtonText="Request Payment">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">New Payment Request</h2>

        {/* Customer */}
        <div className="space-y-2">
          <Label htmlFor="customer">Customer</Label>
          <Input
            id="customer"
            placeholder="Select customer..."
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>

        {/* Amount */}
        <div className="space-y-2">
          <Label htmlFor="amount">Amount *</Label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        {/* Invoice Number */}
        <div className="space-y-2">
          <Label htmlFor="invoice">Invoice #</Label>
          <Input
            id="invoice"
            placeholder="Enter invoice number"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            placeholder="Add a description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Additional Options */}
        <div className="space-y-2">
          <Button variant="link" className="text-muted-foreground" onClick={() => setNote("Note added")}>
            📄 Add note
          </Button>
          <Button variant="link" className="text-muted-foreground">
            📎 Attach Files
          </Button>
        </div>
      </div>
    </PopupWindow>
  );
}