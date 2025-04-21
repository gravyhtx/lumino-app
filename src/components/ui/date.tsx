"use client"

import * as React from "react"
import { format, addDays } from "date-fns"
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant="outline"
            className={cn(
              // 👇 these styles make it circular on mobile
              "justify-center text-left font-normal",
              "p-2 sm:px-4 sm:py-2 sm:w-[300px]",
              "rounded-full sm:rounded-md",
              "w-10 h-10 sm:h-auto sm:w-auto",
              "transition-all"
            )}
          >
            <CalendarIcon className="h-4 w-4" />
            <span className="sr-only">Pick Date</span>
            <span className="hidden ml-2 sm:block">
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} – {format(date.to, "LLL dd, y")}
                  </>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                "Pick a date"
              )}
            </span>
          </Button>

        </PopoverTrigger>
        <PopoverContent
          align="start"
          className={cn(
            "w-auto p-0",
            "sm:rounded-md sm:shadow-md",
            "max-sm:fixed max-sm:inset-0 max-sm:z-[9999] max-sm:bg-background max-sm:p-4 max-sm:overflow-auto"
          )}
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}