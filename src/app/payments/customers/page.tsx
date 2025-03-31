"use client"
import React, { useEffect, useState } from 'react';
import Customers from '@/components/layout/payments/customers';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Customers />
    </LayoutProvider>
  )
}