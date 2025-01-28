"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { PopupWindow } from "../../window/popup-window";

interface NewCustomerProps {
  onClose: () => void;
  onSave?: (data: Record<string, unknown>) => void;
}

export function NewCustomer({ onClose, onSave }: NewCustomerProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [internalNotes, setInternalNotes] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [notifyEmail, setNotifyEmail] = useState(false);
  const [notifyPhone, setNotifyPhone] = useState(false);
  const [noDualPricing, setNoDualPricing] = useState(false);

  const handleSave = () => {
    if (onSave) {
      const formData = {
        firstName,
        lastName,
        accountName,
        displayName,
        email,
        mobilePhone,
        billingAddress,
        internalNotes,
        paymentTerms,
        notifyEmail,
        notifyPhone,
        noDualPricing,
      };
      onSave(formData);
    }
  };

  return (
    <PopupWindow onClose={onClose} onSave={handleSave}>
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Add Customer</h2>

        {/* First Name & Last Name */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input
              id="first-name"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input
              id="last-name"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        {/* Account Name */}
        <div className="space-y-2">
          <Label htmlFor="account-name">Account Name</Label>
          <Input
            id="account-name"
            placeholder="Ex. Company Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
          />
        </div>

        {/* Display Name */}
        <div className="space-y-2">
          <Label htmlFor="display-name">Display Name</Label>
          <Input
            id="display-name"
            placeholder="Enter display name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Mobile Phone */}
        <div className="space-y-2">
          <Label htmlFor="mobile-phone">Mobile Phone</Label>
          <Input
            id="mobile-phone"
            type="tel"
            placeholder="Enter mobile phone number"
            value={mobilePhone}
            onChange={(e) => setMobilePhone(e.target.value)}
          />
        </div>

        {/* Billing Address */}
        <div className="space-y-2">
          <Label htmlFor="billing-address">Billing Address</Label>
          <Textarea
            id="billing-address"
            placeholder="Enter billing address"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
          />
        </div>

        {/* Internal Notes */}
        <div className="space-y-2">
          <Label htmlFor="internal-notes">Internal Notes</Label>
          <Textarea
            id="internal-notes"
            placeholder="Enter internal notes"
            value={internalNotes}
            onChange={(e) => setInternalNotes(e.target.value)}
          />
        </div>

        {/* Payment Terms */}
        <div className="space-y-2">
          <Label htmlFor="payment-terms">Payment Terms</Label>
          <Input
            id="payment-terms"
            placeholder="Enter payment terms"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
          />
        </div>

        {/* Toggles */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Switch
              id="notify-email"
              checked={notifyEmail}
              onCheckedChange={(checked) => setNotifyEmail(checked)}
            />
            <Label htmlFor="notify-email">Notify Email</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="notify-phone"
              checked={notifyPhone}
              onCheckedChange={(checked) => setNotifyPhone(checked)}
            />
            <Label htmlFor="notify-phone">Notify Phone</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="no-dual-pricing"
              checked={noDualPricing}
              onCheckedChange={(checked) => setNoDualPricing(checked)}
            />
            <Label htmlFor="no-dual-pricing">Do not apply Automatic Dual Pricing</Label>
          </div>
        </div>
      </div>
    </PopupWindow>
  );
}