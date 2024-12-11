import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CircleUser, Home, HandCoins, Medal, BotMessageSquare } from "lucide-react"
import { Settings } from "../accessibility/settings"

export const UserMenu: React.FC = () => {
  const [openSettings, setOpenSettings] = useState(false);
  return (<>
    <Button variant="outline" size="icon" className="rounded-full">
      <Home className="h-5 w-5" />
      <span className="sr-only">Go to your Dashboard</span>
    </Button>
    <Button variant="ghost" size="icon" className="rounded-full">
      <HandCoins className="h-5 w-5" />
      <span className="sr-only">Go to your Dashboard</span>
    </Button>
    <Button variant="ghost" size="icon" className="rounded-full">
      <Medal className="h-5 w-5" />
      <span className="sr-only">Go to your Dashboard</span>
    </Button>
    <Button variant="ghost" size="icon" className="rounded-full">
      <BotMessageSquare className="h-5 w-5" />
      <span className="sr-only">Go to your Dashboard</span>
    </Button>
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