import { useWindowDimensions } from 'react-native';

export default function useResponsive() {
  const { width } = useWindowDimensions();
  return { isMobile: width < 768, width };
}
