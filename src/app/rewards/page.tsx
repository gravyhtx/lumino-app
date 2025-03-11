"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Correct hook for App Router
import { SideNav } from "@/components/layout/window/side-nav";
import PointsSummary from "@/components/layout/rewards/points";
import { ViewContainer } from "@/components/layout/views/view-container";
import { Header } from "@/components/layout/window/header";
import { Coins, Gamepad2, Home, LineChart, Package, ShoppingCart } from "lucide-react";
import BouncingDotsLoader from "@/components/layout/loading/BouncingDots";
import IncentivesHub from "@/components/layout/rewards/incentives-hub";

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname(); // Track the URL path

  useEffect(() => {
    setIsLoaded(false); // Set loading to false when the pathname changes
    const timeout = setTimeout(() => setIsLoaded(true), 300); // Simulate loading delay

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [pathname]); // Depend on pathname changes

  const iconClass = "h-5 w-5";
  const links = [
    { name: "Incentives Hub", icon: <Coins className={iconClass} />, href: "/rewards/" },
    { name: "Goal Tracking", icon: <LineChart className={iconClass} />, href: "/rewards/goal-tracking" },
    { name: "Points Summary", icon: <Home className={iconClass} />, href: "/rewards/points-summary" },
    { name: "Reward Redemption", icon: <Package className={iconClass} />, href: "/rewards/redemption" },
    { name: "Badges & Achievements", icon: <Gamepad2 className={iconClass} />, notifications: 6, href: "/rewards/achievements" },
  ];

  return (
    <>
      <SideNav links={links} />
      <div className="flex flex-col">
        <Header links={links} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
          {isLoaded ? (
            <ViewContainer>
              <IncentivesHub />
            </ViewContainer>
          ) : (
            <div className="flex items-center">
              <BouncingDotsLoader />
            </div>
          )}
        </main>
      </div>
    </>
  );
}