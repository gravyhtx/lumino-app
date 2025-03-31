"use client"
import React, { useEffect, useState } from 'react';
import { ClipboardList, FileText, HandCoins, LayoutDashboard, Link2, Package, Repeat, Users, Wallet } from 'lucide-react';
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import { Dashboard } from '@/components/layout/Dashboard';
import { usePathname } from 'next/navigation';
import { LayoutProvider } from '@/components/providers/layout-provider';

export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Track the URL path

  useEffect(() => {
    setIsLoaded(false); // Set loading to false when the pathname changes
    const timeout = setTimeout(() => setIsLoaded(true), 300); // Simulate loading delay

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [pathname]); // Depend on pathname changes
  const iconClass = "h-5 w-5";
  const links = [
    { name: 'Dashboard', icon: <LayoutDashboard className={iconClass} />, href: '/'},
  ];
  return (
    <LayoutProvider>
      <Dashboard />
    </LayoutProvider>
  )
}