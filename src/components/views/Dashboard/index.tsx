import { classnames } from "@/utils";
import { QuickView } from "./QuickView";
import { BarGraph } from "./BarGraph";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentSales } from "./RecentSales";

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

  return (<>
    <div className={''}>
      <QuickView value={quickViewData} margin={"0 1rem"} />
    </div>
    <div className={classnames("grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8", '')}>
      <div className="w-full lg:col-span-1">
        <Card>
          <CardTitle>Gross Sales</CardTitle>
          <BarGraph />
        </Card>
      </div>
      <div className="w-full lg:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <RecentSales />
        </Card>
      </div>
    </div>
  </>)
}