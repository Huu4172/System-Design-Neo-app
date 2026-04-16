import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import useResponsive from '../../useResponsive';
import { colors } from '../../theme';
import { styles } from '../../styles/SegmentedControls.styles';

export default function SegmentedControls() {
  const { isMobile } = useResponsive();
  const [selected, setSelected] = useState('daily');

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 04</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Segmented Controls</Text>
        <Text style={styles.sectionDesc}>
          Soft tonal nesting for view switching and data filtering.
        </Text>
      </View>
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <View style={styles.segmentedControl}>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'daily' && styles.segmentActive]}
            onPress={() => setSelected('daily')}
          >
            <Text style={[styles.segmentText, selected === 'daily' && styles.segmentTextActive]}>
              Daily
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'weekly' && styles.segmentActive]}
            onPress={() => setSelected('weekly')}
          >
            <Text style={[styles.segmentText, selected === 'weekly' && styles.segmentTextActive]}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.segment, isMobile && styles.segmentMobile, selected === 'monthly' && styles.segmentActive]}
            onPress={() => setSelected('monthly')}
          >
            <Text style={[styles.segmentText, selected === 'monthly' && styles.segmentTextActive]}>
              Monthly
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
