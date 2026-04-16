import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  sectionMobile: {
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  headerMobile: {
    marginBottom: 20,
  },
  sectionLabel: {
    color: colors.primary,
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: 16,
    letterSpacing: -1,
  },
  sectionTitleMobile: {
    fontSize: 28,
    marginBottom: 10,
  },
  sectionDesc: {
    color: colors.outline,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 600,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 40,
  },
  gridMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 40,
    borderRadius: 16,
    gap: 40,
    minWidth: 300,
  },
  cardMobile: {
    padding: 20,
    gap: 24,
  },
  loadingCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 48,
  },
  progressTrack: {
    alignSelf: 'stretch',
    height: 8,
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: 8,
    width: '65%',
    borderRadius: 4,
  },
  progressIndeterminate: {
    height: 8,
    width: 96,
    backgroundColor: colors.secondary,
  },
  spinner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: colors.primaryContainer,
    borderTopColor: colors.primary,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  bounceDots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
});

