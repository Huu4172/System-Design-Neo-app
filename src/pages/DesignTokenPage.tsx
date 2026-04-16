import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';
import TypographyFoundation from '../components/DesignToken/TypographyFoundation';
import ColorArchitecture from '../components/DesignToken/ColorArchitecture';
import DesignLanguage from '../components/DesignToken/DesignLanguage';
import ComponentBlueprint from '../components/DesignToken/ComponentBlueprint';

export default function DesignTokenPage() {
  const { isMobile } = useResponsive();

  return (
    <>
      <View style={[styles.section, isMobile && styles.sectionMobile]}>
        <View style={styles.headerRow}>
          <View style={styles.badge}>
            <MaterialIcons name="inventory-2" size={14} color={colors.cyan600} />
            <Text style={styles.badgeText}>FOUNDATION</Text>
          </View>
        </View>
        <View style={[styles.header, isMobile && styles.headerMobile]}>
          <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Design Tokens</Text>
          <Text style={styles.sectionDesc}>
            The foundational building blocks of the Aetheric Pulse identity. A systematic approach to color, type, and form that balances technical precision with a sanctuary-like atmosphere.
          </Text>
        </View>
      </View>

      <TypographyFoundation />
      <ColorArchitecture />
      <DesignLanguage />
      <ComponentBlueprint />
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
  header: { marginBottom: 20 },
  headerMobile: { marginBottom: 12 },
  sectionTitle: { fontSize: 40, fontWeight: 'bold', color: colors.onSurface, marginBottom: 12 },
  sectionTitleMobile: { fontSize: 30, marginBottom: 8 },
  sectionDesc: { color: colors.outline, fontSize: 18, lineHeight: 28, maxWidth: 760 },
});