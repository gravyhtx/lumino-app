"use client";

import Link from "next/link"
import {
  Bell,
  CircleUser,
  HandCoins,
  Home,
  LineChart,
  Medal,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavLink } from './navigation/nav-link'
import { useHashChange } from '@/hooks/useHashChange/useHashChange';
import { NotificationCard } from './navigation/notification-card';
import { UserMenu } from './navigation/user-menu';
import { DialogDemo } from './navigation/dialog-ui';
import BouncingDotsLoader from '../loading/BouncingDots';
import { cn, formatLink } from '@/lib/utils';
import { ViewContainer } from '../views/view-container';
import { LuminoLogo, LuminoTriangle } from "@/components/elements/logo";
import type  { MainProps } from "../types";
import { Customers } from '../../views/Customers';
import { Dashboard } from "@/components/views/Dashboard";
import { useEffect, useRef, useState } from "react";

const Main: React.FC<MainProps> = ({}) => {
  // Single page application
  // Handles changes for each "view" using an object and switching key names
  // Provider for theme, user, etc.
  // Handles routes, requests/query, etc.
  // Handles modals, notifications, etc.
  const { currentView } = useHashChange();
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  const View2 = () => {
    return <></>
  }

  const Dash = () => {
    return (
      <><Dashboard/></>
    )
  }

  const iconClass = "h-5 w-5";

  const pageLinks = [
    { name: 'Dashboard', icon: <Home className={iconClass} />, component: <DefaultView header='Dashboard' />},
    // { name: 'Invoices', icon: <ShoppingCart className={iconClass} />, notifications: 6, component: <View2 /> },
    // { name: 'Payment Requests', icon: <Package className={iconClass} />, component: <Dash /> },
    // { name: 'Payment Links', icon: <LineChart className={iconClass} /> },
    // { name: 'Customers', icon: <Users className={iconClass} />, component: <Customers /> },
    // { name: 'Orders', icon: <ShoppingCart className={iconClass} /> },
    // { name: 'Subscriptions', component: <></> },
    // { name: 'Virtual Terminal' },
    // { name: 'Payments' },
    // { name: 'Items' },
  ];

  const currentLink = pageLinks.find(link => formatLink(link.name) === formatLink(currentView));

  const View = () => {
    return currentLink?.component ?? <DefaultView header={ currentLink?.name } />;
  }

  const NavLinks = () => pageLinks.map((link) => (
    <NavLink key={link?.name} {...link} />
  ));
  const notify = false;

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="sticky top-0 h-screen hidden border-r bg-muted/40 md:block glass-sidebar">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-glass-border px-4 lg:h-[60px] lg:px-5 lumino-banner">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <LuminoLogo />
            </Link>
            <Button variant="link" size="icon" className={cn("ml-auto h-8 w-8 glass-notify", notify?"active":"")}>
              <Bell stroke={notify?"white":"#888"} className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {pageLinks.map((link) => (
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
        <header 
            ref={headerRef}
            className={cn(
              "flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10 transition-all duration-200",
              scrolled ? "glass-header shadow-lg" : "bg-background/60"
            )}
          >
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden glass-effect"
              >
                <LuminoTriangle />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col glass-sidebar">
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
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
        { currentView ?
          <ViewContainer header={{ text: formatLink(currentView) }}>
            {/* <View /> */}
            <Dash />
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

export default Main;