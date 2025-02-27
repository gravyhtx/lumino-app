import { Avatar } from "@radix-ui/react-avatar"
import styles from "./recents.module.css";
import { classnames } from "@/utils";

export interface Transaction {
  date: string;
  time: string;
  name: string;
  email: string;
  amount: string;
}

const transactions = Array(5).fill({
  date: "02/07/24",
  time: "1:03 PM",
  name: "Olivia Martin",
  email: "olivia.martin@email.com",
  amount: "+$1,999.00",
}) as Transaction[];

export const RecentSales = () => {
  return (<div style={{padding: '20px', height: "350px", width: "100%"}}>
    <div className="space-y-8">
      {transactions.map((tx, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-[15%]">
                <p className="text-sm leading-none">{tx.date}</p>
                <p className="text-muted-foreground text-sm">{tx.time}</p>
              </Avatar>
              <div className="ml-4 space-y-1 text-left w-[65%]">
                <p className={classnames("text-sm font-medium leading-none", styles.name)}>{tx.name}</p>
                <p className={classnames("text-sm text-muted-foreground", styles.email)}>{tx.email}</p>
              </div>
              <div className="ml-auto font-medium w-[20%]">{tx.amount}</div>
            </div>
          ))}
    </div>
  </div>)
}