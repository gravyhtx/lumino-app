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
  const dark = "dark:bg-[#0a0b1e20] dark:bg-gradient-to-br dark:from-[#0a0b1e20] dark:via-[#25264450] dark:to-[#0a0b1e20]"
  return (<>
      <div className={cn(
        "flex flex-col flex-1 view-box rounded-lg p-4 md:p-6 lg:p-8 bg-animation",
        "w-full h-full",
        // "max-w-[1230px] mx-auto",
        dark,
        classes)}>
        {children}
      </div>
  </>)
}