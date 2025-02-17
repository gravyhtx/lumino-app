"use client"

import React, { useEffect, useState } from 'react';
import { SideNav } from '@/components/layout/window/side-nav';
import PointsSummary from '@/components/layout/rewards/points';
import { ViewContainer } from '@/components/layout/views/view-container';
import { Header } from '@/components/layout/window/header';
import { Home, LineChart, Package, ShoppingCart } from 'lucide-react';
import BouncingDotsLoader from '@/components/layout/loading/BouncingDots';
import BadgesAndAchievements from '@/components/layout/rewards/badges';
import RewardRedemption from '@/components/layout/rewards/redeem';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true)
  },[])
  const iconClass = "h-5 w-5";
  const links = [
    { name: 'Rewards Summary', icon: <Home className={iconClass} />, href: "/rewards"},
    { name: 'Reward Redemption', icon: <Package className={iconClass} />, href: "/rewards/redemption" },
    { name: 'Badges & Achievements', icon: <ShoppingCart className={iconClass} />, notifications: 6, href: "/rewards/achievements" },
    { name: 'Goal Tracking', icon: <LineChart className={iconClass} />, href: "/rewards/goal-tracking" },
        { name: "Incintives Hub", icon: <LineChart className={iconClass} />, href: "/rewards/incentives" },
  ];
  return (<>
    <SideNav links={links} />
    <div className="flex flex-col">
      <Header links={links} />
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
      { isLoaded ?
          <ViewContainer>
            <RewardRedemption />
          </ViewContainer>
        :
        <div className="flex items-center">
          <BouncingDotsLoader />
        </div> }
      </main>
    </div>
  </>)
}