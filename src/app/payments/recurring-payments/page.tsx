"use client"
import React, { useEffect, useState } from 'react';
import RecurringPayments from '@/components/layout/payments/recurring';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <RecurringPayments />
    </LayoutProvider>
  )
}