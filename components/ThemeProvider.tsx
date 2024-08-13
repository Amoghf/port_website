'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

// Define the props interface for ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
  // Add other specific props if needed
  // Example: theme?: 'light' | 'dark'; // Add props that are specifically required
}

// Functional component with typed props
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
