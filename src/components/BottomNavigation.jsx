import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme';
import { styles } from '../styles/BottomNavigation.styles';

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
