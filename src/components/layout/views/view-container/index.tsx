import { cn } from "@/lib/utils";

interface ViewContainerProps {
  children?: React.ReactNode;
  classes?: string | string[];
  header?: {
    text?: string;
    classes?: string | string[];
  };
}

export const ViewContainer: React.FC<ViewContainerProps> = ({ children, classes, header }) => {
  const dark = "dark:bg-[#0a0b1e] dark:bg-gradient-to-br dark:from-[#0a0b1e] dark:via-[#252644] dark:to-[#0a0b1e]"
  return (<>
    {/* <div className={cn("w-full flex flex-col h-full", classes)}> */}
      {/* {header && (
        <h1 className={cn("text-lg font-semibold md:text-2xl mb-4", header?.classes)}>
          {header.text}
        </h1>
      )} */}
      <div className={cn(
        "w-full h-full flex flex-col flex-1 rounded-lg border border-dashed shadow-sm p-4 bg-animation",
        // dark,
        classes)}>
        {children}
      </div>
  </>)
}