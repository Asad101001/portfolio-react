import { useState, useEffect, useCallback } from 'react';

export type Theme = 'cyberpunk' | 'industrial' | 'sunset' | 'emerald';

const themes: Theme[] = ['cyberpunk', 'industrial', 'sunset', 'emerald'];

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('asad_portfolio_theme') as Theme;
    return (saved && themes.includes(saved)) ? saved : 'cyberpunk';
  });

  const applyTheme = useCallback((newTheme: Theme) => {
    const body = document.body;
    themes.forEach(t => body.classList.remove(`theme-${t}`));
    body.classList.add(`theme-${newTheme}`);
    localStorage.setItem('asad_portfolio_theme', newTheme);
    setThemeState(newTheme);

    // Dispatch custom event for vanilla-ish components
    window.dispatchEvent(new CustomEvent('themechanged', { detail: { theme: newTheme } }));
  }, []);

  const rotateTheme = useCallback(() => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];

    if ('startViewTransition' in document) {
      // @ts-ignore - View Transition API
      document.startViewTransition(() => {
        applyTheme(nextTheme);
      });
    } else {
      applyTheme(nextTheme);
    }
  }, [theme, applyTheme]);

  useEffect(() => {
    // Initial apply
    applyTheme(theme);
  }, []); // Only on mount

  return { theme, setTheme: applyTheme, rotateTheme };
}
