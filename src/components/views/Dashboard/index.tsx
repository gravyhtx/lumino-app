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
    `+${subscriptions}`??'--',
    transactionQuantity,
    nextPayout
  ];

  const [activeTab, setActiveTab] = useState<'overview' | 'sales' | 'rewards' | 'goals'>('overview');

  return (<>
    <div className={''}>
      <QuickView
        tabId={activeTab}
        onTabChange={(tab) => setActiveTab(tab)} />
    </div>
    <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
      <Display />
    </div>
  </>)
}