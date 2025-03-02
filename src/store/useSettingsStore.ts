import { create } from 'zustand';

type ThemeTypes = 'light' | 'dark' | 'system';
type SizeTypes = number;

export interface SettingsState {
  name: string
  theme: ThemeTypes;
  notifications: boolean;
  size: SizeTypes;
  tooltips: boolean;
  isNavOpen?: boolean;
}

export const DEFAULT_SETTINGS: SettingsState = {
  name: 'User',
  theme: 'light',
  notifications: true,
  size: 0,
  tooltips: false,
  isNavOpen: true,
};

interface SettingsStore { 
  state: SettingsState;
  save: (settings: Partial<SettingsState>) => void;
  reset: () => void;
  toggleNav: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  state: { ...DEFAULT_SETTINGS },
  save: (settings) => set((prev) => ({
    state: { ...prev.state, ...settings } // Properly merges new settings into state
  })),
  reset: () => set(() => ({
    state: { ...DEFAULT_SETTINGS }
  })),
  toggleNav: () => set((prev) => ({
    state: { ...prev.state, isNavOpen: !prev.state.isNavOpen },
  })),
}));