import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

const navItems = [
  { icon: 'dashboard', label: 'Library' },
  { icon: 'widgets', label: 'Components' },
];

export default function Header() {
  const { isMobile } = useResponsive();
  const [activeItem, setActiveItem] = useState('Library');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavPress = (label) => {
    setActiveItem(label);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <View style={styles.leftSection}>
          <TouchableOpacity
            style={[styles.menuButton, isMobile && isMobileMenuOpen && styles.menuButtonActive]}
            onPress={() => isMobile && setIsMobileMenuOpen((current) => !current)}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name={isMobile && isMobileMenuOpen ? 'close' : 'menu'}
              size={24}
              color={colors.cyan600}
            />
          </TouchableOpacity>
          <Text style={[styles.title, isMobile && styles.titleMobile]}>Action Shell</Text>
          {!isMobile && (
            <View style={styles.navRow}>
              {navItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <TouchableOpacity
                    key={item.label}
                    style={[styles.navItem, isActive && styles.navItemActive]}
                    onPress={() => handleNavPress(item.label)}
                    activeOpacity={0.7}
                  >
                    <MaterialIcons
                      name={item.icon}
                      size={18}
                      color={isActive ? colors.cyan600 : colors.slate400}
                    />
                    <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
        <View style={styles.rightSection}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjhGZSSfpMZPGSXbIoulaCMOLInOU_nL_HQkGqZmvxv3sYcyz4VKtBjCVDZT1n3ZmqfIQFfU1pRhZgmHbhZA8VGKEINZFKIIdcd-LYgbJR7mhiRRnq1F4ev_Gw4ebz-I6cpxAHpY33F1xk8-YPbjDsrdcwm3YYi9b7r6rpxL8XOKsZ0GS1kzRQdV-HwEQP9LLgFaVuUclDyW97w9EnL7lNXFie9YrN6CiAXidZzNRkG-HgGG_KPrxQxdsO5tKCeygKyuqgCbjoB4z' }}
            style={styles.avatar}
          />
        </View>
      </View>
      {isMobile && isMobileMenuOpen && (
        <View style={styles.mobileDrawer}>
          <View style={styles.profileSection}>
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUjhGZSSfpMZPGSXbIoulaCMOLInOU_nL_HQkGqZmvxv3sYcyz4VKtBjCVDZT1n3ZmqfIQFfU1pRhZgmHbhZA8VGKEINZFKIIdcd-LYgbJR7mhiRRnq1F4ev_Gw4ebz-I6cpxAHpY33F1xk8-YPbjDsrdcwm3YYi9b7r6rpxL8XOKsZ0GS1kzRQdV-HwEQP9LLgFaVuUclDyW97w9EnL7lNXFie9YrN6CiAXidZzNRkG-HgGG_KPrxQxdsO5tKCeygKyuqgCbjoB4z' }}
              style={styles.drawerAvatar}
            />
            <Text style={styles.profileName}>Zen Architect</Text>
            <View style={styles.profileMeta}>
              <Text style={styles.proBadge}>Pro Plan</Text>
              <Text style={styles.onlineText}>ONLINE</Text>
            </View>
          </View>
          <View style={styles.mobileNavList}>
            {navItems.map((item) => {
              const isActive = activeItem === item.label;

              return (
                <TouchableOpacity
                  key={item.label}
                  style={[styles.mobileNavItem, isActive && styles.mobileNavItemActive]}
                  onPress={() => handleNavPress(item.label)}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={22}
                    color={isActive ? colors.cyan600 : colors.slate400}
                  />
                  <Text style={[styles.mobileNavLabel, isActive && styles.mobileNavLabelActive]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.mobileDrawerFooter}>
            <TouchableOpacity style={styles.footerItem} activeOpacity={0.7}>
              <MaterialIcons name="settings" size={20} color={colors.slate400} />
              <Text style={styles.footerLabel}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerItem} activeOpacity={0.7}>
              <MaterialIcons name="help" size={20} color={colors.slate400} />
              <Text style={styles.footerLabel}>Support</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: colors.surface,
  },
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
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuButtonActive: {
    backgroundColor: colors.surfaceContainer,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
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
    gap: 12,
    marginLeft: 16,
  },
  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 8,
    flexShrink: 1,
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: colors.surfaceContainer,
  },
  navItemActive: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  navLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.slate400,
  },
  navLabelActive: {
    color: colors.onSurface,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceContainerHighest,
  },
  mobileDrawer: {
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 12,
    backgroundColor: colors.surfaceContainerLowest,
    borderRadius: 24,
    padding: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  profileSection: {
    marginBottom: 20,
  },
  drawerAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 12,
    backgroundColor: colors.surfaceContainerHighest,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: 4,
  },
  profileMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  proBadge: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.cyan600,
    backgroundColor: '#e0f7fa',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
  },
  onlineText: {
    fontSize: 9,
    color: colors.slate400,
    letterSpacing: 2,
  },
  mobileNavList: {
    gap: 4,
  },
  mobileNavItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16,
    borderRadius: 12,
  },
  mobileNavItemActive: {
    backgroundColor: colors.white,
  },
  mobileNavLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.slate400,
  },
  mobileNavLabelActive: {
    color: colors.onSurface,
    fontWeight: 'bold',
  },
  mobileDrawerFooter: {
    marginTop: 24,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: colors.surfaceContainerHigh,
    gap: 8,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  footerLabel: {
    fontSize: 14,
    color: colors.slate400,
  },
});
