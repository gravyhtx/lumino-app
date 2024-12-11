import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useSettingsStore, DEFAULT_SETTINGS, type SettingsState } from "@/store/useSettingsStore";
import { Separator } from '@radix-ui/react-dropdown-menu';
import { StickySlider } from '../navigation/text-slider';
import { ResponsiveDialog } from '@/components/ui/responsive-dialog';

interface SettingsProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Settings: React.FC<SettingsProps> = ({ isOpen, setIsOpen }) => {
  const { state, save, reset } = useSettingsStore();
  const [settings, setSettings] = useState<SettingsState>({
    name: state.name,
    theme: state.theme,
    notifications: state.notifications,
    size: state.size,
    tooltips: state.tooltips,
  });

  const handleSave = () => {
    save(settings);
  };

  const handleReset = () => {
    reset();
    setSettings(DEFAULT_SETTINGS);
  };

  return (
    <ResponsiveDialog
      title="Settings"
      description={`Make changes to your settings here. Click save when you're done.`}
      open={isOpen}
      onOpenChange={setIsOpen}>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-4">
            <Label htmlFor="name" className="text-left">
              <b>User Name</b>
            </Label>
            <Input
              id="name"
              value={settings.name}
              onChange={(e) => setSettings({ ...settings, name: e.target.value })}
              className="col"
            />
          </div>
          <Separator className="my-2" />
          <h3><b>Display</b></h3>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="theme" className="text-right">
              Color Theme
            </Label>
            <Select
              value={settings.theme}
              onValueChange={(theme: 'light' | 'dark' | 'system') => setSettings({ ...settings, theme })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select a theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="notifications" className="text-right">
              Show Notifications
            </Label>
            <Switch
              id="notifications"
              checked={settings.notifications}
              onCheckedChange={(checked) => setSettings({ ...settings, notifications: checked })}
              className="col-span-3"
            />
          </div>
          <Separator className="my-2" />
          <h3><b>Accessibility</b></h3>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="size" className="text-right">
              Text Size
            </Label>
            <div className="col-span-3">
              <StickySlider labels={["Aa","","","Aa"]} />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tooltips" className="text-right">
              Show Tooltips
            </Label>
            <Switch
              id="tooltips"
              checked={settings.tooltips}
              onCheckedChange={(tooltips) =>
                setSettings({
                  ...settings,
                  tooltips,
                })
              }
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSave}>Save changes</Button>
          <Button type="button" onClick={handleReset}>Reset</Button>
        </DialogFooter>
    </ResponsiveDialog>
  );
};
