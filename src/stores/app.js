import { create } from "zustand";

export const useNavbarDropdown = create((set) => ({
  status: false,
  setStatus: (status) => {
    set({ status })
  }
}))
