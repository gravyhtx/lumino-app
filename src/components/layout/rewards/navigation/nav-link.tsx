import Link from "next/link";
import { type ReactNode } from "react";
import { Package2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatLink } from "@/lib/utils";
import { useUpdateView } from "@/store/useViewStore";

interface NavLinkProps {
  name: string;
  icon?: ReactNode;
  notifications?: number;
}
export const NavLink: React.FC<NavLinkProps> = ({ name = "Nav Link", icon, notifications}) => {
  const updateView = useUpdateView();
  return (
    <Link
      href={`#${formatLink(name)}`}
      onClick={() => updateView(name)}
      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
    >
      {icon ?? <Package2 className="h-6 w-6" />}
      {name}
      {notifications &&
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {notifications}
        </Badge>
      }
    </Link>
  )
}