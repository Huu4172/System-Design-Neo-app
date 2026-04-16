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
  container: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 48,
    borderRadius: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 40,
  },
  containerMobile: {
    padding: 20,
    gap: 10,
    marginBottom: 24,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 8,
  },
  badgeLive: {
    backgroundColor: '#b7eaff',
  },
  badgePending: {
    backgroundColor: colors.surfaceContainerHighest,
  },
  badgeCreative: {
    backgroundColor: '#ecdcff',
  },
  badgeProcessing: {
    backgroundColor: '#ffddb1',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotLive: {
    backgroundColor: colors.primary,
  },
  dotPending: {
    backgroundColor: colors.outline,
  },
  dotCreative: {
    backgroundColor: colors.secondary,
  },
  badgeTextLive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#004e60',
  },
  badgeTextPending: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.onSurface,
  },
  badgeTextCreative: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5e00c1',
  },
  badgeTextProcessing: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.onTertiaryContainer,
  },
});

