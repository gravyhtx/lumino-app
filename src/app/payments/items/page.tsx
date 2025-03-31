"use client"
import React, { useEffect, useState } from 'react';
import Items from '@/components/layout/payments/items';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Items />
    </LayoutProvider>
  )
}