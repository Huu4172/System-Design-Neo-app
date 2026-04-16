import React from 'react';
import { View, Text } from 'react-native';
import useResponsive from '../../useResponsive';
import { styles } from '../../styles/StatusIndicators.styles';
import StatusBadge from '../../components/ActionShell/StatusBadge';

export default function StatusIndicators() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 02</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Status Indicators</Text>
        <Text style={styles.sectionDesc}>
          Pill-shaped badges designed for clarity and a technical instrumentation aesthetic.
        </Text>
      </View>
      <View style={[styles.container, isMobile && styles.containerMobile]}>
        <StatusBadge variant="live" label="LIVE" animated />
        <StatusBadge variant="pending" label="PENDING" />
        <StatusBadge variant="creative" label="CREATIVE" />
        <StatusBadge variant="processing" label="PROCESSING" icon="sync" />
      </View>
    </View>
  );
}
