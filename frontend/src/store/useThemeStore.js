import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("textory-theme") || "dark",
  setTheme: (theme) => {
    localStorage.setItem("textory-theme", theme);
    set({ theme });
  },
}));
