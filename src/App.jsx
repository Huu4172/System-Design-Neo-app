import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import FloatingActionButtons from './components/FloatingActionButtons';
import StatusIndicators from './components/StatusIndicators';
import ControlStates from './components/ControlStates';
import SegmentedControls from './components/SegmentedControls';
import ProgressLoading from './components/ProgressLoading';
import NavigationPage from './components/NavigationPage';
import BottomNavigation from './components/BottomNavigation';
import useResponsive from './useResponsive';
import { colors } from './theme';

export default function App() {
  const { isMobile } = useResponsive();
  const [activePage, setActivePage] = useState('Library');

  const renderPage = () => {
    if (activePage === 'Navigation') {
      return <NavigationPage />;
    }

    return (
      <>
        <FloatingActionButtons />
        <StatusIndicators />
        <ControlStates />
        <SegmentedControls />
        <ProgressLoading />
      </>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.surface} />
      <View style={styles.container}>
        <Header activePage={activePage} onNavigate={setActivePage} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={[
            styles.content,
            isMobile && styles.contentMobile,
          ]}
          showsVerticalScrollIndicator={false}
        >
          {renderPage()}
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
