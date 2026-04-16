import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../contexts/ThemeContext';
import { styles } from '../../styles/FloatingActionButtons.styles';

type IconLibrary = 'MaterialIcons' | 'MaterialCommunityIcons';

interface BaseFABProps {
  onPress?: () => void;
  iconName: string;
  iconLibrary?: IconLibrary;
}

interface StandardFABProps extends BaseFABProps {
  variant: 'standard';
}

interface SmallFABProps extends BaseFABProps {
  variant: 'small';
}

interface ExtendedFABProps extends BaseFABProps {
  variant: 'extended';
  text: string;
}

type FABButtonProps = StandardFABProps | SmallFABProps | ExtendedFABProps;

/**
 * Reusable Floating Action Button component
 * Supports three variants: standard, small, and extended
 * Uses theme context for dynamic theming support
 */
export default function FABButton(props: FABButtonProps) {
  const { theme } = useTheme();
  const { variant, onPress, iconName, iconLibrary = 'MaterialIcons' } = props;

  // Select icon component
  const IconComponent = iconLibrary === 'MaterialCommunityIcons' 
    ? MaterialCommunityIcons 
    : MaterialIcons;

  // Standard FAB with gradient
  if (variant === 'standard') {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <LinearGradient
          colors={[theme.colors.primary, theme.colors.primaryContainer]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.fabStandard}
        >
          <IconComponent name={iconName as any} size={24} color={theme.colors.onPrimary} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  // Small FAB
  if (variant === 'small') {
    return (
      <TouchableOpacity style={styles.fabSmall} activeOpacity={0.8} onPress={onPress}>
        <IconComponent 
          name={iconName as any} 
          size={20} 
          color={theme.colors.onSecondaryContainer} 
        />
      </TouchableOpacity>
    );
  }

  // Extended FAB with text
  if (variant === 'extended') {
    const { text } = props;
    return (
      <TouchableOpacity style={styles.fabExtended} activeOpacity={0.8} onPress={onPress}>
        <IconComponent 
          name={iconName as any} 
          size={24} 
          color={theme.colors.inverseOnSurface} 
        />
        <Text style={styles.fabExtendedText}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return null;
}
