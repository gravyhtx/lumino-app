"use client";

import Link from "next/link"
import {
  Bell,
  Home,
  LineChart,
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
import { formatLink } from '@/lib/utils';
import { ViewContainer } from '../views/view-container';
import { LuminoLogo } from "@/components/elements/logo";
import type  { MainProps } from "../types";
import { Customers } from '../../views/Customers';

const Main: React.FC<MainProps> = ({}) => {
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

  const View2 = () => {
    return <></>
  }

  const Dash = () => {
    return (
      <></>
    )
  }

  const viewLinks = [
    { name: 'Dashboard', icon: <Home className="h-5 w-5" />, component: <DefaultView header='Dashboard' />},
    { name: 'Invoices', icon: <ShoppingCart className="h-5 w-5" />, notifications: 6, component: <View2 /> },
    { name: 'Payment Requests', icon: <Package className="h-5 w-5" />, component: <Dash /> },
    { name: 'Payment Links', icon: <LineChart className="h-5 w-5" /> },
    { name: 'Customers', icon: <Users className="h-5 w-5" />, component: <Customers /> },
    { name: 'Orders', icon: <ShoppingCart className="h-5 w-5" /> },
    { name: 'Subscriptions', component: <></> },
    { name: 'Virtual Terminal' },
    { name: 'Payments' },
    { name: 'Items' },
  ];

  const currentLink = viewLinks.find(link => formatLink(link.name) === formatLink(currentView));

  const View = () => {
    return currentLink?.component ?? <DefaultView header={ currentLink?.name } />;
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
                <Menu className="h-5 w-5" />
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
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <UserMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
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

export default Main;