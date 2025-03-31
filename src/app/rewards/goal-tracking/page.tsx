"use client"

import React, { useEffect, useState } from 'react';
import GoalsPage from '@/components/layout/rewards/goal-tracking';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <GoalsPage />
    </LayoutProvider>
  )
}