import type { ReactNode } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { classnames } from "@/utils";
import { CardSvg, InfoCard } from "../Cards";
import styles from "./quickview.module.css";
import { titlecase } from "@/utils";

type Timeframes = 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
type Title = [string, string, string, string];
type Amount = string | Date;
type Value = [Amount, Amount, Amount, Amount];
type Delta = string;
type DeltaType = {
  amount: [Delta, Delta, Delta, Delta];
  time: [Timeframes, Timeframes, Timeframes, Timeframes];
}

type InfoCardsProps = {
  title?: { overview: Title, sales: Title, rewards: Title, goals: Title };
  value?: { overview: Value, sales: Value, rewards: Value, goals: Value };
  delta?: DeltaType;
  icon?: [ReactNode, ReactNode, ReactNode, ReactNode];
  margin?: string;
  tabId: 'overview' | 'sales' | 'rewards' | 'goals';
  onTabChange: (tab: 'overview' | 'sales' | 'rewards' | 'goals') => void;
}

export const QuickView: React.FC<InfoCardsProps> = ({
  title = {
    overview: ['Total Revenue', 'Next Payout', 'Rewards Earned', 'Next Milestone'],
    sales: ['Total Sales', 'Payment Methods', 'Fees Saved', 'Recurring Revenue'],
    rewards: ['Total Points', 'Total Rewards Earned', 'Recent Points', 'Top Earnings Activity'],
    goals: ['Goals Completed', 'Active Goals', 'Next Milestone', 'Rewards Earned']
  },
  value = {
    overview: ['$45,231.89', '12/23/2024', '12,234', '537 pts'],
    sales: ['$12,231.89', '+350', '+2,234', '+37'],
    rewards: ['$1,231.89', '+50', '+234', '+7'],
    goals: ['23', '5', '12', '3']
  },
  delta,
  margin,
  tabId= 'overview',
  onTabChange,
}): JSX.Element => {

  const deltaObj = {
    a: { amount: delta?.amount[0] ?? '+20.1%', time: delta?.time[0] ?? 'month' as Timeframes },
    b: { amount: '+180.1%', time: 'month' as Timeframes },
    c: { amount: '+19%', time: 'month' as Timeframes },
    d: { amount: '+201', time: 'hour' as Timeframes }
  };
  
  const timeframes = {
    hour: 'since last hour',
    day: 'today',
    week: 'this week',
    month: 'this month',
    quarter: 'in the past 3 months',
    year: 'this year'
  };

  const titleValue = (title: string) => `${titlecase(title.trim())}`;
  const amountValue = (amount: Amount) => `${amount.toString().trim()}`;
  const deltaValue = (amount: string, time: keyof typeof timeframes) => 
    `${amount} ${timeframes[time]}`;

  console.log(CardSvg[0] as ReactNode)
  console.log({ tabId, title: title[tabId], value: value[tabId] });

  return(
    <div style={{width: "100%", padding: "0 20px", margin}}>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList style={{ border: '1px solid rgba(255, 255, 255, .2)' }}>
          {(['overview', 'sales', 'rewards', 'goals'] as const).map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              onClick={() => onTabChange(tab)}
            >
              {titlecase(tab)}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={tabId} className="space-y-4">
          <div className={classnames('grid gap-4 sm:grid-cols-2 md:grid-cols-4', styles.cards)}>
            <InfoCard
              title={titleValue(title[tabId][0])}
              amount={amountValue(value[tabId][0])}
              timeSince={deltaValue(deltaObj.a.amount, deltaObj.a.time)}
              icon={CardSvg[0]}
            />
            <InfoCard
              title={titleValue(title[tabId][1])}
              amount={amountValue(value[tabId][1])}
              timeSince={deltaValue(deltaObj.b.amount, deltaObj.b.time)}
              icon={CardSvg[1]}
            />
            <InfoCard
              title={titleValue(title[tabId][2])}
              amount={amountValue(value[tabId][2])}
              timeSince={deltaValue(deltaObj.c.amount, deltaObj.c.time)}
              icon={CardSvg[2]}
            />
            <InfoCard
              title={titleValue(title[tabId][3])}
              amount={amountValue(value[tabId][3])}
              timeSince={deltaValue(deltaObj.d.amount, deltaObj.d.time)}
              icon={CardSvg[3]}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default QuickView;