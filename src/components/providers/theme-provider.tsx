"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useUserStore } from "@/store/useUserStore"
import { ResponsiveDialog } from '@/components/ui/responsive-dialog'
import { Button } from "@/components/ui/button"
import { Input } from "../ui/input"
import { FlowerOfLife } from "../ui/flower-of-life"

interface LoginModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  logIn: () => void
}

const LoginModal = ({isOpen, setIsOpen, logIn}: LoginModalProps) => {
  return (
    <FlowerOfLife>
    <ResponsiveDialog
    title="Login"
    description={`Welcome to Lumino.`}
    open={isOpen}
    onOpenChange={setIsOpen}>
      Username
      <Input />
      Password
      <Input />
      <br/>
      <Button onClick={logIn}>Log In</Button>
      <div className="text-center">
      <small className="underline">CREATE NEW ACCOUNT</small>
      </div>
    </ResponsiveDialog>
    </FlowerOfLife>
  )
}

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isOpen, setIsOpen] = React.useState(true)
  const {isLoggedIn, logIn } = useUserStore();
  return (
    <NextThemesProvider {...props}>
      { isLoggedIn ? children
      : <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]"><LoginModal isOpen={isOpen} setIsOpen={setIsOpen} logIn={logIn} /></div>}
    </NextThemesProvider>)
}

export const useTheme = () => {
  const context = React.useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}