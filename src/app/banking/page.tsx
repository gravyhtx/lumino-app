"use client"

import React, { useEffect, useState } from 'react';
import SyntheticV0PageForDeployment from '@/components/layout/banking';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <SyntheticV0PageForDeployment />
    </LayoutProvider>
  )
}