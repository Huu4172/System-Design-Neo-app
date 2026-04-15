import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../useResponsive';
import { colors } from '../theme';

export default function ControlStates() {
  const { isMobile } = useResponsive();
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radio1, setRadio1] = useState(true);
  const [radio2, setRadio2] = useState(false);

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 03</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Control States</Text>
        <Text style={styles.sectionDesc}>
          Interactions that feel tactile and responsive without the clutter of traditional borders.
        </Text>
      </View>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={styles.cardTitle}>Switches & Toggles</Text>
          <View style={styles.controlGroup}>
            <View style={styles.controlRow}>
              <Text style={styles.controlLabel}>Automatic Optimization</Text>
              <TouchableOpacity onPress={() => setToggle1(!toggle1)}>
                <View style={[styles.toggle, toggle1 && styles.toggleActive]}>
                  <View style={[styles.toggleThumb, toggle1 && styles.toggleThumbActive]} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.controlRow}>
              <Text style={styles.controlLabel}>Deep Research Mode</Text>
              <TouchableOpacity onPress={() => setToggle2(!toggle2)}>
                <View style={[styles.toggle, toggle2 && styles.toggleActive]}>
                  <View style={[styles.toggleThumb, toggle2 && styles.toggleThumbActive]} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <View style={[styles.card, isMobile && styles.cardMobile]}>
          <Text style={styles.cardTitle}>Selection Nodes</Text>
          <View style={styles.selectionGroup}>
            <View style={styles.checkboxGroup}>
              <TouchableOpacity onPress={() => setCheckbox1(!checkbox1)}>
                <View style={[styles.checkbox, checkbox1 && styles.checkboxActive]}>
                  {checkbox1 && <MaterialIcons name="check" size={18} color={colors.white} />}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCheckbox2(!checkbox2)}>
                <View style={[styles.checkbox, checkbox2 && styles.checkboxActive]}>
                  {checkbox2 && <MaterialIcons name="check" size={18} color={colors.white} />}
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.checkboxGroup}>
              <TouchableOpacity onPress={() => { setRadio1(true); setRadio2(false); }}>
                <View style={[styles.radio, radio1 && styles.radioActive]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setRadio1(false); setRadio2(true); }}>
                <View style={[styles.radio, radio2 && styles.radioActive]} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  sectionMobile: {
    marginBottom: 24,
  },
  header: {
    marginBottom: 32,
  },
  headerMobile: {
    marginBottom: 20,
  },
  sectionLabel: {
    color: colors.primary,
    fontSize: 12,
    letterSpacing: 3,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.onSurface,
    marginBottom: 16,
    letterSpacing: -1,
  },
  sectionTitleMobile: {
    fontSize: 28,
    marginBottom: 10,
  },
  sectionDesc: {
    color: colors.outline,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 600,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 40,
  },
  gridMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: colors.surfaceContainerLow,
    padding: 40,
    borderRadius: 16,
    minWidth: 300,
  },
  cardMobile: {
    padding: 20,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 32,
    color: colors.onSurface,
  },
  controlGroup: {
    gap: 24,
  },
  controlRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.onSurface,
  },
  toggle: {
    width: 48,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.outlineVariant,
    padding: 4,
    justifyContent: 'center',
  },
  toggleActive: {
    backgroundColor: colors.primaryContainer,
  },
  toggleThumb: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  toggleThumbActive: {
    alignSelf: 'flex-end',
  },
  selectionGroup: {
    flexDirection: 'row',
    gap: 48,
  },
  checkboxGroup: {
    gap: 16,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  checkboxActive: {
    backgroundColor: colors.primary,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  radioActive: {
    borderWidth: 4,
    borderColor: colors.secondary,
  },
});
