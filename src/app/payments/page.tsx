"use client"

import React, { useEffect, useState } from 'react';
import { ClipboardList, FileText, HandCoins, LayoutDashboard, Link2, Package, Repeat, Users, Wallet } from 'lucide-react';
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import Dashboard from '@/components/layout/payments/dashboard';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';
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
    { name: 'Dashboard', icon: <LayoutDashboard className={iconClass} />, href: '/payments'},
    { name: 'Invoices', icon: <FileText className={iconClass} />, href: '/payments/invoices', notifications: 6, },
    { name: 'Payment Requests', icon: <HandCoins className={iconClass} />, href: '/payments/payment-requests' },
    { name: 'Recurring Payments', icon: <Repeat className={iconClass} />, href: '/payments/recurring-payments' },
    { name: 'Customers', icon: <Users className={iconClass} />, href: '/payments/customers' },
    { name: 'Items', icon: <Package className={iconClass} />, href: '/payments/items'  },
    { name: 'Orders', icon: <ClipboardList className={iconClass} />, href: '/payments/orders' },
    { name: 'Payment Links', icon: <Link2 className={iconClass} />, href: '/payments/payment-links' },
    { name: 'Virtual Terminal', icon: <Wallet className={iconClass} />, href: '/payments/virtual-terminal' },
  ];
  return (
    <LayoutProvider>
      <Dashboard />
    </LayoutProvider>
  )
}