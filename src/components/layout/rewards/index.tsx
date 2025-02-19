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
import { LayoutProvider } from "@/components/providers/layout-provider";

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
    { name: 'Rewards Summary', icon: <Home className={iconClass} />, component: <PointsSummary />},
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

  return (<>
    <LayoutProvider>
      <View />
    </LayoutProvider>
  </>)
}

export default Rewards;