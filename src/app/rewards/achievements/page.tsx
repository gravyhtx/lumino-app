"use client"

import React, { useEffect, useState } from 'react';
import BadgesAndAchievements from '@/components/layout/rewards/badges-achievements';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <BadgesAndAchievements />
    </LayoutProvider>
  )
}