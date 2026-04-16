import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as theme from '../styles/theme';

// Define the theme type
export type Theme = typeof theme;

// Define the context type
interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme Provider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    // In the future, you can implement dark mode colors here
  };

  const value: ThemeContextType = {
    theme,
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Re-export theme constants for direct import (backwards compatibility)
export const {
  colors,
  fonts,
  spacing,
  typography,
  borderRadius,
  shadows,
  layout,
} = theme;
