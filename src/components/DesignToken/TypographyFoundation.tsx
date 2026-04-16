import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResponsive from '../../useResponsive';
import { colors } from '../../styles/theme';

export default function TypographyFoundation() {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View style={[styles.headerAccent, { backgroundColor: colors.primary }]} />
        <Text style={styles.sectionTitle}>Typography Foundation</Text>
      </View>

      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <View style={styles.primaryCard}>
          <View style={styles.copyBlock}>
            <Text style={[styles.eyebrow, { color: colors.tertiary }]}>Headline / Space Grotesk</Text>
            <Text style={styles.heroTitle}>The Digital Sanctuary</Text>
            <Text style={styles.typeSpecimenHeadline}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
            <Text style={styles.typeSpecimenHeadline}>abcdefghijklmnopqrstuvwxyz</Text>
            <Text style={styles.typeSpecimenHeadline}>1234567890 &amp;*@?!</Text>
          </View>

          <View style={styles.copyBlock}>
            <Text style={[styles.eyebrow, { color: colors.tertiary }]}>Body / Manrope</Text>
            <Text style={styles.bodyLead}>
              Intuitive interactions fueled by empathetic AI response. We prioritize clarity, whitespace, and human-centric design.
            </Text>
            <Text style={styles.typeSpecimenBody}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
            <Text style={styles.typeSpecimenBody}>abcdefghijklmnopqrstuvwxyz</Text>
            <Text style={styles.typeSpecimenBody}>1234567890 &amp;*@?!</Text>
          </View>
        </View>

        <View style={styles.sideColumn}>
          <View style={styles.scaleCard}>
            <Text style={styles.sideLabel}>Type Scale</Text>
            <View style={styles.scaleList}>
              <View style={styles.scaleRow}>
                <Text style={styles.scaleDisplay}>Display LG</Text>
                <Text style={styles.scaleMeta}>56px / Space Grotesk</Text>
              </View>
              <View style={styles.scaleRow}>
                <Text style={styles.scaleHeadline}>Headline SM</Text>
                <Text style={styles.scaleMeta}>24px / Space Grotesk</Text>
              </View>
              <View style={styles.scaleRow}>
                <Text style={styles.scaleBody}>Body Large</Text>
                <Text style={styles.scaleMeta}>18px / Manrope</Text>
              </View>
              <View style={styles.scaleRow}>
                <Text style={styles.scaleLabel}>Label MD</Text>
                <Text style={styles.scaleMeta}>12px / Space Grotesk</Text>
              </View>
            </View>
          </View>

          <View style={styles.visionCard}>
            <Text style={styles.visionEyebrow}>Editorial Vision</Text>
            <Text style={styles.visionQuote}>"Precision meets calm in every interaction."</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 48 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  headerAccent: { width: 32, height: 4, borderRadius: 999 },
  sectionTitle: { fontSize: 28, fontWeight: '700', color: colors.onSurface },
  grid: { flexDirection: 'row', gap: 24 },
  gridMobile: { flexDirection: 'column' },
  primaryCard: {
    flex: 1.45,
    backgroundColor: colors.surfaceContainerLow,
    padding: 32,
    borderRadius: 20,
    gap: 40,
  },
  sideColumn: { flex: 1, gap: 16 },
  copyBlock: { gap: 12 },
  eyebrow: { fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase' },
  heroTitle: { fontSize: 44, fontWeight: '700', color: colors.onSurface, lineHeight: 52 },
  typeSpecimenHeadline: { fontSize: 22, color: colors.onSurface, lineHeight: 32 },
  bodyLead: { fontSize: 22, color: colors.onSurface, lineHeight: 34 },
  typeSpecimenBody: { fontSize: 18, color: colors.outline, lineHeight: 28 },
  scaleCard: {
    backgroundColor: colors.surfaceContainerLowest,
    padding: 28,
    borderRadius: 20,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  sideLabel: { fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', color: colors.slate400, marginBottom: 20 },
  scaleList: { gap: 20 },
  scaleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 },
  scaleDisplay: { fontSize: 34, fontWeight: '700', color: colors.onSurface },
  scaleHeadline: { fontSize: 24, fontWeight: '500', color: colors.onSurface },
  scaleBody: { fontSize: 18, color: colors.onSurface },
  scaleLabel: { fontSize: 12, fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase', color: colors.onSurface },
  scaleMeta: { fontSize: 11, color: colors.slate400 },
  visionCard: {
    padding: 28,
    borderRadius: 20,
    backgroundColor: colors.primary,
  },
  visionEyebrow: { fontSize: 11, fontWeight: '700', letterSpacing: 1.2, textTransform: 'uppercase', color: '#b7eaff', marginBottom: 16 },
  visionQuote: { fontSize: 24, fontWeight: '300', fontStyle: 'italic', lineHeight: 34, color: colors.onPrimary },
});