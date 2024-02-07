import { create } from 'zustand'
import { type  RootState} from './types'
import { ThemeColors, darkColorsTheme, lightColorsTheme } from '../context/themeColors';
interface State{
  isDarkMode: boolean;
  toogleMenu: boolean;
  toogleTheme: () => void;
  themeColors: ThemeColors;
  closeMenu: () => void;
  openMenu: () => void;
}

export const useThemeStore = create<State>((set) => {
  return {
    isDarkMode: false,
    toogleMenu: true,
    themeColors:darkColorsTheme,
    toogleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode , themeColors: state.isDarkMode ? darkColorsTheme : lightColorsTheme})),
    closeMenu: () => set({ toogleMenu: false }),
    openMenu: () => set({ toogleMenu: true }),
  }
})