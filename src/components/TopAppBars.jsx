import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import { styles } from '../styles/TopAppBars.styles';

export default function TopAppBars() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Top App Bars</Text>
        <Text style={styles.sectionDesc}>
          The editorial anchor of every screen. We utilize transparency and glassmorphism to keep the focus on the content canvas below.
        </Text>
      </View>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        {/* Small Center Aligned */}
        <View style={styles.card}>
          <View style={styles.preview}>
            <View style={styles.centerBar}>
              <MaterialIcons name="menu" size={24} color={colors.slate400} />
              <Text style={styles.barTitle}>Dashboard</Text>
              <MaterialIcons name="account-circle" size={24} color={colors.slate400} />
            </View>
            <View style={styles.contentLines}>
              <View style={[styles.line, { width: '50%' }]} />
              <View style={[styles.line, { width: '75%' }]} />
            </View>
          </View>
          <Text style={styles.cardLabel}>SMALL CENTER ALIGNED</Text>
        </View>
        {/* Large Editorial Header */}
        <View style={styles.card}>
          <View style={styles.preview}>
            <View style={styles.editorialHeader}>
              <Text style={styles.editorialTitle}>Archive</Text>
              <Text style={styles.editorialSubtitle}>24 ITEMS SAVED</Text>
            </View>
            <View style={styles.filterButton}>
              <MaterialIcons name="filter-list" size={16} color={colors.onSurface} />
            </View>
          </View>
          <Text style={styles.cardLabel}>LARGE SUB-PAGE HEADER</Text>
        </View>
      </View>
    </View>
  );
}
