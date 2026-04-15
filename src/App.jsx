import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import FloatingActionButtons from './components/FloatingActionButtons';
import StatusIndicators from './components/StatusIndicators';
import ControlStates from './components/ControlStates';
import SegmentedControls from './components/SegmentedControls';
import ProgressLoading from './components/ProgressLoading';
import BottomNavigation from './components/BottomNavigation';
import useResponsive from './useResponsive';
import { colors } from './theme';

export default function App() {
  const { isMobile } = useResponsive();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <View style={styles.container}>
        <Header />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.content,
            isMobile && styles.contentMobile,
          ]}
          showsVerticalScrollIndicator={false}
        >
          <FloatingActionButtons />
          <StatusIndicators />
          <ControlStates />
          <SegmentedControls />
          <ProgressLoading />
          <View style={styles.bottomSpacer} />
        </ScrollView>
        <BottomNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  contentMobile: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  bottomSpacer: {
    height: 100,
  },
});
