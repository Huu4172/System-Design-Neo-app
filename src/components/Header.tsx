import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import { styles } from '../styles/Header.styles';

const navItems = [
  { icon: 'chat-bubble', label: 'Chat' },
  { icon: 'inventory-2', label: 'Design Token' },
  { icon: 'dashboard', label: 'Action Shell' },
  { icon: 'route', label: 'Navigation' },
];

export default function Header({ activePage = 'Action Shell', onNavigate = () => {} }) {
  const { isMobile } = useResponsive();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(activePage);

  const handleNavPress = (label) => {
    setCurrentPage(label);
    onNavigate(label);
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

          <Text style={[styles.title, isMobile && styles.titleMobile]}>{currentPage}</Text>
          {!isMobile && (
            <View style={styles.navRow}>
              {navItems.map((item) => {
                const isActive = currentPage === item.label;

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
          <View style={styles.mobileNavList}>
            {navItems.map((item) => {
              const isActive = currentPage === item.label;

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
