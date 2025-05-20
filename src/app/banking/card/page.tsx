"use client"

import React, { useEffect, useState } from 'react';
import { LayoutProvider } from '@/components/providers/layout-provider';
import CardManagement from '@/components/layout/banking/card-management';


export default function Page() {
  return (
    <LayoutProvider>
      <CardManagement />
    </LayoutProvider>
  )
}