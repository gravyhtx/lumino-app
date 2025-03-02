import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { LuminoTriangle } from "@/components/elements/logo"
import Link from "next/link"
import { Package2 } from "lucide-react"
import { NotificationCard } from "./notification-card"
import { UserMenu } from "./user-menu"
import { NavLink, NavLinkProps } from "./nav-link"
import { motion } from 'framer-motion';

interface HeaderProps {
  links: NavLinkProps[]
}


export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)

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
  return (
    <motion.header 
      initial={{ width: "100%" }}
      animate={{ width: `auto` }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      ref={headerRef}
      className={cn(
        "flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10 transition-all duration-200 dark:bg-lumi-blue/60",
        !scrolled ? "glass-header shadow-lg" : "bg-background/80 dark:bg-lumi-blue/80"
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
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {links.map((link) => (
              <NavLink key={link?.name} {...link} />
            ))}
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