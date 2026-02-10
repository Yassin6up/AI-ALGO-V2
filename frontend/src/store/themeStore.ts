import { create } from 'zustand';

type ThemeMode = 'dark' | 'light';

interface ThemeState {
  mode: ThemeMode;
  toggle: () => void;
  setMode: (mode: ThemeMode) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  mode: 'light',
  toggle: () =>
    set((state) => ({
      mode: state.mode === 'dark' ? 'light' : 'dark'
    })),
  setMode: (mode) => set({ mode })
}));
