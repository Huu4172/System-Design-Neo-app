import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function SegmentedControls() {
  const { isMobile } = useResponsive();
  const [selected, setSelected] = useState('daily');

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 04</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Segmented Controls</Text>
        <Text style={styles.sectionDesc}>
          Soft tonal nesting for view switching and data filtering.
        </Text>
      </View>
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'daily' && styles.segmentActive]}
            onPress={() => setSelected('daily')}
          >
            <Text style={[styles.segmentText, selected === 'daily' && styles.segmentTextActive]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'weekly' && styles.segmentActive]}
            onPress={() => setSelected('weekly')}
          >
            <Text style={[styles.segmentText, selected === 'weekly' && styles.segmentTextActive]}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'monthly' && styles.segmentActive]}
            onPress={() => setSelected('monthly')}
          >
            <Text style={[styles.segmentText, selected === 'monthly' && styles.segmentTextActive]}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  sectionMobile: {
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  headerMobile: {
    marginBottom: 20,
  },
  sectionLabel: {
    color: colors.primary,
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: 16,
    letterSpacing: -1,
  },
  sectionTitleMobile: {
    fontSize: 28,
    marginBottom: 10,
  },
  sectionDesc: {
    color: colors.outline,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 600,
  },
  container: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 48,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 40,
  },
  containerMobile: {
    padding: 20,
    marginBottom: 24,
  },
  segmentedControl: {
    backgroundColor: colors.surfaceContainer,
    padding: 4,
    borderRadius: 100,
    flexDirection: 'row',
    gap: 4,
  },
  segment: {
    paddingHorizontal: 32,
    paddingVertical: 10,
    borderRadius: 100,
  },
  segmentMobile: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  segmentActive: {
    backgroundColor: colors.surfaceContainerLowest,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: {
    color: colors.outline,
    fontSize: 14,
    fontWeight: 'bold',
  },
  segmentTextActive: {
    color: colors.onSurface,
  },
});
