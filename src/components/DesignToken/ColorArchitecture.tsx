import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResponsive from '../../useResponsive';
import { colors } from '../../styles/theme';

const swatches = [
  { name: 'Primary', hex: '#00677F', description: 'Core Brand Action', backgroundColor: colors.primary, textColor: colors.onPrimary },
  { name: 'Primary Container', hex: '#00D1FF', description: 'Surface Accents', backgroundColor: colors.primaryContainer, textColor: colors.onPrimaryContainer },
  { name: 'Secondary', hex: '#6100C6', description: 'AI / Insight Tone', backgroundColor: colors.secondary, textColor: colors.onSecondary },
  { name: 'Secondary Fixed', hex: '#ECDCFF', description: 'Subtle AI Backgrounds', backgroundColor: '#ecdcff', textColor: '#270057' },
  { name: 'Tertiary', hex: '#FEB127', description: 'Metadata / Warnings', backgroundColor: colors.tertiaryContainer, textColor: colors.onTertiaryContainer },
  { name: 'Surface', hex: '#F8F9FA', description: 'Application Floor', backgroundColor: colors.surface, textColor: colors.onSurface, borderWidth: 1, borderColor: '#f1f5f9' },
  { name: 'Container Low', hex: '#F3F4F5', description: 'Subtle Sectioning', backgroundColor: colors.surfaceContainerLow, textColor: colors.outline },
  { name: 'Lowest Surface', hex: '#FFFFFF', description: 'Active Card Focus', backgroundColor: colors.surfaceContainerLowest, textColor: colors.outline, borderWidth: 1, borderColor: '#f8fafc' },
] as const;

export default function ColorArchitecture() {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={[styles.headerAccent, { backgroundColor: colors.secondary }]} />
        <Text style={styles.sectionTitle}>Color Architecture</Text>
      </View>

      <View style={styles.grid}>
        {swatches.map((swatch) => (
          <View key={swatch.name} style={[styles.swatchCard, isMobile && styles.swatchCardMobile]}>
            <View style={[styles.swatchSurface, swatch]}>
              <Text style={[styles.swatchHex, { color: swatch.textColor }]}>{swatch.hex}</Text>
            </View>
            <Text style={styles.swatchName}>{swatch.name}</Text>
            <Text style={styles.swatchDescription}>{swatch.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 48 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  headerAccent: { width: 32, height: 4, borderRadius: 999 },
  sectionTitle: { fontSize: 28, fontWeight: '700', color: colors.onSurface },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
  swatchCard: { width: '18.5%', minWidth: 160 },
  swatchCardMobile: { width: '47%' },
  swatchSurface: {
    height: 128,
    borderRadius: 18,
    padding: 16,
    justifyContent: 'flex-end',
  },
  swatchHex: { fontSize: 14, fontWeight: '700', letterSpacing: 0.6 },
  swatchName: { fontSize: 14, fontWeight: '600', color: colors.onSurface, marginTop: 10 },
  swatchDescription: { fontSize: 12, color: colors.slate500, marginTop: 4 },
});