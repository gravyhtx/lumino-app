import React from "react"
import { LuminoLogo } from "@/components/elements/logo"
import { Button } from "@/components/ui/button"
import { cn, formatLink } from "@/lib/utils"
import { Bell, HandCoins } from "lucide-react"
import Link from "next/link"
import { NotificationCard } from "./notification-card"
import { NavLink, type NavLinkProps } from "./nav-link"
import { ChatBox } from "./chat-box"


interface SideNavProps {
  links: NavLinkProps[] | []
  chatData?: {
      name: string
      icon: React.ReactNode
      component: React.ReactNode
    }[]
  favorites?: boolean
  notify?: boolean
}

export const SideNav: React.FC<SideNavProps> = ({
  links,
  chatData,
  favorites,
  notify
}) => {

  links = links ?? {
    name: '',
    icon: <></>,
  }
  const chat = chatData ?? []
  const NavLinks = () => chat.map((link) => (
    <NavLink href={`#${formatLink(link?.name)}`} key={link?.name} {...link} />
  ));
  return (
    <div className="sticky top-0 h-screen hidden border-r bg-muted/40 md:block glass-sidebar">
      <div className="flex h-full max-h-screen flex-col gap-2 dark:bg-[hsl(215,27.9%,16.9%)]">
        <div className="flex flex-shrink-0 h-14 items-center border-b border-glass-border px-4 h-[60px] lg:px-5 lumino-banner">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <LuminoLogo />
          </Link>
          <Button variant="link" size="icon" className={cn("ml-auto h-8 w-8 glass-notify", notify?"active":"")}>
            <Bell stroke={notify?"white":"#888"} className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="h-full flex flex-col h-[calc(100vh-60px)] dark:bg-[hsl(215,27.9%,16.9%)]">
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 dark:text-white">
              {chatData ? <NavLinks /> :
              links.map((link) => (
                <NavLink key={link?.name} {...link} />
              ))}
              {favorites &&
              <>
                <div className="my-4 h-px bg-muted/40"></div>
                <h4 className="text-muted-foreground text-xs uppercase px-2 lg:px-4">
                  Favorites
                </h4>
                <div className="mt-2">
                  <NavLink
                    name="Payment Requests"
                    href="/payments/payment-requests"
                    icon={<HandCoins className="h-5 w-5" />}
                  />
                </div>
              </>}
            </nav>
          </div>
          <div className="mt-auto p-4">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  )
}