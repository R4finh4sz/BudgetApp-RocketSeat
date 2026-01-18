import theme from '@/src/Global/theme';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.COLORS.GRAY_200,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
});
