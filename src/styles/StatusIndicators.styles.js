import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from './theme';

// Status indicator variants configuration
export const statusVariants = {
  live: {
    backgroundColor: '#b7eaff',
    dotColor: colors.primary,
    textColor: '#004e60',
  },
  pending: {
    backgroundColor: colors.surfaceContainerHighest,
    dotColor: colors.outline,
    textColor: colors.onSurface,
  },
  creative: {
    backgroundColor: '#ecdcff',
    dotColor: colors.secondary,
    textColor: '#5e00c1',
  },
  processing: {
    backgroundColor: '#ffddb1',
    dotColor: colors.tertiary,
    textColor: colors.onTertiaryContainer,
  },
};

// Base styles
export const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xxxl,
  },
  sectionMobile: {
    marginBottom: spacing.xl,
  },
  header: {
    marginBottom: spacing.xxl,
  },
  headerMobile: {
    marginBottom: spacing.lg,
  },
  sectionLabel: {
    fontSize: typography.overline.fontSize,
    fontWeight: 'bold',
    letterSpacing: typography.overline.letterSpacing,
    textTransform: 'uppercase',
    lineHeight: typography.overline.lineHeight,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    fontSize: typography.h1.fontSize,
    fontWeight: 'bold',
    letterSpacing: typography.h1.letterSpacing,
    lineHeight: typography.h1.lineHeight,
    color: colors.onSurface,
    marginBottom: spacing.lg,
  },
  sectionTitleMobile: {
    fontSize: typography.h3.fontSize,
    fontWeight: '600',
    letterSpacing: typography.h3.letterSpacing,
    lineHeight: typography.h3.lineHeight,
    marginBottom: spacing.md,
  },
  sectionDesc: {
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    letterSpacing: typography.body.letterSpacing,
    color: colors.outline,
    maxWidth: 600,
  },
  container: {
    backgroundColor: colors.surfaceContainerLow,
    padding: spacing.xxxl,
    borderRadius: borderRadius.lg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.lg,
    marginBottom: spacing.xxxl,
  },
  containerMobile: {
    padding: spacing.lg,
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  // Base badge style
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs + 2,
    borderRadius: borderRadius.full,
    gap: spacing.sm,
  },
  // Base dot style
  dot: {
    width: 8,
    height: 8,
    borderRadius: borderRadius.full,
  },
  // Base badge text style
  badgeText: {
    fontSize: typography.labelSmall.fontSize,
    fontWeight: 'bold',
    letterSpacing: typography.labelSmall.letterSpacing,
    lineHeight: typography.labelSmall.lineHeight,
  },
});

// Helper function to get variant styles
export const getVariantStyles = (variant) => {
  const variantConfig = statusVariants[variant];
  if (!variantConfig) return {};
  
  return {
    badge: { backgroundColor: variantConfig.backgroundColor },
    dot: { backgroundColor: variantConfig.dotColor },
    text: { color: variantConfig.textColor },
  };
};

