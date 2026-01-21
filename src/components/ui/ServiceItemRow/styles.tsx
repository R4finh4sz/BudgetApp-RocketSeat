import {StyleSheet} from 'react-native';

import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.BORDER_PRIMARY,
  },
  rowLast: {
    borderBottomWidth: 0,
    paddingBottom: 4,
  },
  mainInfo: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
  },
  description: {
    marginTop: 4,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 12,
    color: theme.COLORS.TEXT_MUTED,
  },
  meta: {
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  amount: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
  },
  quantity: {
    marginTop: 4,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 12,
    color: theme.COLORS.TEXT_MUTED,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
  },
});
