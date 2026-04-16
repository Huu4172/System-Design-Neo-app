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
    alignItems: 'center',
    marginBottom: 40,
  },
  containerMobile: {
    padding: 20,
    marginBottom: 24,
  },
  segmentedControl: {
    backgroundColor: colors.surfaceContainer,
    padding: 4,
    borderRadius: 100,
    flexDirection: 'row',
    gap: 4,
  },
  segment: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 100,
  },
  segmentMobile: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  segmentActive: {
    backgroundColor: colors.surfaceContainerLowest,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: {
    color: colors.outline,
    fontSize: 14,
    fontWeight: 'bold',
  },
  segmentTextActive: {
    color: colors.onSurface,
  },
});

