"use client";

import React from "react";
import Link from "next/link"
import {
  AppWindowMac,
  Bell,
  CircleUser,
  HandCoins,
  Home,
  LineChart,
  Medal,
  Menu,
  MessageSquarePlus,
  Package,
  Package2,
  Search,
  ShoppingCart,
  SquarePlus,
  Users,
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
import New from "./new";
import Chat from "./chat";

interface AssistantProps {
  chatData: {
    name: string
    icon: React.ReactNode
    component: React.ReactNode
  }[]
}
const Assistant: React.FC<AssistantProps> = ({ chatData }) => {
  // Single page application
  // Handles changes for each "view" using an object and switching key names
  // Provider for theme, user, etc.
  // Handles routes, requests/query, etc.
  // Handles modals, notifications, etc.
  const { currentView } = useHashChange();

  const iconClass = "h-5 w-5";

  const currentLink = chatData.find(link => formatLink(link.name) === formatLink(currentView));

  const View = () => {
    return currentLink?.component ?? <New />;
  }

  const NavLinks = () => chatData.map((link) => (
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
              {chatData.map((link) => (
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

export default Assistant;