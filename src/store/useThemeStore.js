import { create } from "zustand";

const useThemeStore = create((set, get) => ({
  theme: "light",

  toggleTheme: () =>
    set({
      theme: get().theme === "light" ? "dark" : "light",
    }),
}));

export default useThemeStore;
