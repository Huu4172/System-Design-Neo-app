export const colors = {
  primary: '#00677f',
  primaryContainer: '#00d1ff',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#00566a',
  
  secondary: '#6100c6',
  secondaryContainer: '#7f04ff',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#e7d5ff',
  
  tertiary: '#815600',
  tertiaryContainer: '#feb127',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#6b4700',
  
  surface: '#f8f9fa',
  surfaceContainer: '#edeeef',
  surfaceContainerLow: '#f3f4f5',
  surfaceContainerHigh: '#e7e8e9',
  surfaceContainerHighest: '#e1e3e4',
  surfaceContainerLowest: '#ffffff',
  onSurface: '#191c1d',
  
  background: '#f8f9fa',
  onBackground: '#191c1d',
  
  outline: '#6c797f',
  outlineVariant: '#bbc9cf',
  
  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  
  inverseSurface: '#2e3132',
  inverseOnSurface: '#f0f1f2',
  inversePrimary: '#4cd6ff',
  
  // Slate colors for dark mode support
  slate50: 'rgba(248, 250, 252, 0.8)',
  slate400: 'rgb(148, 163, 184)',
  slate500: 'rgb(100, 116, 139)',
  slate800: 'rgb(30, 41, 59)',
  slate900: 'rgba(15, 23, 42, 0.8)',
  
  cyan400: 'rgb(34, 211, 238)',
  cyan500: 'rgba(6, 182, 212, 0.04)',
  cyan600: 'rgb(8, 145, 178)',
  
  white: '#ffffff',
  black: '#000000',
};

export const fonts = {
  headline: 'SpaceGrotesk',
  body: 'Manrope',
  label: 'SpaceGrotesk',
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  xxxxl: 64,
};

// Typography styles
export const typography = {
  // Headlines
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
    letterSpacing: -1,
    lineHeight: 48,
  },
  h2: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    lineHeight: 40,
  },
  h3: {
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 36,
  },
  h4: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 32,
  },
  h5: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 28,
  },
  
  // Body text
  bodyLarge: {
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.15,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  
  // Labels and captions
  label: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.1,
    lineHeight: 20,
  },
  labelSmall: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  caption: {
    fontSize: 12,
    letterSpacing: 0.4,
    lineHeight: 16,
  },
  overline: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    lineHeight: 16,
  },
};

// Border radius
export const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 28,
  full: 9999,
};

// Shadows
export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  xs: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

// Layout constants
export const layout = {
  maxWidth: 1200,
  containerPadding: 24,
  containerPaddingMobile: 16,
  sectionGap: 48,
  sectionGapMobile: 32,
  cardGap: 12,
  bottomNavHeight: 80,
  headerHeight: 64,
};
