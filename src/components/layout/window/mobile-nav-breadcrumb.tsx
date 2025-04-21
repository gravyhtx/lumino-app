"use client"

import React from "react"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { useBreakpoint } from "@/hooks/useBreakpoint"
import type { NavLinkProps } from "@/components/layout/window/nav-link"

interface MobileNavBreadcrumbProps {
  links: NavLinkProps[]
  section: string // e.g., "Payments"
  sectionHref?: string // optional override
}

export const MobileNavBreadcrumb: React.FC<MobileNavBreadcrumbProps> = ({
  links,
  section,
  sectionHref = `/${section.toLowerCase()}`,
}) => {
  const { isDesktop } = useBreakpoint()

  if (isDesktop) return null // Only show on mobile/tablet

  return (
    <div className="px-4 pt-2 pb-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbLink href={sectionHref}>{section}</BreadcrumbLink>
                <span className="sr-only">Toggle section menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/rewards">Rewards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/assistant">Assistant</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/banking">Banking</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                <BreadcrumbLink href={links?.[0]?.href ?? "#"}>{links?.[0]?.name ?? "Dashboard"}</BreadcrumbLink>
                <span className="sr-only">Toggle subpage menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {links.slice(1).map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <Link href={link.href ?? "#"}>{link.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}