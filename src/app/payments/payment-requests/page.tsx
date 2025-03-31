"use client"
import React, { useEffect, useState } from 'react';
import PayRequest from '@/components/layout/payments/request';
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <PayRequest />
    </LayoutProvider>
  )
}