import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../../useResponsive';
import { colors } from '../../theme';

const iconItems = [
  { icon: 'auto-awesome', label: 'AI Magic' },
  { icon: 'bedtime', label: 'Focus' },
  { icon: 'inventory-2', label: 'Vault' },
  { icon: 'brush', label: 'Creative' },
  { icon: 'chat-bubble', label: 'Chat' },
  { icon: 'check-circle', label: 'Tasks' },
  { icon: 'person', label: 'Personal' },
  { icon: 'settings', label: 'System' },
] as const;

export default function DesignLanguage() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.grid, isMobile && styles.gridMobile]}>
      <View style={styles.column}>
        <View style={styles.sectionHeader}>
          <View style={[styles.headerAccent, { backgroundColor: colors.tertiaryContainer }]} />
          <Text style={styles.sectionTitle}>Material Symbology</Text>
        </View>
        <View style={styles.symbolCard}>
          <View style={styles.symbolGrid}>
            {iconItems.map((item) => (
              <View key={item.label} style={styles.symbolItem}>
                <MaterialIcons name={item.icon} size={32} color={colors.primary} />
                <Text style={styles.symbolLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.column}>
        <View style={styles.sectionHeader}>
          <View style={[styles.headerAccent, { backgroundColor: colors.outline }]} />
          <Text style={styles.sectionTitle}>Shape & Elevation</Text>
        </View>
        <View style={styles.shapeStack}>
          <View style={styles.shapeCard}>
            <View style={styles.shapePreviewRow}>
              <View style={styles.roundingDefaultPreview} />
              <View>
                <Text style={styles.shapeTitle}>Rounding DEFAULT</Text>
                <Text style={styles.shapeMeta}>1rem / 16px - Standard Cards</Text>
              </View>
            </View>
          </View>
          <View style={styles.shapeCard}>
            <View style={styles.shapePreviewRow}>
              <View style={styles.roundingXlPreview} />
              <View>
                <Text style={styles.shapeTitle}>Rounding XL</Text>
                <Text style={styles.shapeMeta}>3rem / 48px - Chat Bubbles</Text>
              </View>
            </View>
          </View>
          <View style={styles.shapeCard}>
            <View style={styles.shapePreviewRow}>
              <View style={styles.shadowPreview} />
              <View>
                <Text style={styles.shapeTitle}>Ambient Shadow</Text>
                <Text style={styles.shapeMeta}>40px Blur / 4% Opacity Cyan Tint</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', gap: 24, marginBottom: 48 },
  gridMobile: { flexDirection: 'column' },
  column: { flex: 1 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 24 },
  headerAccent: { width: 32, height: 4, borderRadius: 999 },
  sectionTitle: { fontSize: 28, fontWeight: '700', color: colors.onSurface },
  symbolCard: { backgroundColor: colors.surfaceContainerLow, padding: 28, borderRadius: 20 },
  symbolGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 24 },
  symbolItem: { width: '22%', minWidth: 88, alignItems: 'center', gap: 8 },
  symbolLabel: { fontSize: 10, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, color: colors.slate500, textAlign: 'center' },
  shapeStack: { gap: 16 },
  shapeCard: { backgroundColor: colors.surfaceContainerLow, padding: 24, borderRadius: 20 },
  shapePreviewRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  roundingDefaultPreview: { width: 48, height: 48, borderRadius: 16, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.white, shadowColor: colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 1 },
  roundingXlPreview: { width: 48, height: 48, borderRadius: 48, backgroundColor: colors.white, borderWidth: 1, borderColor: colors.white, shadowColor: colors.black, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.04, shadowRadius: 8, elevation: 1 },
  shadowPreview: { width: 48, height: 48, borderRadius: 999, backgroundColor: colors.white, shadowColor: colors.primary, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.08, shadowRadius: 24, elevation: 3 },
  shapeTitle: { fontSize: 16, fontWeight: '700', color: colors.onSurface },
  shapeMeta: { fontSize: 12, color: colors.slate500, marginTop: 4 },
});