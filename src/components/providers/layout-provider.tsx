"use client"

import React, { useEffect, useState, Suspense } from "react";
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import { usePathname } from "next/navigation";
import { ClipboardList, Coins, FileText, HandCoins, Home, LayoutDashboard, LineChart, Link2, Package, Repeat, ShoppingCart, Users, Wallet } from "lucide-react";

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Track the URL path

  useEffect(() => {
    setIsLoaded(false); // Reset loading state when the route changes
    const timeout = setTimeout(() => setIsLoaded(true), 300); // Simulate loading delay

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [pathname]);

  const iconClass = "h-5 w-5";
  const links = {
    home: [
      { name: "Dashboard", icon: <LayoutDashboard className={iconClass} />, href: "/" },
    ],
    payments: [
      { name: 'Dashboard', icon: <LayoutDashboard className={iconClass} />},
      { name: 'Invoices', icon: <FileText className={iconClass} />, notifications: 6 },
      { name: 'Payment Requests', icon: <HandCoins className={iconClass} /> },
      { name: 'Recurring Payments', icon: <Repeat className={iconClass} /> },
      { name: 'Customers', icon: <Users className={iconClass} /> },
      { name: 'Items', icon: <Package className={iconClass} /> },
      { name: 'Orders', icon: <ClipboardList className={iconClass} /> },
      { name: 'Payment Links', icon: <Link2 className={iconClass} /> },
      { name: 'Virtual Terminal', icon: <Wallet className={iconClass} /> },
    ],
    rewards: [
      { name: "Incentives Hub", icon: <Coins className={iconClass} />, href: "/rewards/" },
      { name: "Goals & Milestones", icon: <LineChart className={iconClass} />, href: "/rewards/goal-tracking" },
      { name: "Points Summary", icon: <Home className={iconClass} />, href: "/rewards/points-summary" },
      { name: "Reward Redemption", icon: <Package className={iconClass} />, href: "/rewards/redemption" },
      { name: "Badges & Achievements", icon: <ShoppingCart className={iconClass} />, notifications: 6, href: "/rewards/achievements" },
    ]
  };

  const navlinks = () => {
    switch (pathname) {
      case "payments":
        return links.payments
      case "rewards":
        return links.payments
      default:
        return links.home
  }}

  return (<>
    <SideNav links={links.home} favorites />
    <div className="flex flex-col">
      <Header links={links.home} />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
          <Suspense fallback={<div className="flex items-center justify-center h-full"><BouncingDotsLoader /></div>}>
            {isLoaded ? <ViewContainer>{children}</ViewContainer> : <BouncingDotsLoader />}
          </Suspense>
        </main>
      </div>
  </>);
};
