import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/theme';
import { styles } from '../../styles/FloatingActionButtons.styles';

interface StandardFABProps {
	color: 
	onPress?: () => void;
}

export default function FloatingActionButton({ onPress }: StandardFABProps) {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={onPress}>
			<LinearGradient
				colors={[colors.primary, colors.primaryContainer]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 1 }}
				style={styles.fabStandard}
			>
				<MaterialIcons name="add" size={24} color={colors.onPrimary} />
			</LinearGradient>
		</TouchableOpacity>
	);
}