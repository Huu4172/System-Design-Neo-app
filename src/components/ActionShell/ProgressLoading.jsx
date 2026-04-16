import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import { styles } from '../styles/ProgressLoading.styles';

export default function ProgressLoading() {
  const { isMobile } = useResponsive();
  const spinAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  const bounce1 = useRef(new Animated.Value(0)).current;
  const bounce2 = useRef(new Animated.Value(0)).current;
  const bounce3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
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

  const slideX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-96, 250],
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
            <Animated.View style={[styles.progressIndeterminate, { transform: [{ translateX: slideX }] }]} />
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
