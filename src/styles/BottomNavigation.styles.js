import { StyleSheet } from 'react-native';
import { colors } from './theme';

export const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 16,
    backgroundColor: colors.slate50,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    shadowColor: colors.cyan600,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.04,
    shadowRadius: 40,
    elevation: 10,
  },
  navItem: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemCenter: {
    width: 56,
    height: 56,
  },
  centerButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.cyan600,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
});

