import {StyleSheet} from 'react-native';

import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  input: {
    height: 44,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    backgroundColor: theme.COLORS.GRAY_100,
    paddingHorizontal: 14,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
  },
});
