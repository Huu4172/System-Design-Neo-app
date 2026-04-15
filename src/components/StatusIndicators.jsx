import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function StatusIndicators() {
  const { isMobile } = useResponsive();
  const pulseAnim = new Animated.Value(1);
  
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 02</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Status Indicators</Text>
        <Text style={styles.sectionDesc}>
          Pill-shaped badges designed for clarity and a technical instrumentation aesthetic.
        </Text>
      </View>
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={[styles.badge, styles.badgeLive]}>
          <Animated.View style={[styles.dot, styles.dotLive, { transform: [{ scale: pulseAnim }] }]} />
          <Text style={styles.badgeTextLive}>LIVE</Text>
        </View>
        
        <View style={[styles.badge, styles.badgePending]}>
          <View style={[styles.dot, styles.dotPending]} />
          <Text style={styles.badgeTextPending}>PENDING</Text>
        </View>
        
        <View style={[styles.badge, styles.badgeCreative]}>
          <View style={[styles.dot, styles.dotCreative]} />
          <Text style={styles.badgeTextCreative}>CREATIVE</Text>
        </View>
        
        <View style={[styles.badge, styles.badgeProcessing]}>
          <MaterialIcons name="sync" size={14} color={colors.onTertiaryContainer} />
          <Text style={styles.badgeTextProcessing}>PROCESSING</Text>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 40,
  },
  containerMobile: {
    padding: 20,
    gap: 10,
    marginBottom: 24,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 8,
  },
  badgeLive: {
    backgroundColor: '#b7eaff',
  },
  badgePending: {
    backgroundColor: colors.surfaceContainerHighest,
  },
  badgeCreative: {
    backgroundColor: '#ecdcff',
  },
  badgeProcessing: {
    backgroundColor: '#ffddb1',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotLive: {
    backgroundColor: colors.primary,
  },
  dotPending: {
    backgroundColor: colors.outline,
  },
  dotCreative: {
    backgroundColor: colors.secondary,
  },
  badgeTextLive: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#004e60',
  },
  badgeTextPending: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.onSurface,
  },
  badgeTextCreative: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#5e00c1',
  },
  badgeTextProcessing: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.onTertiaryContainer,
  },
});
