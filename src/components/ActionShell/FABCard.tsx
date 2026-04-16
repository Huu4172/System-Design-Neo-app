import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { globalStyles } from '../../styles/global.styles';
import { styles } from '../../styles/FloatingActionButtons.styles';

interface FABCardProps {
  label: string;
  children: ReactNode;
  isMobile?: boolean;
}

/**
 * Card wrapper component for displaying Floating Action Buttons
 * Uses global styles and theme context for consistent styling
 */
export default function FABCard({ label, children, isMobile = false }: FABCardProps) {
  const { theme } = useTheme();

  return (
    <View style={[styles.card, isMobile && styles.cardMobile]}>
      <Text style={styles.cardLabel}>{label}</Text>
      {children}
    </View>
  );
}
