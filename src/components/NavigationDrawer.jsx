import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import { styles } from '../styles/NavigationDrawer.styles';

const navItems = [
  { icon: 'person', label: 'Personal', active: true },
  { icon: 'business-center', label: 'Work', active: false },
  { icon: 'palette', label: 'Creative', active: false },
];

export default function NavigationDrawer() {
  const { isMobile } = useResponsive();
  const [activeItem, setActiveItem] = useState('Personal');

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <MaterialIcons name="layers" size={14} color="#270057" />
          <Text style={styles.badgeText}>THE SHELL</Text>
        </View>
      </View>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Navigation Drawer</Text>
        <Text style={styles.sectionDesc}>
          Used for broad ecosystem switching and high-level identity management. The drawer leverages deep tonal shifts rather than lines to define boundaries.
        </Text>
      </View>
      <View style={styles.drawer}>
        <View style={styles.profile}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD220b1diRy9z4TQVcjZBvI_T-Jb1cqi5TJnbD8zoRl-skDWMtPfnFEzjaBHNRwDSGwKMRA-Dqky0xKfrrVCXGidvqfikGtaN1STUh1xElWKwAP3VarsIVMqW8EcoNntQDLHbgwIvmH5qoePvu7cfF3e0YI2RPNPEFitvKuCHxOlL9khO4ScRrvWLYT8uRnbCeFmGxQ7qIZJPM7DR7kbQlvyu3aFYccT5TFNWd9o4dzkm9XmPU1JYNFZC8BaiXtSG7xfC21JiBdmg' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Zen Architect</Text>
          <View style={styles.profileMeta}>
            <Text style={styles.proBadge}>Pro Plan</Text>
            <Text style={styles.onlineText}>ONLINE</Text>
          </View>
        </View>
        <View style={styles.navItems}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.label}
              style={[styles.navItem, activeItem === item.label && styles.navItemActive]}
              onPress={() => setActiveItem(item.label)}
              activeOpacity={0.7}
            >
              <MaterialIcons
                name={item.icon}
                size={24}
                color={activeItem === item.label ? colors.cyan600 : colors.slate400}
              />
              <Text style={[styles.navLabel, activeItem === item.label && styles.navLabelActive]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.drawerFooter}>
          <TouchableOpacity style={styles.footerItem}>
            <MaterialIcons name="settings" size={20} color={colors.slate400} />
            <Text style={styles.footerLabel}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerItem}>
            <MaterialIcons name="help" size={20} color={colors.slate400} />
            <Text style={styles.footerLabel}>Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
