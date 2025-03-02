import React, { useState } from "react";
import Link from "next/link";
import { useUpdateView } from "@/store/useViewStore";
import { Badge } from "@/components/ui/badge";
import { Package2, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  name: string;
  href: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  notifications?: number;
  close?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ name = "Nav Link", href, onClick, icon, notifications, close }) => {
  // const updateView = useUpdateView();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const toggleFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering the link
    e.preventDefault(); // Prevent the link's default behavior
    setIsFavorite((prev) => !prev); // Toggle favorite state
  };

  return (
    <div className="relative group">
      <Link
        href={href}
        onClick={onClick}
        className={`mx-[${close ? "0" : "-0.65rem"}] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground`}
      >
        {icon ?? <Package2 className="h-6 w-6" />}
        {!close && name}
        {/* {notifications &&
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full group-hover:opacity-0">
            {notifications}
          </Badge>
        } */}
      </Link>
      {!close &&
        <button
          onClick={toggleFavorite}
          className={cn("absolute right-0 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center justify-center w-6 h-6 rounded-full border border-muted text-muted hover:text-foreground focus:outline-none")}
        >
          <Star
            className={`h-5 w-5 transition-all ${
              isFavorite
                ? "fill-black text-black" // Black fill when favorited
                : "fill-none text-[#aaa]" // Black outline when not favorited
            }`}
          />
        </button>}
    </div>
  )
}