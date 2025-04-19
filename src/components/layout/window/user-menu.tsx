import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CircleUser, Home, HandCoins, Medal, BotMessageSquare, Sun, Moon, Sparkles, CreditCard, Banknote } from "lucide-react"
import Link from 'next/link';
import { Settings } from "./settings";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export const UserMenu: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const { setTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    { href: "/payments", icon: <CreditCard className="h-5 w-5" />, label: "Payments" },
    { href: "/rewards", icon: <Medal className="h-5 w-5" />, label: "Rewards" },
    { href: "/assistant", icon: <Sparkles className="h-5 w-5" />, label: "Assistant" },
    { href: "/banking", icon: <Banknote className="h-5 w-5" />, label: "Banking" }
  ];

  return (<>
    {navLinks.map(({ href, icon, label }) => (
      <Link key={href} href={href}>
        <Button variant={pathname === href ? "outline" : "ghost"} size="icon" className="rounded-full">
          {icon}
          <span className="sr-only">{label}</span>
        </Button>
      </Link>
    ))}
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setOpenSettings(true)}>Settings</DropdownMenuItem>
        <DropdownMenuItem>Help</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
    
    <Settings isOpen={openSettings} setIsOpen={setOpenSettings} />
  </>)
}