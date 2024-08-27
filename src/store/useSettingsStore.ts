import { create } from 'zustand';

type ThemeTypes = 'light' | 'dark' | 'system';
type SizeTypes = 0 | 1 | 2 | 3;

export interface SettingsState {
  name: string
  theme: ThemeTypes;
  notifications: boolean;
  size: SizeTypes;
  tooltips: boolean;
}

export const DEFAULT_SETTINGS: SettingsState = {
  name: 'User',
  theme: 'system',
  notifications: true,
  size: 0,
  tooltips: false,
};

interface SettingsStore { 
  state: SettingsState;
  save: (settings: Partial<SettingsState>) => void;
  reset: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  state: { ...DEFAULT_SETTINGS },
  save: (settings) => set((state) => ({
    state: {
      ...state.state,
      ...settings,
    },
  })),
  reset: () => set(() => ({
    state: { ...DEFAULT_SETTINGS },
  })),
}));