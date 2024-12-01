import { AuthSlice, AuthState, User } from "@/interfaces";
import { StateCreator } from "zustand";

const initialState: AuthState = {
  user: null,
};

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  ...initialState,
  setUser: (user: User) => set(() => ({ user })),
  resetAuth: () => set(() => ({ ...initialState })),
});
