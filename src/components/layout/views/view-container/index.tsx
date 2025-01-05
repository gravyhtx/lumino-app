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
  return (<>
    <div className={cn("w-full flex flex-col", classes)}>
      {/* {header && (
        <h1 className={cn("text-lg font-semibold md:text-2xl mb-4", header?.classes)}>
          {header.text}
        </h1>
      )} */}
      <div className="w-full flex-1 rounded-lg border border-dashed shadow-sm p-4">
        {children}
      </div>
    </div>
  </>)
}