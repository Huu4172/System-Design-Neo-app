import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import FloatingActionButtons from '../components/ActionShell/FloatingActionButtons';
import StatusIndicators from '../components/ActionShell/StatusIndicators';
import ControlStates from '../components/ActionShell/ControlStates';
import SegmentedControls from '../components/ActionShell/SegmentedControls';
import ProgressLoading from '../components/ActionShell/ProgressLoading';
import OverlaysModals from '../components/ActionShell/OverlaysModals';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function ActionShellPage() {
  const { isMobile } = useResponsive();

  return (
    <>
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View style={styles.headerRow}>
          <View style={styles.badge}>
            <MaterialIcons name="dashboard" size={14} color="#270057" />
            <Text style={styles.badgeText}>ACTION SHELL</Text>
          </View>
        </View>
        <View style={[styles.header, isMobile && styles.headerMobile]}>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Action Shell</Text>
          <Text style={styles.sectionDesc}>
            The core interface canvas for expressive controls, status surfaces, segmented flows, primary actions, and focused overlays.
          </Text>
        </View>
      </View>
      <FloatingActionButtons />
      <StatusIndicators />
      <ControlStates />
      <SegmentedControls />
      <ProgressLoading />
      <OverlaysModals />
    </>
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
    backgroundColor: '#ecdcff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: '#270057', letterSpacing: 1 },
  header: { marginBottom: 16 },
  headerMobile: { marginBottom: 8 },
  sectionTitle: { fontSize: 40, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 30, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 640 },
});