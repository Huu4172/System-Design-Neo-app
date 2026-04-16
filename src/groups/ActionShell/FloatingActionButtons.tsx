import React from 'react';
import { View, Text } from 'react-native';
import useResponsive from '../../useResponsive';
import { styles } from '../../styles/FloatingActionButtons.styles';
import FABCard from '../../components/ActionShell/FABCard';
import FABButton from '../../components/ActionShell/FABButton';

export default function FloatingActionButtons() {
  const { isMobile } = useResponsive();

  return (
    <View style={[styles.section, isMobile && styles.sectionMobile]}>
      <View style={[styles.header, isMobile && styles.headerMobile]}>
        <Text style={styles.sectionLabel}>SECTION 01</Text>
        <Text style={[styles.sectionTitle, isMobile && styles.sectionTitleMobile]}>Floating Action Buttons</Text>
        <Text style={styles.sectionDesc}>
          The primary entry points for creative flow. These elements utilize high-elevation tonal shifts and signature gradients.
        </Text>
      </View>
      <View style={[styles.grid, isMobile && styles.gridMobile]}>
        <FABCard label="STANDARD FAB" isMobile={isMobile}>
          <FABButton 
            variant="standard" 
            iconName="add" 
            onPress={() => console.log('Standard FAB pressed')}
          />
        </FABCard>
        
        <FABCard label="SMALL UTILITY" isMobile={isMobile}>
          <FABButton 
            variant="small" 
            iconName="auto-fix" 
            iconLibrary="MaterialCommunityIcons"
            onPress={() => console.log('Small FAB pressed')}
          />
        </FABCard>
        
        <FABCard label="EXTENDED COMMAND" isMobile={isMobile}>
          <FABButton 
            variant="extended" 
            iconName="magic-staff"
            iconLibrary="MaterialCommunityIcons"
            text="Generate Shell"
            onPress={() => console.log('Extended FAB pressed')}
          />
        </FABCard>
      </View>
    </View>
  );
}
