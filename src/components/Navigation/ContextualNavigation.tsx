import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import useResponsive from '../../useResponsive';
import { colors } from '../../styles/theme';
import { styles } from '../../styles/ContextualNavigation.styles';

const tabs = ['Overview', 'Details', 'Activity'];

export default function ContextualNavigation() {
  const { isMobile } = useResponsive();
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={styles.headerRow}>
        <View style={styles.badge}>
          <MaterialIcons name="explore" size={14} color={colors.tertiary} />
          <Text style={styles.badgeText}>CONTEXTUAL FLOW</Text>
        </View>
      </View>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>In-Page Movement</Text>
        <Text style={styles.sectionDesc}>
          Navigation doesn't just happen at the edges. Progressive indicators, back-actions, and tabbed switches allow users to drill into data without losing their conceptual orientation.
        </Text>
      </View>
      <View style={styles.card}>
        {/* Back Action */}
        <View style={styles.backAction}>
          <TouchableOpacity style={styles.backButton}>
            <MaterialIcons name="arrow-back" size={22} color={colors.onSurface} />
          </TouchableOpacity>
          <View>
            <Text style={styles.backLabel}>SETTINGS</Text>
            <Text style={styles.backTitle}>Privacy Controls</Text>
          </View>
        </View>
        {/* Multi-step Progress */}
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.stepLabel}>STEP 02 OF 04</Text>
            <Text style={styles.stepDesc}>Review Identity</Text>
          </View>
          <View style={styles.progressTrack}>
            <LinearGradient
              colors={[colors.primary, colors.primaryContainer]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.progressFill}
            />
          </View>
        </View>
        {/* Tabbed View */}
        <View style={styles.tabBar}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}
