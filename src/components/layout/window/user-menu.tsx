import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CircleUser, Home, HandCoins, Medal, BotMessageSquare, Sun, Moon } from "lucide-react"
import Link from 'next/link';
import { Settings } from "./settings";
import { useTheme } from "next-themes";

export const UserMenu: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const { setTheme } = useTheme()
  return (<>
    <Link href="/">
      <Button variant="outline" size="icon" className="rounded-full">
        <Home className="h-5 w-5" />
        <span className="sr-only">Go to your Dashboard</span>
      </Button>
    </Link>
    <Link href="/payments">
      <Button variant="ghost" size="icon" className="rounded-full">
        <HandCoins className="h-5 w-5" />
        <span className="sr-only">Go to your Dashboard</span>
      </Button>
    </Link>
    <Link href="/rewards">
      <Button variant="ghost" size="icon" className="rounded-full">
        <Medal className="h-5 w-5" />
        <span className="sr-only">Go to your Dashboard</span>
      </Button>
    </Link>
    <Link href="/assistant">
      <Button variant="ghost" size="icon" className="rounded-full">
        <BotMessageSquare className="h-5 w-5" />
        <span className="sr-only">Go to your Dashboard</span>
      </Button>
    </Link>
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