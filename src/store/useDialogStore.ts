import { create } from 'zustand';

interface DialogState {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
  toggleDialog: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export const useDialogStore = create<DialogState>((set) => ({
  isOpen: false,
  openDialog: () => set(() => ({ isOpen: true })),
  closeDialog: () => set(() => ({ isOpen: false })),
  toggleDialog: () => set((state) => ({ isOpen: !state.isOpen })),
  children: null,
}));