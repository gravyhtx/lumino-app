import { useSettingsStore } from "@/store/useSettingsStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface AdvancedProps {
  title: string;
  description: string;
  size?: 0 | 1 | 2 | 3;
  className?: string;
  children?: React.ReactNode;
}

export function Advanced({ title, description, size = 3, className, children }: AdvancedProps) {
  const { state, toggleAdvancedMode } = useSettingsStore();
  const isAdvanced = state.advancedMode;
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <TooltipProvider>
      <div
        className={cn("relative", className)}
        onClick={toggleAdvancedMode}
        onMouseMove={handleMouseMove}>
        {/* <div className="flex"> */}
          {isAdvanced ? (
            <Tooltip>
              <TooltipTrigger asChild>
              <h1 className={`text-${size}xl font-bold cursor-default`}>{title}</h1>
              </TooltipTrigger>
              <TooltipContent side="bottom" align="start" sideOffset={5}
                className="z-50 text-muted bg-muted/80 text-popover-foreground p-3 rounded-sm shadow-md w-64"
                // style={{
                //   position: "fixed",
                //   left: tooltipPosition.x + 10 + "px",
                //   top: tooltipPosition.y + 10 + "px",}}
                >
                {description}
              </TooltipContent>
            </Tooltip>
          ) : (
            <>
              {size > 0 ?
              <h1 className={`text-${size > 1 ? size : ""}xl font-bold cursor-default`}>{title}</h1> :
              <div className={`cursor-default`}>{title}</div>}
              <div className="text-muted-foreground">{description}</div>
            </>
          )}
        {/* </div> */}
        {children && <CardContent>{children}</CardContent>}
      </div>
    </TooltipProvider>
  );
}
