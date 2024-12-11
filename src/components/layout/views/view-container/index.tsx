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
      {/* <div className="flex items-center">
      { header &&
        <h1 className={cn("text-lg font-semibold md:text-2xl", header?.classes)}>{header?.text}</h1>
      }
      </div> */}
    <div style={{width: "100%"}} className=" w-full flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1">
      <div className={cn("w-full flex flex-col items-center gap-1 text-center", classes)}>
        { children }
      </div>
    </div>
    </>)
}