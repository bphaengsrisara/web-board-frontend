import { create } from "zustand";
import { createAuthSlice } from "./authSlice";
import { AuthSlice } from "@/interfaces";
import { devtools } from "zustand/middleware";

type Store = AuthSlice;

export const useBoundStore = create<Store, [["zustand/devtools", never]]>(
  devtools((...a) => ({
    ...createAuthSlice(...a),
  })),
);
