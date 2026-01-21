import {StyleSheet} from 'react-native';

import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconWrap: {
    width: 28,
    height: 28,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.PURPLE_LIGHT,
    marginRight: 8,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 13,
    color: theme.COLORS.TEXT_MUTED,
  },
  content: {},
});
