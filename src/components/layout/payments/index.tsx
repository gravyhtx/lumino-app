"use client";

import React from "react";
import Link from "next/link"
import {
  Bell,
  CircleUser,
  ClipboardList,
  FileText,
  HandCoins,
  Home,
  LayoutDashboard,
  LineChart,
  Link2,
  Medal,
  Menu,
  Package,
  Package2,
  Repeat,
  Search,
  ShoppingCart,
  TerminalIcon,
  Users,
  Wallet,
} from "lucide-react"
import { NavLink } from './navigation/nav-link'
import { NotificationCard } from './navigation/notification-card';
import { UserMenu } from './navigation/user-menu';
import { DialogDemo } from './navigation/dialog-ui';
import BouncingDotsLoader from '../loading/BouncingDots';
import { ViewContainer } from '../views/view-container';
import type  { MainProps } from "../types";
import { useHashChange } from '../../../hooks/useHashChange/useHashChange';
import { formatLink } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LuminoLogo, LuminoTriangle } from '../../elements/logo';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import Dashboard from "./dashboard";
import PayRequest from "./request";
import Invoices from "./invoices";
import Recurring from "./recurring";
import Customers from "./customers";
import Items from "./items";
import Orders from "./orders";
import PayLinks from "./link";
import Terminal from "./terminal";

const Payments: React.FC<MainProps> = ({}) => {
  // Single page application
  // Handles changes for each "view" using an object and switching key names
  // Provider for theme, user, etc.
  // Handles routes, requests/query, etc.
  // Handles modals, notifications, etc.
  const { currentView } = useHashChange();

  const DefaultView = ({ header }: { header?: string }) => <>
    <h3 className="text-2xl font-bold tracking-tight">
      You have no {header ?? 'default'}
    </h3>
    <p className="text-sm text-muted-foreground">
      You can start selling as soon as you add a product.
    </p>
    <DialogDemo test="test">
      <Button className="mt-4">This is a Test</Button>
    </DialogDemo>
    <DialogDemo test="best">
      <Button className="mt-4">This is the Best</Button>
    </DialogDemo>
  </>;

  const iconClass = "h-5 w-5";

  const viewLinks = [
    { name: 'Dashboard', icon: <LayoutDashboard className={iconClass} />, component: <Dashboard />},
    { name: 'Invoices', icon: <FileText className={iconClass} />, notifications: 6, component: <Invoices /> },
    { name: 'Payment Requests', icon: <HandCoins className={iconClass} />, component: <PayRequest /> },
    { name: 'Recurring Payments', icon: <Repeat className={iconClass} />, component: <Recurring /> },
    { name: 'Customers', icon: <Users className={iconClass} />, component: <Customers /> },
    { name: 'Items', icon: <Package className={iconClass} />, component: <Items /> },
    { name: 'Orders', icon: <ClipboardList className={iconClass} />, component: <Orders /> },
    { name: 'Payment Links', icon: <Link2 className={iconClass} />, component: <PayLinks /> },
    { name: 'Virtual Terminal', icon: <Wallet className={iconClass} />, component: <Terminal /> },
  ];

  const currentLink = viewLinks.find(link => formatLink(link.name) === formatLink(currentView));

  const View = () => {
    return currentLink?.component ?? <Dashboard />;
  }

  const NavLinks = () => viewLinks.map((link) => (
    <NavLink key={link?.name} {...link} />
  ));

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LuminoLogo />
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {viewLinks.map((link) => (
                <NavLink key={link?.name} {...link} />
              ))}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <NotificationCard />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <LuminoTriangle />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <NavLinks />
              </nav>
              <div className="mt-auto">
                <NotificationCard />
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
          </div>
          <UserMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full">
        { currentView ?
          <ViewContainer header={{ text: formatLink(currentView) }}>
            <View />
          </ViewContainer>
        :
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">{currentView}</h1>
            <BouncingDotsLoader />
          </div> }
        </main>
      </div>
    </div>
  )
}

export default Payments;