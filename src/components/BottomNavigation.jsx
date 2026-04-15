import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme';

export default function BottomNavigation() {
  const [activeTab, setActiveTab] = useState('magic');

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab('grid')}
        activeOpacity={0.6}
      >
        <MaterialIcons
          name="grid-view"
          size={28}
          color={activeTab === 'grid' ? colors.cyan600 : colors.slate400}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.navItem, styles.navItemCenter]}
        onPress={() => setActiveTab('magic')}
        activeOpacity={0.6}
      >
        <View style={styles.centerButton}>
          <MaterialCommunityIcons
            name="auto-fix"
            size={28}
            color={colors.cyan600}
          />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab('layers')}
        activeOpacity={0.6}
      >
        <MaterialIcons
          name="layers"
          size={28}
          color={activeTab === 'layers' ? colors.cyan600 : colors.slate400}
        />
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => setActiveTab('settings')}
        activeOpacity={0.6}
      >
        <MaterialIcons
          name="settings"
          size={28}
          color={activeTab === 'settings' ? colors.cyan600 : colors.slate400}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
