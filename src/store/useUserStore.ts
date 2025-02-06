import { create } from "zustand";

export interface UserState {
  isLoggedIn: boolean
  logIn: () => void;
  logOut: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isLoggedIn: false,
  logIn: () => set(() => ({ isLoggedIn: true })),
  logOut: () => set(() => ({ isLoggedIn: false }))
}));