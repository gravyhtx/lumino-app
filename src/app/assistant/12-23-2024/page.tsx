"use client"

import React, { useEffect, useState } from 'react';
import Chat from "../components/chat";
import { LayoutProvider } from '@/components/providers/layout-provider';


export default function Page() {
  return (
    <LayoutProvider>
      <Chat />
    </LayoutProvider>
  )
}