import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("textory-theme") || "cupcake",
  setTheme: (theme) => {
    localStorage.setItem("textory-theme", theme);
    set({ theme });
  },
}));
