import React, { useState } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import ActionShellPage from './pages/ActionShellPage';
import ChatPage from './pages/ChatPage';
import NavigationPage from './pages/NavigationPage';
import BottomNavigation from './components/Navigation/BottomNavigation';
import useResponsive from './useResponsive';
import { colors } from './theme';
import { styles } from './styles/App.styles';

export default function App() {
  const { isMobile } = useResponsive();
  const [activePage, setActivePage] = useState('Action Shell');

  const renderPage = () => {
    if (activePage === 'Chat') {
      return <ChatPage />;
    }

    if (activePage === 'Navigation') {
      return <NavigationPage />;
    }

    return <ActionShellPage />;
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
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
    </SafeAreaProvider>
  );
}
