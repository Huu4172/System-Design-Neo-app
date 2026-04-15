import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

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

const styles = StyleSheet.create({
  section: { marginBottom: 40 },
  sectionMobile: { marginBottom: 24 },
  header: { marginBottom: 32 },
  headerMobile: { marginBottom: 20 },
  sectionTitle: { fontSize: 32, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 26, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 600 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  gridMobile: { flexDirection: 'column' },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 4,
    borderRadius: 16,
    gap: 12,
    flex: 1,
    minWidth: 250,
  },
  preview: {
    height: 180,
    borderRadius: 12,
    backgroundColor: colors.surface,
    overflow: 'hidden',
  },
  centerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 56,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  barTitle: { fontWeight: 'bold', fontSize: 16, color: colors.onSurface },
  contentLines: { padding: 20, gap: 8 },
  line: { height: 8, backgroundColor: colors.surfaceContainer, borderRadius: 4 },
  editorialHeader: { padding: 24, paddingTop: 40 },
  editorialTitle: { fontSize: 34, fontWeight: 'bold', color: colors.onSurface },
  editorialSubtitle: { fontSize: 11, color: colors.cyan600, letterSpacing: 1, marginTop: 4 },
  filterButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: { fontSize: 11, letterSpacing: 2, color: colors.slate400, fontWeight: 'bold', paddingHorizontal: 12, paddingBottom: 12 },
});
