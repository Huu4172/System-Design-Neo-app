import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from './theme';

/**
 * Global styles that can be reused across components
 * Use these as a foundation and combine with component-specific styles
 */
export const globalStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  containerPadded: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.xl,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Layout styles
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
  },
  wrap: {
    flexWrap: 'wrap',
  },
  
  // Surface/Card styles
  surface: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.lg,
  },
  surfaceElevated: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadows.md,
  },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadows.sm,
  },
  cardInteractive: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadows.sm,
  },
  
  // Text styles
  textPrimary: {
    color: colors.onSurface,
    ...typography.body,
  },
  textSecondary: {
    color: colors.outline,
    ...typography.body,
  },
  textError: {
    color: colors.error,
    ...typography.body,
  },
  
  // Heading styles
  h1: {
    ...typography.h1,
    color: colors.onSurface,
  },
  h2: {
    ...typography.h2,
    color: colors.onSurface,
  },
  h3: {
    ...typography.h3,
    color: colors.onSurface,
  },
  h4: {
    ...typography.h4,
    color: colors.onSurface,
  },
  
  // Label styles
  label: {
    ...typography.label,
    color: colors.onSurface,
  },
  labelSecondary: {
    ...typography.labelSmall,
    color: colors.outline,
  },
  overline: {
    ...typography.overline,
    color: colors.outline,
  },
  
  // Button base styles
  button: {
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    ...shadows.sm,
  },
  buttonSecondary: {
    backgroundColor: colors.secondaryContainer,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.outline,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
  },
  buttonText: {
    backgroundColor: 'transparent',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  
  // Input styles
  input: {
    backgroundColor: colors.surfaceContainerLow,
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.outline,
    padding: spacing.lg,
    ...typography.body,
    color: colors.onSurface,
  },
  inputFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  
  // Spacing utilities
  mt_xs: { marginTop: spacing.xs },
  mt_sm: { marginTop: spacing.sm },
  mt_md: { marginTop: spacing.md },
  mt_lg: { marginTop: spacing.lg },
  mt_xl: { marginTop: spacing.xl },
  mt_xxl: { marginTop: spacing.xxl },
  
  mb_xs: { marginBottom: spacing.xs },
  mb_sm: { marginBottom: spacing.sm },
  mb_md: { marginBottom: spacing.md },
  mb_lg: { marginBottom: spacing.lg },
  mb_xl: { marginBottom: spacing.xl },
  mb_xxl: { marginBottom: spacing.xxl },
  
  mx_xs: { marginHorizontal: spacing.xs },
  mx_sm: { marginHorizontal: spacing.sm },
  mx_md: { marginHorizontal: spacing.md },
  mx_lg: { marginHorizontal: spacing.lg },
  mx_xl: { marginHorizontal: spacing.xl },
  
  my_xs: { marginVertical: spacing.xs },
  my_sm: { marginVertical: spacing.sm },
  my_md: { marginVertical: spacing.md },
  my_lg: { marginVertical: spacing.lg },
  my_xl: { marginVertical: spacing.xl },
  
  p_xs: { padding: spacing.xs },
  p_sm: { padding: spacing.sm },
  p_md: { padding: spacing.md },
  p_lg: { padding: spacing.lg },
  p_xl: { padding: spacing.xl },
  p_xxl: { padding: spacing.xxl },
  
  px_xs: { paddingHorizontal: spacing.xs },
  px_sm: { paddingHorizontal: spacing.sm },
  px_md: { paddingHorizontal: spacing.md },
  px_lg: { paddingHorizontal: spacing.lg },
  px_xl: { paddingHorizontal: spacing.xl },
  
  py_xs: { paddingVertical: spacing.xs },
  py_sm: { paddingVertical: spacing.sm },
  py_md: { paddingVertical: spacing.md },
  py_lg: { paddingVertical: spacing.lg },
  py_xl: { paddingVertical: spacing.xl },
  
  // Border utilities
  rounded_xs: { borderRadius: borderRadius.xs },
  rounded_sm: { borderRadius: borderRadius.sm },
  rounded_md: { borderRadius: borderRadius.md },
  rounded_lg: { borderRadius: borderRadius.lg },
  rounded_xl: { borderRadius: borderRadius.xl },
  rounded_full: { borderRadius: borderRadius.full },
  
  // Shadow utilities
  shadow_sm: shadows.sm,
  shadow_md: shadows.md,
  shadow_lg: shadows.lg,
  
  // Divider
  divider: {
    height: 1,
    backgroundColor: colors.outlineVariant,
    marginVertical: spacing.lg,
  },
  dividerVertical: {
    width: 1,
    backgroundColor: colors.outlineVariant,
    marginHorizontal: spacing.lg,
  },
  
  // Common element styles
  badge: {
    backgroundColor: colors.errorContainer,
    borderRadius: borderRadius.full,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chip: {
    backgroundColor: colors.surfaceContainerHigh,
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLarge: {
    width: 64,
    height: 64,
    borderRadius: borderRadius.full,
    backgroundColor: colors.primaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
