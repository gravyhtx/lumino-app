"use client"

import React, { useEffect, useState } from 'react';
import { LayoutProvider } from '@/components/providers/layout-provider';
import BankingApp from '@/components/layout/banking/banking-app';


export default function Page() {
  return (
    <LayoutProvider>
      <BankingApp />
    </LayoutProvider>
  )
}