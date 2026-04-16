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
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    minWidth: 200,
  },
  cardMobile: {
    padding: 20,
    gap: 16,
  },
  cardLabel: {
    fontSize: 10,
    letterSpacing: 2,
    color: colors.outline,
    fontWeight: 'bold',
  },
  fabStandard: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  fabSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondaryContainer,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  fabExtended: {
    height: 56,
    paddingHorizontal: 32,
    borderRadius: 28,
    backgroundColor: colors.inverseSurface,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 12,
  },
  fabExtendedText: {
    color: colors.inverseOnSurface,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

