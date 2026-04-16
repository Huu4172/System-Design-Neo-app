# Global Styling Guide

This guide explains how to use the global styling system in your React Native application.

## Overview

The project now has a comprehensive global styling system with:

1. **Theme tokens** - Centralized design system values
2. **Global styles** - Reusable style definitions
3. **Theme context** - React context for theme management

## File Structure

```
src/
├── contexts/
│   └── ThemeContext.tsx          # Theme provider and hooks
├── styles/
│   ├── theme.js                  # Design tokens (colors, spacing, typography, etc.)
│   ├── global.styles.js          # Global reusable styles
│   └── [component].styles.js    # Component-specific styles
```

## 1. Using Theme Tokens

### Import theme values directly

```typescript
import { colors, spacing, typography, borderRadius, shadows } from './styles/theme';

<View style={{ 
  padding: spacing.xl, 
  backgroundColor: colors.surface,
  borderRadius: borderRadius.md 
}}>
  <Text style={{ ...typography.h1, color: colors.onSurface }}>
    Hello World
  </Text>
</View>
```

### Available tokens:

- **colors**: All color definitions from your design system
- **spacing**: xs, sm, md, lg, xl, xxl, xxxl, xxxxl (4px to 64px)
- **typography**: h1-h5, body, bodyLarge, bodySmall, label, caption, overline
- **borderRadius**: xs, sm, md, lg, xl, xxl, full
- **shadows**: none, xs, sm, md, lg, xl
- **layout**: Common layout constants (maxWidth, containerPadding, etc.)

## 2. Using Global Styles

Import and use predefined styles:

```typescript
import { globalStyles } from './styles/global.styles';

<View style={globalStyles.container}>
  <Text style={globalStyles.h1}>Title</Text>
  <Text style={globalStyles.textSecondary}>Description</Text>
  
  <View style={[globalStyles.card, globalStyles.shadow_md]}>
    <Text style={globalStyles.textPrimary}>Card content</Text>
  </View>
</View>
```

### Common global styles:

**Layout:**
- `container`, `containerPadded`, `centerContent`
- `row`, `rowSpaceBetween`, `column`

**Surfaces:**
- `surface`, `surfaceElevated`, `card`, `cardInteractive`

**Typography:**
- `h1`, `h2`, `h3`, `h4`
- `textPrimary`, `textSecondary`, `textError`
- `label`, `labelSecondary`, `overline`

**Buttons:**
- `button`, `buttonPrimary`, `buttonSecondary`, `buttonOutline`, `buttonText`

**Spacing utilities:**
- Margin: `mt_lg`, `mb_xl`, `mx_md`, `my_sm`
- Padding: `p_lg`, `px_xl`, `py_md`

**Border utilities:**
- `rounded_sm`, `rounded_md`, `rounded_lg`, `rounded_full`

**Shadow utilities:**
- `shadow_sm`, `shadow_md`, `shadow_lg`

## 3. Using Theme Context (Recommended for Dynamic Theming)

For components that need access to the theme (especially for future dark mode support):

```typescript
import { useTheme } from './contexts/ThemeContext';

function MyComponent() {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <View style={{ backgroundColor: theme.colors.surface }}>
      <Text style={{ 
        ...theme.typography.h1, 
        color: theme.colors.onSurface 
      }}>
        Hello World
      </Text>
    </View>
  );
}
```

## 4. Combining Styles

You can combine global styles with custom styles using arrays:

```typescript
import { globalStyles } from './styles/global.styles';
import { StyleSheet } from 'react-native';

const customStyles = StyleSheet.create({
  customCard: {
    width: 300,
    height: 200,
  },
});

<View style={[globalStyles.card, customStyles.customCard, globalStyles.shadow_md]}>
  <Text style={globalStyles.h2}>Custom Card</Text>
</View>
```

## 5. Creating Component-Specific Styles

For component-specific styles, create a separate file and use the theme tokens:

```javascript
// MyComponent.styles.js
import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from './theme';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    ...shadows.md,
  },
  title: {
    ...typography.h2,
    color: colors.onSurface,
    marginBottom: spacing.md,
  },
  // ... more styles
});
```

## 6. Example: Complete Component

```typescript
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import { globalStyles } from '../styles/global.styles';
import { StyleSheet } from 'react-native';

export function ExampleCard({ title, description, onPress }) {
  const { theme } = useTheme();
  
  return (
    <TouchableOpacity 
      style={[globalStyles.card, localStyles.card]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={globalStyles.h3}>{title}</Text>
      <Text style={[globalStyles.textSecondary, globalStyles.mt_sm]}>
        {description}
      </Text>
      <View style={[globalStyles.row, globalStyles.mt_lg]}>
        <View style={[globalStyles.buttonPrimary, { padding: theme.spacing.md }]}>
          <Text style={{ color: theme.colors.onPrimary }}>Action</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const localStyles = StyleSheet.create({
  card: {
    minHeight: 200,
  },
});
```

## Benefits

✅ **Consistency** - Unified design language across the app
✅ **Maintainability** - Change once, update everywhere
✅ **Type safety** - TypeScript support for theme values
✅ **Performance** - Optimized StyleSheet creation
✅ **Scalability** - Easy to add dark mode or other themes
✅ **Developer experience** - Autocomplete and better readability

## Migration Tips

When refactoring existing components:

1. Replace hardcoded values with theme tokens
2. Use global styles for common patterns
3. Keep component-specific styles in separate files
4. Use `useTheme()` hook for dynamic theming needs

Example:
```typescript
// Before
<View style={{ padding: 16, borderRadius: 8 }}>

// After
<View style={{ padding: spacing.lg, borderRadius: borderRadius.sm }}>

// Or with global styles
<View style={[globalStyles.p_lg, globalStyles.rounded_sm]}>
```
