import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function Header() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.header, isMobile && styles.headerMobile]}>
      <View style={styles.leftSection}>
        <MaterialIcons name="menu" size={24} color={colors.cyan600} />
        <Text style={[styles.title, isMobile && styles.titleMobile]}>Action Shell</Text>
      </View>
      <View style={styles.rightSection}>
        {!isMobile && (
          <>
            <Text style={styles.navItem}>Library</Text>
            <Text style={styles.navItemInactive}>Components</Text>
          </>
        )}
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjhGZSSfpMZPGSXbIoulaCMOLInOU_nL_HQkGqZmvxv3sYcyz4VKtBjCVDZT1n3ZmqfIQFfU1pRhZgmHbhZA8VGKEINZFKIIdcd-LYgbJR7mhiRRnq1F4ev_Gw4ebz-I6cpxAHpY33F1xk8-YPbjDsrdcwm3YYi9b7r6rpxL8XOKsZ0GS1kzRQdV-HwEQP9LLgFaVuUclDyW97w9EnL7lNXFie9YrN6CiAXidZzNRkG-HgGG_KPrxQxdsO5tKCeygKyuqgCbjoB4z' }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    height: 80,
    backgroundColor: colors.slate50,
    shadowColor: colors.cyan600,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  headerMobile: {
    paddingHorizontal: 16,
    height: 56,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.onSurface,
    letterSpacing: -0.5,
  },
  titleMobile: {
    fontSize: 18,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  navItem: {
    color: colors.cyan600,
    fontWeight: 'bold',
    fontSize: 16,
  },
  navItemInactive: {
    color: colors.slate500,
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
