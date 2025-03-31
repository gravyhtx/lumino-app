"use client"
import React, { useEffect, useState } from 'react';
import Orders from '@/components/layout/payments/orders';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Orders />
    </LayoutProvider>
  )
}