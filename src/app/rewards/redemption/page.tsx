"use client"

import React, { useEffect, useState } from 'react';
import RewardRedemption from '@/components/layout/rewards/redeem';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <RewardRedemption />
    </LayoutProvider>
  )
}