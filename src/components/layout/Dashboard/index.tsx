import { classnames } from "@/utils";
import { QuickView } from "./QuickView";
import { useState } from "react";
import { Display } from './Display';

// Include props for Total Revenue, Subscriptions, Transaction Quantity, and Next Payout 

export const Dashboard = () => {
  const totalRevenue = '$45,231.89';
  const subscriptions = 0;
  const transactionQuantity = '+12,234';
  const nextPayout = '+537';

  const quickViewData: [string, string, string, string] = [
    totalRevenue,
    `+${subscriptions}`,
    transactionQuantity,
    nextPayout
  ];

  const [activeTab, setActiveTab] = useState<'overview' | 'sales' | 'rewards' | 'goals'>('overview');

  return (
    <div className="space-y-6 flex flex-col items-center justify-between w-full max-w-[1230px] mx-auto my-auto"
      // style={{display: "flex",flexDirection: "column", height: "100%", justifyContent: "space-evenly"}}
      >
        {/* <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl text-left font-semibold">Welcome, Lumino.</h2>
        </div> */}
        <QuickView
          tabId={activeTab}
          onTabChange={(tab) => setActiveTab(tab)} />

      <div className={classnames("grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-8 w-full", '')}>
        <Display />
      </div>
    </div>
  )
}