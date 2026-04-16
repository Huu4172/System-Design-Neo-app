import React from 'react';
import { View, Text, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../../useResponsive';
import { colors } from '../../theme';
import { styles } from '../../styles/StatusIndicators.styles';

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
