import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

const tabs = ['Overview', 'Details', 'Activity'];

export default function ContextualNavigation() {
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <MaterialIcons name="explore" size={14} color={colors.tertiary} />
          <Text style={styles.badgeText}>CONTEXTUAL FLOW</Text>
        </View>
      </View>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>In-Page Movement</Text>
        <Text style={styles.sectionDesc}>
          Navigation doesn't just happen at the edges. Progressive indicators, back-actions, and tabbed switches allow users to drill into data without losing their conceptual orientation.
        </Text>
      </View>
      <View style={styles.card}>
        {/* Back Action */}
        <View style={styles.backAction}>
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={22} color={colors.onSurface} />
          </TouchableOpacity>
          <View>
            <Text style={styles.backLabel}>SETTINGS</Text>
            <Text style={styles.backTitle}>Privacy Controls</Text>
          </View>
        </View>
        {/* Multi-step Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.stepLabel}>STEP 02 OF 04</Text>
            <Text style={styles.stepDesc}>Review Identity</Text>
          </View>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={[colors.primary, colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
        </View>
        {/* Tabbed View */}
        <View style={styles.tabBar}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 40 },
  sectionMobile: { marginBottom: 24 },
  headerRow: { marginBottom: 16 },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(129,86,0,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: colors.tertiary, letterSpacing: 1 },
  header: { marginBottom: 32 },
  headerMobile: { marginBottom: 20 },
  sectionTitle: { fontSize: 32, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 26, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 600 },
  card: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 16,
    gap: 28,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.02,
    shadowRadius: 20,
    elevation: 2,
  },
  backAction: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surfaceContainerLow,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backLabel: { fontSize: 10, color: colors.slate400, letterSpacing: 2 },
  backTitle: { fontSize: 16, fontWeight: 'bold', color: colors.onSurface },
  progressSection: { gap: 10 },
  progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' },
  stepLabel: { fontSize: 11, fontWeight: 'bold', color: colors.cyan600 },
  stepDesc: { fontSize: 12, color: colors.slate400 },
  progressTrack: { height: 6, backgroundColor: colors.surfaceContainer, borderRadius: 3, overflow: 'hidden' },
  progressFill: { height: 6, width: '50%', borderRadius: 3 },
  tabBar: { flexDirection: 'row', gap: 24, borderBottomWidth: 1, borderBottomColor: colors.surfaceContainerHigh },
  tab: { paddingBottom: 12 },
  tabActive: { borderBottomWidth: 2, borderBottomColor: colors.cyan600 },
  tabText: { fontSize: 14, fontWeight: '600', color: colors.slate400 },
  tabTextActive: { color: colors.cyan600 },
});
