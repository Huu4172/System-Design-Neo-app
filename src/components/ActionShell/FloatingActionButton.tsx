import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../contexts/ThemeContext';
import { styles } from '../../styles/FloatingActionButtons.styles';

interface StandardFABProps {
	onPress?: () => void;
}

export default function FloatingActionButton({ onPress }: StandardFABProps) {
	const { theme } = useTheme();
	
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<LinearGradient
				colors={[theme.colors.primary, theme.colors.primaryContainer]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.fabStandard}
			>
				<MaterialIcons name="add" size={24} color={theme.colors.onPrimary} />
			</LinearGradient>
		</TouchableOpacity>
	);
}