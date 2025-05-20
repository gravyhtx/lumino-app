"use client"

import React, { useEffect, useState } from 'react';
import { LayoutProvider } from '@/components/providers/layout-provider';
import InsightsPage from '@/components/layout/banking/insights-page';


export default function Page() {
  return (
    <LayoutProvider>
      <InsightsPage />
    </LayoutProvider>
  )
}