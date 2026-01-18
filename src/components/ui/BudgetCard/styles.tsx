import theme from '@/src/Global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FAFAFA',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleGroup: {
    flex: 1,
    paddingRight: 12,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 16,
    color: theme.COLORS.TEXT_CONTRAST,
  },
  subtitle: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 13,
    color: theme.COLORS.TEXT_MUTED,
    marginTop: 4,
  },
  footer: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amount: {
    fontSize: 16,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    color: theme.COLORS.TEXT_CONTRAST,
  },
});
