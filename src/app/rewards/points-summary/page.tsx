"use client"

import React, { useEffect, useState } from 'react';
import PointsSummary from '@/components/layout/rewards/points';
import { LayoutProvider } from '@/components/providers/layout-provider';

export default function Page() {
  return (
    <LayoutProvider>
      <PointsSummary />
    </LayoutProvider>
  )
}