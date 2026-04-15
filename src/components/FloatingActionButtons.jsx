import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import { styles } from '../styles/FloatingActionButtons.styles';

export default function FloatingActionButtons() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 01</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Floating Action Buttons</Text>
        <Text style={styles.sectionDesc}>
          The primary entry points for creative flow. These elements utilize high-elevation tonal shifts and signature gradients.
        </Text>
      </View>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={styles.cardLabel}>STANDARD FAB</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <LinearGradient
              colors={[colors.primary, colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.fabStandard}
            >
              <MaterialIcons name="add" size={24} color={colors.onPrimary} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={styles.cardLabel}>SMALL UTILITY</Text>
          <TouchableOpacity style={styles.fabSmall} activeOpacity={0.8}>
            <MaterialCommunityIcons name="auto-fix" size={20} color={colors.onSecondaryContainer} />
          </TouchableOpacity>
        </View>
        
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={styles.cardLabel}>EXTENDED COMMAND</Text>
          <TouchableOpacity style={styles.fabExtended} activeOpacity={0.8}>
            <MaterialCommunityIcons name="magic-staff" size={24} color={colors.inverseOnSurface} />
            <Text style={styles.fabExtendedText}>Generate Shell</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
