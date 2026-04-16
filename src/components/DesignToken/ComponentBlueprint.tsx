import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import useResponsive from '../../useResponsive';
import { colors } from '../../theme';

const visualSoulImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL42nHf9r5_O7IT6P0fS-kn4EERwxRelSL-c2RLNNDdRQdpRUfsZ9BLUJLu538La1vj1yfptjJBk9UzUjuXGeijMP1ul6udLQey9W7gIk_HsiX3VzIE8Mx5Qw5h-C_Gsc6dvzjRBEsu4oBgTq-dAsWSR7JGb9AJEXXdv9D7rylN7IZJrkV4JOMuqTt0d2_14Jtx_vbW7zcAh6LUeAEznp-s45HS3fQRHdAgrFXCtCYQQyCjo56dtEDkGh-hse0Zna8hgNLvXaHJuvw';

export default function ComponentBlueprint() {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Component Blueprint</Text>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <View style={styles.zenCard}>
          <View style={styles.zenChip}>
            <Text style={styles.zenChipText}>Zen Card</Text>
          </View>
          <Text style={styles.cardTitle}>Techno-Zen UI</Text>
          <Text style={styles.cardDescription}>
            Observe the lack of divider lines. Separation is achieved through background contrast.
          </Text>
          <TouchableOpacity style={styles.primaryButton} activeOpacity={0.8}>
            <Text style={styles.primaryButtonText}>Primary Action</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.messageBlueprintCard}>
          <View style={styles.aiBubbleCard}>
            <View style={styles.aiAccentBar} />
            <View style={styles.aiBubbleContent}>
              <Text style={styles.aiLabel}>AI Response</Text>
              <Text style={styles.aiText}>
                The left accent bar provides a techno spark to the serene interface.
              </Text>
            </View>
          </View>

          <View style={styles.userBubbleCard}>
            <Text style={styles.userBubbleText}>
              User inquiry follows softer rounding and neutral tones.
            </Text>
          </View>
        </View>

        <ImageBackground source={{ uri: visualSoulImage }} style={styles.visualCard} imageStyle={styles.visualImage}>
          <View style={styles.visualOverlay} />
          <View style={styles.visualContent}>
            <Text style={styles.visualTitle}>Visual Soul</Text>
            <Text style={styles.visualMeta}>Layered Translucency</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: { marginBottom: 48 },
  sectionTitle: { fontSize: 28, fontWeight: '700', color: colors.onSurface, marginBottom: 24 },
  grid: { flexDirection: 'row', gap: 24 },
  gridMobile: { flexDirection: 'column' },
  zenCard: {
    flex: 1,
    backgroundColor: colors.surfaceContainerLowest,
    padding: 28,
    borderRadius: 20,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 18 },
    shadowOpacity: 0.05,
    shadowRadius: 28,
    elevation: 3,
  },
  zenChip: { alignSelf: 'flex-end', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, backgroundColor: 'rgba(0,103,127,0.1)', marginBottom: 28 },
  zenChipText: { fontSize: 10, fontWeight: '700', color: colors.primary, textTransform: 'uppercase', letterSpacing: 1.2 },
  cardTitle: { fontSize: 24, fontWeight: '700', color: colors.onSurface, marginBottom: 8 },
  cardDescription: { fontSize: 14, color: '#3c494e', lineHeight: 22, marginBottom: 24 },
  primaryButton: { backgroundColor: colors.primary, paddingVertical: 14, borderRadius: 999, alignItems: 'center' },
  primaryButtonText: { color: colors.onPrimary, fontSize: 14, fontWeight: '700' },
  messageBlueprintCard: { flex: 1, backgroundColor: colors.surfaceContainerLow, padding: 28, borderRadius: 20, gap: 16 },
  aiBubbleCard: { backgroundColor: colors.white, borderRadius: 16, padding: 16, flexDirection: 'row', gap: 12, shadowColor: colors.black, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.04, shadowRadius: 12, elevation: 1 },
  aiAccentBar: { width: 8, borderRadius: 999, backgroundColor: colors.secondary },
  aiBubbleContent: { flex: 1 },
  aiLabel: { fontSize: 10, fontWeight: '700', color: colors.secondary, textTransform: 'uppercase', letterSpacing: 1.2, marginBottom: 6 },
  aiText: { fontSize: 14, color: colors.onSurface, lineHeight: 22 },
  userBubbleCard: { alignSelf: 'flex-end', backgroundColor: colors.surfaceContainerHigh, padding: 16, borderRadius: 16, maxWidth: '88%' },
  userBubbleText: { fontSize: 14, color: colors.onSurface, lineHeight: 22, textAlign: 'right' },
  visualCard: { flex: 1, minHeight: 240, borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-end' },
  visualImage: { borderRadius: 20 },
  visualOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(24,24,27,0.55)' },
  visualContent: { padding: 28 },
  visualTitle: { color: colors.white, fontSize: 24, fontWeight: '700' },
  visualMeta: { color: '#d4d4d8', fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1.4, marginTop: 8 },
});