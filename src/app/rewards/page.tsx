"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Correct hook for App Router
import { SideNav } from "@/components/layout/window/side-nav";
import PointsSummary from "@/components/layout/rewards/points";
import { ViewContainer } from "@/components/layout/views/view-container";
import { Header } from "@/components/layout/window/header";
import { Home, LineChart, Package, ShoppingCart } from "lucide-react";
import BouncingDotsLoader from "@/components/layout/loading/BouncingDots";

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
    { name: "Rewards Summary", icon: <Home className={iconClass} />, href: "/rewards" },
    { name: "Reward Redemption", icon: <Package className={iconClass} />, href: "/rewards/redemption" },
    { name: "Badges & Achievements", icon: <ShoppingCart className={iconClass} />, notifications: 6, href: "/rewards/achievements" },
    { name: "Goals & Milestones", icon: <LineChart className={iconClass} />, href: "/rewards/goal-tracking" },
  ];

  return (
    <>
      <SideNav links={links} />
      <div className="flex flex-col">
        <Header links={links} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 w-full overflow-auto">
          {isLoaded ? (
            <ViewContainer>
              <PointsSummary />
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