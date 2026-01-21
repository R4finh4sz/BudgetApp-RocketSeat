import {StyleSheet} from 'react-native';

import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
  },
  radioOuter: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  labelPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  labelDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  labelText: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 12,
  },
});
