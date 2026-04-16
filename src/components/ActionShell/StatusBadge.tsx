import React from 'react';
import { View, Text, Animated } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles, getVariantStyles } from '../../styles/StatusIndicators.styles';

type StatusVariant = 'live' | 'pending' | 'creative' | 'processing';

interface StatusBadgeProps {
  variant: StatusVariant;
  label: string;
  animated?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

/**
 * Reusable status badge component with variant styling
 * @param variant - The status variant (live, pending, creative, processing)
 * @param label - The badge text
 * @param animated - Whether to apply pulse animation (default: false)
 * @param icon - Optional MaterialIcons icon name
 */
export default function StatusBadge({ 
  variant, 
  label, 
  animated = false,
  icon 
}: StatusBadgeProps) {
  const variantStyles = getVariantStyles(variant);
  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  
  React.useEffect(() => {
    if (animated) {
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
    }
  }, [animated]);

  return (
    <View style={[styles.badge, variantStyles.badge]}>
      {icon ? (
        <MaterialIcons name={icon} size={14} color={variantStyles.text.color} />
      ) : (
        animated ? (
          <Animated.View style={[styles.dot, variantStyles.dot, { transform: [{ scale: pulseAnim }] }]} />
        ) : (
          <View style={[styles.dot, variantStyles.dot]} />
        )
      )}
      <Text style={[styles.badgeText, variantStyles.text]}>{label}</Text>
    </View>
  );
}
