import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LuminoTriangle } from "@/components/elements/logo"
import Link from "next/link"
import { Banknote, CreditCard, Home, Medal, Package2, Sparkles } from "lucide-react"
import { NotificationCard } from "./notification-card"
import { UserMenu } from "./user-menu"
import { NavLink, NavLinkProps } from "./nav-link"
import { motion } from 'framer-motion';

interface HeaderProps {
  section: string
  links: NavLinkProps[]
}


export const Header: React.FC<HeaderProps> = ({ section, links }) => {
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const navLinks = [
    { key: "home", icon: <Home className="h-5 w-5" />, label: "Hub" },
    { key: "payments", icon: <CreditCard className="h-5 w-5" />, label: "Payments" },
    { key: "rewards", icon: <Medal className="h-5 w-5" />, label: "Rewards" },
    { key: "assistant", icon: <Sparkles className="h-5 w-5" />, label: "Assistant" },
    { key: "banking", icon: <Banknote className="h-5 w-5" />, label: "Banking" }
  ];
  const Icon = () => {
    switch (section.toLowerCase()) {
      case "payments": return navLinks[1]?.icon;
      case "rewards": return navLinks[2]?.icon;
      case "assistant": return navLinks[3]?.icon;
      case "banking": return navLinks[4]?.icon;
      default: return navLinks[0]?.icon;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        setScrolled(window.scrollY > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  links = links ?? {
    name: '',
    icon: <></>,
  }

  const Links = () => links.map((link) => (
    <NavLink key={link?.name} {...link} />
  ))
  return (
    <motion.header 
      initial={{ width: "100%" }}
      animate={{ width: `auto` }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      ref={headerRef}
      className={cn(
        "flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10 transition-all duration-200 dark:bg-lumi-blue/60",
        !scrolled ? "glass-header shadow-lg" : "bg-background/80 dark:bg-lumi-blue/80 backdrop-blur-sm"
      )}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden glass-effect"
          >
            <LuminoTriangle />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col glass-sidebar">
          <nav className="grid gap-2 text-lg font-medium">
            {/* <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Icon />
              <span>{section.toUpperCase()}</span>
            </Link> */}
            {/* {links.map((link) => (
              <NavLink key={link?.name} {...link} />
            ))} */}
              <div className="py-2 grid gap-2 text-sm">
                {navLinks.map(({ key, icon, label }) => (
                  <div key={key} className="space-y-1">
                    <Link href={`/${key === "hub" ? "" : key}`} className="flex items-center gap-2 text-lg font-semibold">
                      {icon}&nbsp;
                      <span>{label.toUpperCase()}</span>
                    </Link>
                    {section.toLowerCase() === key && links.length > 0 && (
                      <div className="ml-6 mt-1 grid text-base font-normal">
                        {links.map((link) => (
                          <NavLink key={link?.name} {...link} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
          </nav>
          <div className="mt-auto">
            <NotificationCard />
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
      </div>
      <UserMenu />
  </motion.header>
  )
}