"use client"
import React, { useEffect, useState } from 'react';
import { ClipboardList, FileText, HandCoins, LayoutDashboard, Link2, Package, Repeat, Users, Wallet } from 'lucide-react';
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import { Dashboard } from '@/components/views/Dashboard';
import { usePathname } from 'next/navigation';

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
  return (<>
    <SideNav links={links} favorites />
    <div className="flex flex-col">
      <Header links={links} />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
      { isLoaded ?
          <ViewContainer>
            <Dashboard />
          </ViewContainer>
        :
        <div className="flex items-center">
          <BouncingDotsLoader />
        </div> }
      </main>
    </div>
  </>)
}