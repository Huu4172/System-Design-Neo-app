import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './components/Header';
import ActionShellPage from './pages/ActionShellPage';
import NavigationPage from './pages/NavigationPage';
import BottomNavigation from './components/BottomNavigation';
import useResponsive from './useResponsive';
import { colors } from './theme';

export default function App() {
  const { isMobile } = useResponsive();
  const [activePage, setActivePage] = useState('Action Shell');

  const renderPage = () => {
    if (activePage === 'Navigation') {
      return <NavigationPage />;
    }

    return <ActionShellPage />;
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
