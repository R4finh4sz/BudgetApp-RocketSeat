import {StyleSheet} from 'react-native';
import theme from '@/src/Global/theme';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 6,
  },
  backBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 15,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },

  card: {
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    borderRadius: 14,
    padding: 14,
  },
  divider: {
    height: 1,
    backgroundColor: theme.COLORS.GRAY_200,
    opacity: 0.35,
    marginVertical: 12,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: theme.COLORS.GRAY_200,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  bigTitle: {
    flex: 1,
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 16,
    lineHeight: 20,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },

  infoGrid: {gap: 10},
  infoRow: {flexDirection: 'row', gap: 18},
  infoCol: {flex: 1, gap: 4},
  label: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  value: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconMini: {
    width: 26,
    height: 26,
    borderRadius: 9,
    backgroundColor: theme.COLORS.GRAY_200,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  sectionTitle: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },

  servicesList: {gap: 14},
  serviceRow: {
    flexDirection: 'row',
    gap: 10,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLORS.GRAY_200,
    opacity: 0.95,
  },
  serviceRowLast: {
    paddingBottom: 0,
    borderBottomWidth: 0,
  },
  serviceMain: {flex: 1, gap: 4},
  serviceTitle: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  serviceDesc: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  serviceMeta: {
    alignItems: 'flex-end',
    gap: 6,
    minWidth: 90,
  },
  serviceAmount: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  serviceQty: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },

  summaryTop: {
    flexDirection: 'row',
    gap: 12,
  },
  summaryRows: {
    flex: 1,
    gap: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryLabel: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  summaryValue: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    textDecorationLine: 'line-through',
    opacity: 0.8,
  },
  discountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  discountBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(34, 197, 94, 0.14)',
  },
  discountBadgeText: {
    color: 'rgba(34, 197, 94, 1)',
    fontSize: 11,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  discountValue: {
    color: 'rgba(34, 197, 94, 1)',
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  summaryRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  totalLabel: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 12,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  totalValue: {
    color: theme.COLORS.TEXT_CONTRAST,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  bottomBar: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
    borderTopWidth: 1,
    borderTopColor: theme.COLORS.GRAY_200,
  },
  bottomLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  roundBtn: {
    width: 44,
    height: 44,
    borderRadius: 999,
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  shareBtn: {
    flex: 1,
    height: 44,
    borderRadius: 999,
    backgroundColor: theme.COLORS.PURPLE_BASE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 14,
    overflow: 'hidden',
  },
  shareText: {
    color: theme.COLORS.BACKGROUND_ELEVATED,
    fontSize: 13,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
});
