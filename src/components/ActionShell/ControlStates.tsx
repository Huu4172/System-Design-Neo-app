import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import useResponsive from '../../useResponsive';
import { colors } from '../../styles/theme';
import { styles } from '../../styles/ControlStates.styles';

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
