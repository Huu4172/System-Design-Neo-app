import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function ProgressLoading() {
  const { isMobile } = useResponsive();
  const spinAnim = useRef(new Animated.Value(0)).current;
  const bounce1 = useRef(new Animated.Value(0)).current;
  const bounce2 = useRef(new Animated.Value(0)).current;
  const bounce3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();

    const createBounce = (anim, delay) => {
      return Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, {
            toValue: -10,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      );
    };

    createBounce(bounce1, 0).start();
    createBounce(bounce2, 150).start();
    createBounce(bounce3, 300).start();
  }, []);

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 05</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Progress & Loading</Text>
        <Text style={styles.sectionDesc}>
          Visualizing wait states with zen-like calm and technical precision.
        </Text>
      </View>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={[colors.primary, colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressIndeterminate} />
          </View>
        </View>
        
        <View style={[styles.card, styles.loadingCard, isMobile && styles.cardMobile]}>
          <Animated.View style={[styles.spinner, { transform: [{ rotate: spin }] }]} />
          <View style={styles.bounceDots}>
            <Animated.View style={[styles.dot, { transform: [{ translateY: bounce1 }] }]} />
            <Animated.View style={[styles.dot, { transform: [{ translateY: bounce2 }] }]} />
            <Animated.View style={[styles.dot, { transform: [{ translateY: bounce3 }] }]} />
          </View>
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
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 40,
  },
  gridMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 40,
    borderRadius: 16,
    gap: 40,
    flex: 1,
    minWidth: 300,
  },
  cardMobile: {
    padding: 20,
    gap: 24,
  },
  loadingCard: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 48,
  },
  progressTrack: {
    width: '100%',
    height: 4,
    backgroundColor: colors.surfaceContainerHighest,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '65%',
  },
  progressIndeterminate: {
    height: '100%',
    width: 96,
    backgroundColor: colors.secondary,
    position: 'absolute',
    left: '33%',
  },
  spinner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 4,
    borderColor: colors.primaryContainer,
    borderTopColor: colors.primary,
  },
  bounceDots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
});
