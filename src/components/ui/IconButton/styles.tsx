import theme from '@/src/Global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 99,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
  },
});