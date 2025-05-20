"use client"

import React, { useEffect, useState, Suspense } from "react";
import { SideNav } from '@/components/layout/window/side-nav';
import { Header } from '@/components/layout/window/header';
import { ViewContainer } from '@/components/layout/views/view-container';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import { usePathname } from "next/navigation";
import { Banknote, ClipboardList, Coins, FileText, HandCoins, Home, LayoutDashboard, LineChart, Link2, Package, Repeat, ShoppingCart, Users, Wallet } from "lucide-react";
import type { NavLinkProps } from "../layout/window/nav-link";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { MobileNavBreadcrumb } from "../layout/window/mobile-nav-breadcrumb";

interface LayoutProviderProps {
  children: React.ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const { isDesktop, ready } = useBreakpoint();
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(false);
    const timeout = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timeout);
  }, [pathname]);

  const iconClass = "h-5 w-5";

  const links = {
    home: [
      { name: "Dashboard", icon: <LayoutDashboard className={iconClass} />, href: "/" },
    ],
    payments: [
      { name: "Dashboard", icon: <LayoutDashboard className={iconClass} />, href: "/payments" },
      { name: "Invoices", icon: <FileText className={iconClass} />, href: "/payments/invoices", notifications: 6 },
      { name: "Payment Requests", icon: <HandCoins className={iconClass} />, href: "/payments/payment-requests" },
      { name: "Recurring Payments", icon: <Repeat className={iconClass} />, href: "/payments/recurring-payments" },
      { name: "Customers", icon: <Users className={iconClass} />, href: "/payments/customers" },
      { name: "Items", icon: <Package className={iconClass} />, href: "/payments/items" },
      { name: "Orders", icon: <ClipboardList className={iconClass} />, href: "/payments/orders" },
      { name: "Payment Links", icon: <Link2 className={iconClass} />, href: "/payments/payment-links" },
      { name: "Virtual Terminal", icon: <Wallet className={iconClass} />, href: "/payments/virtual-terminal" },
    ],
    rewards: [
      { name: "Incentives Hub", icon: <Coins className={iconClass} />, href: "/rewards" },
      { name: "Goals & Milestones", icon: <LineChart className={iconClass} />, href: "/rewards/goal-tracking" },
      { name: "Points Summary", icon: <Home className={iconClass} />, href: "/rewards/points-summary" },
      { name: "Reward Redemption", icon: <Package className={iconClass} />, href: "/rewards/redemption" },
      { name: "Badges & Achievements", icon: <ShoppingCart className={iconClass} />, href: "/rewards/achievements", notifications: 6 },
    ],
    chat: [
      { name: "New Chat", icon: <LayoutDashboard className={iconClass} />, href: "/assistant" },
      { name: "12/23/2024", icon: <LayoutDashboard className={iconClass} />, href: "/assistant/12-23-2024" },
    ],
    banking: [
      { name: "Dashboard", icon: <Banknote className={iconClass} />, href: "/banking" },
      { name: "Transactions", icon: <Banknote className={iconClass} />, href: "/banking/transactions" },
      { name: "Card Management", icon: <Banknote className={iconClass} />, href: "/banking/card" },
      { name: "Banking Insights", icon: <Banknote className={iconClass} />, href: "/banking/insights" },
    ]
  };

  const sectionKey = pathname.split("/")[1] ?? "home";

  const navlinks = (): NavLinkProps[] => {
    switch (sectionKey) {
      case "payments": return links.payments;
      case "rewards": return links.rewards;
      case "assistant": return links.chat;
      case "banking": return links.banking;
      default: return links.home;
    }
  };

  const sectionLabelMap: Record<string, string> = {
    payments: "Payments",
    rewards: "Rewards",
    chat: "Chat",
    home: "Home",
    banking: "Banking",
  };

  const sectionLabel = sectionLabelMap[sectionKey] ?? "Home";

  if (!ready) return null; // prevent mismatch on SSR

  return (<>
    {isDesktop && <SideNav links={navlinks()} favorites />}
    <div className="flex flex-col w-full">
      <Header links={navlinks()} />
      {!isDesktop && <MobileNavBreadcrumb links={navlinks()} section={sectionLabel} />}
      <main className="flex-1 flex flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto w-full h-full">
        <Suspense fallback={<div className="flex items-center justify-center h-full"><BouncingDotsLoader /></div>}>
          {isLoaded ? <ViewContainer>{children}</ViewContainer> : <BouncingDotsLoader />}
        </Suspense>
      </main>
    </div>
  </>);
};
