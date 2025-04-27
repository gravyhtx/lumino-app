import { Avatar } from "@radix-ui/react-avatar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import styles from "./recents.module.css";
import { classnames } from "@/utils";
import { Separator } from "@/components/ui/separator";

export interface Transaction {
  date: string;
  time: string;
  name: string;
  email: string;
  amount: string;
}

export interface Transaction {
  date: string;
  time: string;
  name: string;
  email: string;
  amount: string;
}

const transactions = [
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "-$100.00",
  },
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "-$80.00",
  },
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
  {
    date: "02/07/24",
    time: "1:03 PM",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: "+$1,999.00",
  },
] as Transaction[];

export const RecentSales = () => {
  return (
    <TooltipProvider>
      <div className="relative p-4 h-[350px] w-full bg-prism-gradient rounded-lg shadow-lg">
        {/* Scrollable List with Gradient Mask */}
        <div className="relative h-full">
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-prism-gradient to-transparent pointer-events-none z-10"></div>
          <div className="h-full overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-muted-foreground">
          {transactions.map((tx, index) => {
          const amountParts = tx.amount.match(/^([+-])?\$?([\d,\.]+)$/);

          return (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div className="flex items-center py-2 border-b border-muted last:border-none hover:bg-muted/20 transition-all rounded-sm cursor-pointer">
                  <Avatar className="h-9 w-9 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">{tx.name.charAt(0)}</span>
                  </Avatar>
                  <div className="ml-4 w-[65%]">
                    <p className={classnames("text-sm font-medium", styles.name)}>{tx.name}</p>
                    <p className={classnames("text-xs text-muted-foreground", styles.email)}>{tx.email}</p>
                  </div>
                  <div className="ml-auto text-sm font-medium flex items-center">
                    {amountParts ? (
                      <>
                        <span className={tx.amount.startsWith("+") ? "text-lumi-accent-green" : "text-muted-foreground"}>
                          {amountParts[1]}${amountParts[2]}
                        </span>
                        {/* <span className="ml-1 text-muted-foreground">$</span> */}
                      </>
                    ) : (
                      tx.amount
                    )}
                  </div>
                </div>
              </TooltipTrigger>

              {/* Your TooltipContent stays the same */}
              <TooltipContent
                side={index < 2 ? "bottom" : "top"}
                className="z-50 bg-muted text-popover-foreground p-3 rounded-sm shadow-md w-64"
              >
                <div className="text-sm">
                  <p className="font-bold">{tx.name}</p>
                  <p>{tx.email}</p>
                  <Separator className="my-1" />
                  <p className={classnames("font-semibold text-primary", tx.amount.startsWith("+") ? "text-lumi-accent-green" : "text-muted-foreground")}>
                    {tx.amount}
                  </p>
                  <small>{tx.date} {tx.time}</small>
                </div>
              </TooltipContent>
            </Tooltip>
          );
        })}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};