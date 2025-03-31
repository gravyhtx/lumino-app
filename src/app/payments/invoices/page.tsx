"use client"
import React, { useEffect, useState } from 'react';
import Invoices from '@/components/layout/payments/invoices';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Invoices />
    </LayoutProvider>
  )
}