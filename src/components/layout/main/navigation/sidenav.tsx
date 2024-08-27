import Link from "next/link"
import { BellMinus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NavLink } from "./nav-link"
import { NotificationCard } from "./notification-card"
import { LuminoLogo } from "@/components/elements/logo"
import type { ViewLink } from "../../types"

interface SideNavProps {
  links: ViewLink[]
}

export const Sidenav: React.FC<SideNavProps> = ({links}) => {
  return(
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <LuminoLogo />
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <BellMinus className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {links.map((link) => (
            <NavLink key={link?.name} {...link} />
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4">
        <NotificationCard />
      </div>
    </div>
  )
}