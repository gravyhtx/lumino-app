import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CircleUser, Home, HandCoins, Medal, BotMessageSquare } from "lucide-react"
import Link from 'next/link';
import { Settings } from "./settings";

export const UserMenu: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
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
    <Settings isOpen={openSettings} setIsOpen={setOpenSettings} />
  </>)
}