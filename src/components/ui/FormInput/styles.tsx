import {StyleSheet} from 'react-native';

import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
  },
  inputError: {
    color: theme.COLORS.DANGER_BASE,
  },
  errorText: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 12,
    color: theme.COLORS.DANGER_BASE,
    marginTop: 6,
    marginLeft: 4,
  },
});
