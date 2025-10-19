import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("textory-theme") || "corporate",
  setTheme: (theme) => {
    localStorage.setItem("textory-theme", theme);
    set({ theme });
  },
}));
