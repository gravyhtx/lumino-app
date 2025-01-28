"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupWindowProps {
  children: React.ReactNode; // Content for the popup
  onClose: () => void; // Callback for closing the popup
  onSave?: () => void; // Callback for saving
  onReset?: () => void; // Callback for resetting the form
  saveButtonText?: string; // Text for the save button
  dropdown?: React.ReactNode; // Optional dropdown content for the save button
  columns?: boolean;
}

export function PopupWindow({
  children,
  onClose,
  onSave,
  onReset,
  saveButtonText = "Save", // Default to "Save"
  dropdown,
  columns = false
}: PopupWindowProps) {

  const dd = dropdown && (
    <div className="absolute top-full right-0 mt-2 w-48 rounded-lg border bg-white shadow-lg">
      {dropdown}
    </div>)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={onClose}>
      <div className={`max-w-${columns?'6':''}xl w-full p-4`}>
        <div className="rounded-lg border bg-card text-card-foreground shadow-lg">
          {/* Header Section */}
          <div className="flex items-center justify-between border-b p-3">
            {/* Close and Reset Buttons */}
            <div className="flex items-center gap-2">
              <Button onClick={onClose} variant="ghost" size="sm">
                Close
              </Button>
              {onReset && (
                <Button onClick={onReset} variant="ghost" size="sm">
                  Reset
                </Button>
              )}
            </div>

            {/* Save Button with Optional Dropdown */}
            <div className="relative flex items-center gap-2">
              {onSave && <Button size="sm" onClick={onSave}>
                {saveButtonText}
                {dropdown && <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>}
              {/* {dd} */}
            </div>
            
          </div>

          {/* Content Section */}
          <div className="p-4 max-h-[80vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}