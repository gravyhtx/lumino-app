
const PointsSummary = () => {
  const data = {
    card: [
      {
        a: "Total Points Available",
        b: "12,345",
        c: "+10% this month"
      },
      {
        a: "Lifetime Points Earned",
        b: "102,234",
        c: "+15% this month"
      },
      {
        a: "Rewards Redeemed",
        b: "13",
        c: "1 new offer"
      },
      {
        a: "Total Points Expired",
        b: "0",
        c: "0% this month"
      }
    ],
    graph: [
      {
        title: "Points Accumulation",
        info: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          data: [100, 200, 300, 400, 500, 600]
        }
      },
      {
        title: "Activity",
        info: {
          labels: ["Transactions", "Goals", "Referrals"],
          data: [70, 20, 10]
        }
      }
    ]
  }
  return (
    <div>
      <h1>Points Summary</h1>
    </div>
  );
}