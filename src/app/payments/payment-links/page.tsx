"use client"
import React, { useEffect, useState } from 'react';
import PayLinks from '@/components/layout/payments/link';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <PayLinks />
    </LayoutProvider>
  )
}