import {StyleSheet} from 'react-native';
import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
  },
  content: {
    padding: 16,
    paddingBottom: 120,
    gap: 14,
  },
  empty: {
    padding: 16,
    gap: 6,
  },
  emptyTitle: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 16,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  emptySubtitle: {
    color: theme.COLORS.TEXT_MUTED,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
});
