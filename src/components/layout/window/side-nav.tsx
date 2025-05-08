import React, { useState } from "react"
import { LuminoLogo } from "@/components/elements/logo"
import { Button } from "@/components/ui/button"
import { cn, formatLink } from "@/lib/utils"
import { Bell, ChevronLeft, ChevronRight, Coins, FileText, HandCoins } from "lucide-react"
import Link from "next/link"
import { NotificationCard } from "./notification-card"
import { NavLink, type NavLinkProps } from "./nav-link"
import { ChatBox } from "./chat-box"
import { Separator } from "@/components/ui/separator"
import { useSettingsStore } from "@/store/useSettingsStore"
import { motion } from 'framer-motion';
import { useBreakpoint } from "@/hooks/useBreakpoint"


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

  const [hovering, setHovering] = useState(false)

  // const toggleNav = () => setCloseNav((prev) => !prev)
  const { state, toggleNav } = useSettingsStore();
  const isNavOpen = state.isNavOpen;

  const handleMouseEnter = () => setHovering(true)
  const handleMouseLeave = () => setHovering(false)

  links = links ?? {
    name: '',
    icon: <></>,
  }
  const chat = chatData ?? []
  const NavLinks = () => chat.map((link) => (
    <NavLink close={!isNavOpen} href={`#${formatLink(link?.name)}`} key={link?.name} {...link} />
  ));

  const { isDesktop } = useBreakpoint()

  if (!isDesktop) return null // Only show on desktop
  
  return (
    <motion.div
      initial={{ width: 70 }}
      animate={{ width: isNavOpen ? 280 : 70 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "sticky top-0 h-screen border-r bg-muted/40 dark:bg-lumi-blue/50 md:block glass-sidebar",
        !isNavOpen ? "w-[70px]" : "md:w-[220px] lg:w-[280px]"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex flex-shrink-0 h-14 items-center border-b border-glass-border px-4 h-[60px] lg:px-5 lumino-banner dark:bg-lumi-dark-blue">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <LuminoLogo close={!isNavOpen} />
          </Link>
          {isNavOpen &&
            <Button variant="link" size="icon" className={cn("ml-auto h-8 w-8 glass-notify", notify?"active":"")}>
              <Bell stroke={notify?"white":"#888"} className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>}
        </div>
        <div className="h-full flex flex-col h-[calc(100vh-60px)]">
          <div className="flex-1 overflow-y-auto">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 dark:text-white">
              {chatData ? <NavLinks /> :
              links.map((link) => (
                <NavLink close={!isNavOpen} key={link?.name} {...link} />
              ))}
              {favorites &&
              <>
                {isNavOpen ?
                  <><div className="my-4 h-px bg-muted/40"></div>
                  <h4 className="text-muted-foreground text-xs uppercase px-2 lg:px-4">
                    Favorites
                  </h4></>
                :
                  <Separator className="bg-muted-foreground mt-2" />
                }
                <div className="mt-2">
                  <NavLink
                    close={!isNavOpen}
                    name="Payment Requests"
                    href="/payments/payment-requests"
                    icon={<HandCoins className="h-5 w-5" />}
                  />
                  <NavLink
                    close={!isNavOpen}
                    name="Invoices"
                    href="/payments/invoices"
                    icon={<FileText className="h-5 w-5" />}
                  />
                  <NavLink
                    close={!isNavOpen}
                    name="Incentives"
                    href="/rewards/incentives"
                    icon={<Coins className="h-5 w-5" />}
                  />
                </div>
              </>}
            </nav>
          </div>
          {isNavOpen &&
            <div className="mt-auto p-4">
              <ChatBox />
            </div>}
        </div>
        {/* Toggle Button */}
        {hovering && (
          <button
            onClick={toggleNav}
            className="absolute top-1/2 right-[-25px] transform -translate-y-1/4 bg-lumi-dark-blue p-2 rounded-full border border-muted shadow-lg hover:bg-opacity-80 transition-all"
          >
            {!isNavOpen ? <ChevronRight className="h-5 w-5 text-white" /> : <ChevronLeft className="h-5 w-5 text-white" />}
          </button>
        )}
      </div>
    </motion.div>
  )
}