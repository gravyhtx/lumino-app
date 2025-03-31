"use client"
import React, { useEffect, useState } from 'react';
import Terminal from '@/components/layout/payments/terminal';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Terminal />
    </LayoutProvider>
  )
}