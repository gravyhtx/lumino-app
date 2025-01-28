"use client"
import React, { useEffect, useState } from 'react';
import { ClipboardList, FileText, HandCoins, LayoutDashboard, Link2, Package, Repeat, Users, Wallet } from 'lucide-react';
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import Dashboard from '@/components/layout/payments/dashboard';
import Items from '@/components/layout/payments/items';


export default function Page() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
  },[])
  const iconClass = "h-5 w-5";
  const links = [
    { name: 'Dashboard', icon: <LayoutDashboard className={iconClass} />, href: '/payments'},
    { name: 'Invoices', icon: <FileText className={iconClass} />, href: '/payments/invoices', notifications: 6, },
    { name: 'Payment Requests', icon: <HandCoins className={iconClass} />, href: '/payments/payment-requests' },
    { name: 'Recurring Payments', icon: <Repeat className={iconClass} />, href: '/payments/reccuring-payments' },
    { name: 'Customers', icon: <Users className={iconClass} />, href: '/payments/customers' },
    { name: 'Items', icon: <Package className={iconClass} />, href: '/payments/items'  },
    { name: 'Orders', icon: <ClipboardList className={iconClass} />, href: '/payments/orders' },
    { name: 'Payment Links', icon: <Link2 className={iconClass} />, href: '/payments/payment-links' },
    { name: 'Virtual Terminal', icon: <Wallet className={iconClass} />, href: '/payments/virtual-terminal' },
  ];
  return (<>
    <SideNav links={links} />
    <div className="flex flex-col">
      <Header links={links} />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
      { isLoaded ?
          <ViewContainer>
            <Items />
          </ViewContainer>
        :
        <div className="flex items-center">
          <BouncingDotsLoader />
        </div> }
      </main>
    </div>
  </>)
}