"use client";

import React from "react";
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
import { NavLink } from './navigation/nav-link'
import { NotificationCard } from './navigation/notification-card';
import { UserMenu } from './navigation/user-menu';
import { DialogDemo } from './navigation/dialog-ui';
import BouncingDotsLoader from '../loading/BouncingDots';
import { ViewContainer } from '../views/view-container';
import type  { MainProps } from "../types";
import { useHashChange } from '../../../hooks/useHashChange/useHashChange';
import { Dashboard } from '../../views/Dashboard';
import { formatLink } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { LuminoLogo, LuminoTriangle } from '../../elements/logo';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { InfoCard } from "../../ui/info-card";
import { classnames } from '../../../utils/index';
import { Card, CardTitle, CardDescription, CardHeader, CardContent } from '@/components/ui/card';
import { BarGraph, PieGraph } from "@/components/ui/graph";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress"
import RewardRedemption from "./redeem";
import GoalTrackingSuggestions from "./goals";
import BadgesAndAchievements from "./badges";
import PointsSummary from "./points";

const Rewards: React.FC<MainProps> = ({}) => {
  // Single page application
  // Handles changes for each "view" using an object and switching key names
  // Provider for theme, user, etc.
  // Handles routes, requests/query, etc.
  // Handles modals, notifications, etc.
  const { currentView } = useHashChange();

  const DefaultView = ({ header }: { header?: string }) => <PointsSummary/>;

  // const Points = () => {
  //   return (
  //   <div style={{width: "100%", padding: "0 20px"}}>
  //     <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-4 w-full')}>
  //     <InfoCard title="Test" amount="12" timeSince="=Test" />
  //     <InfoCard title="Test" amount="12" timeSince="=Test" />
  //     <InfoCard title="Test" amount="12" timeSince="=Test" />
  //     <InfoCard title="Test" amount="12" timeSince="=Test" />
  //     </div>
  //     <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
  //       <div className="w-full lg:col-span-1">
  //         <Card style={{padding: "10px 0"}}>
  //           <CardTitle style={{paddingBottom: "10px"}}>Gross Sales</CardTitle>
  //           <BarGraph />
  //         </Card>
  //       </div>
  //       <div className="w-full lg:col-span-1">
  //         <Card style={{padding: "10px 0"}}>
  //           <CardTitle>Net Sales</CardTitle>
  //           <PieGraph />
  //         </Card>
  //       </div>
  //       </div>
  //   </div>
  //     )
  // }

  // const Badges = () => {
  //   // Mock data for badges and milestones
  //   const badges = [
  //     { id: 1, name: "First Transaction", earned: true, icon: "🏅" },
  //     { id: 2, name: "Power Seller", earned: true, icon: "🌟" },
  //     { id: 3, name: "Loyal Customer", earned: false, icon: "🏆" },
  //     // Add more badges as needed
  //   ]

  //   const milestones = [
  //     { id: 1, name: "Complete 100 Transactions", progress: 80 },
  //     { id: 2, name: "$10,000 in Revenue", progress: 65 },
  //     { id: 3, name: "Onboard 50 Customers", progress: 30 },
  //     // Add more milestones as needed
  //   ]

  //   return (
  //     <div style={{ width: "100%", padding: "0 20px" }}>
  //       <h1 className="text-2xl font-bold mb-6">Badges & Achievements</h1>
  //       <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-4 w-full mb-6')}>
  //         <InfoCard title="Total Badges Earned" amount={badges.filter(b => b.earned).length.toString()} timeSince="All Time" />
  //         <InfoCard title="Upcoming Milestones" amount={milestones.length.toString()} timeSince="In Progress" />
  //         <InfoCard title="Next Badge Progress" amount="75%" timeSince="Loyal Customer" />
  //         <InfoCard title="Achievement Score" amount="1250" timeSince="Points" />
  //       </div>
  //       <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
  //         <div className="w-full lg:col-span-1">
  //           <Card>
  //             <CardContent className="pt-6">
  //               <CardTitle className="mb-4">Badge Showcase</CardTitle>
  //               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  //                 {badges.map((badge) => (
  //                   <div key={badge.id} className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
  //                     <span className="text-4xl mb-2">{badge.icon}</span>
  //                     <Badge variant={badge.earned ? "default" : "secondary"}>
  //                       {badge.name}
  //                     </Badge>
  //                   </div>
  //                 ))}
  //               </div>
  //             </CardContent>
  //           </Card>
  //         </div>
  //         <div className="w-full lg:col-span-1">
  //           <Card>
  //             <CardContent className="pt-6">
  //               <CardTitle className="mb-4">Milestone Tracker</CardTitle>
  //               <div className="space-y-4">
  //                 {milestones.sort((a, b) => b.progress - a.progress).map((milestone) => (
  //                   <div key={milestone.id}>
  //                     <div className="flex justify-between mb-1">
  //                       <span className="text-sm font-medium">{milestone.name}</span>
  //                       <span className="text-sm font-medium">{milestone.progress}%</span>
  //                     </div>
  //                     <Progress value={milestone.progress} className="w-full" />
  //                   </div>
  //                 ))}
  //               </div>
  //             </CardContent>
  //           </Card>
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // const Dash = () => {
  //   return (
  //     <><Dashboard /></>
  //   )
  // }

  const iconClass = "h-5 w-5";

  const viewLinks = [
    { name: 'Points Summary', icon: <Home className={iconClass} />, component: <PointsSummary />},
    { name: 'Badges & Achievements', icon: <ShoppingCart className={iconClass} />, notifications: 6, component: <BadgesAndAchievements /> },
    { name: 'Reward Redemption', icon: <Package className={iconClass} />, component: <RewardRedemption /> },
    { name: 'Goal Tracking', icon: <LineChart className={iconClass} />, component: <GoalTrackingSuggestions /> },
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
            {/* <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form> */}
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

export default Rewards;