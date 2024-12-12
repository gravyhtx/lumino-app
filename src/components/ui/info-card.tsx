import React, { forwardRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react"; // Import all Lucide icons

type InfoCardProps = {
  title: string;
  amount: string;
  timeSince: string;
  icon?: React.ReactNode; // Allow ReactNode or Lucide icon name as string
};

export const InfoCard = forwardRef<HTMLDivElement, InfoCardProps>(
  ({ title, amount, timeSince, icon }, ref) => {
    // Determine if the icon is a string (Lucide icon name)
    const IconComponent =
      typeof icon === "string" && icon in LucideIcons
        ? (LucideIcons[icon as keyof typeof LucideIcons] as React.ElementType) // Explicitly cast to keyof LucideIcons
        : null;

    // Default fallback SVG
    const defaultIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="h-4 w-4 text-muted-foreground"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    );

    return (
      <Card
        ref={ref}
        aria-label={title}
        style={{
          border: "1px solid rgba(255, 255, 255, .2)",
          width: "100%",
        }}
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {/* Render the icon dynamically or fallback */}
          {IconComponent ? (
            <IconComponent size={20} className="text-muted-foreground" />
          ) : (
            icon ?? defaultIcon /* Use `??` for nullish values */
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-xs text-muted-foreground">{timeSince}</p>
        </CardContent>
      </Card>
    );
  }
);

InfoCard.displayName = "InfoCard";
