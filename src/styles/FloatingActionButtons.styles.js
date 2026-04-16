import { StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius, shadows } from './theme';

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
    ...typography.overline,
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  sectionTitle: {
    ...typography.h1,
    color: colors.onSurface,
    marginBottom: spacing.lg,
  },
  sectionTitleMobile: {
    ...typography.h3,
    marginBottom: spacing.md,
  },
  sectionDesc: {
    ...typography.body,
    color: colors.outline,
    maxWidth: 600,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.xxxl,
  },
  gridMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    padding: spacing.xxl,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xl,
    minWidth: 200,
  },
  cardMobile: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
  cardLabel: {
    ...typography.overline,
    color: colors.outline,
  },
  fabStandard: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.xxl,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    ...shadows.lg,
  },
  fabSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.sm,
  },
  fabExtended: {
    height: 56,
    paddingHorizontal: spacing.xxl,
    borderRadius: borderRadius.xxl,
    backgroundColor: colors.inverseSurface,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    ...shadows.xl,
  },
  fabExtendedText: {
    ...typography.label,
    color: colors.inverseOnSurface,
  },
});

