import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NavigationDrawer from '../components/Navigation/NavigationDrawer';
import TopAppBars from '../components/Navigation/TopAppBars';
import ContextualNavigation from '../components/Navigation/ContextualNavigation';
import useResponsive from '../useResponsive';
import { colors } from '../styles/theme';

export default function NavigationPage() {
  const { isMobile } = useResponsive();

  return (
    <>
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View style={styles.headerRow}>
          <View style={styles.badge}>
            <MaterialIcons name="route" size={14} color={colors.cyan600} />
            <Text style={styles.badgeText}>NAVIGATION</Text>
          </View>
        </View>
        <View style={[styles.header, isMobile && styles.headerMobile]}>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Navigation</Text>
          <Text style={styles.sectionDesc}>
            A focused survey of shell-level, top-level, and in-page movement patterns collected into one destination.
          </Text>
        </View>
      </View>
      <NavigationDrawer />
      <TopAppBars />
      <ContextualNavigation />
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
    backgroundColor: '#e0f7fa',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: { fontSize: 11, fontWeight: 'bold', color: colors.cyan600, letterSpacing: 1 },
  header: { marginBottom: 16 },
  headerMobile: { marginBottom: 8 },
  sectionTitle: { fontSize: 40, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 30, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 15, lineHeight: 22, maxWidth: 640 },
});