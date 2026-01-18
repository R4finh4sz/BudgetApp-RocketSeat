import theme from '@/src/Global/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  sheet: {
    backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 16,
    color: theme.COLORS.TEXT_CONTRAST,
  },
  section: {
    marginTop: 8,
  },
  sectionLabel: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
    color: theme.COLORS.TEXT_MUTED,
    marginBottom: 6,
  },
  checkboxRow: {
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 24, 
  marginBottom: 8,
},
  checkboxBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: theme.COLORS.BORDER_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxFill: {
    width: 12,
    height: 12,
    borderRadius: 4,
  },
  checkboxLabel: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: theme.COLORS.BORDER_SECONDARY,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.COLORS.ACCENT_BRAND,
  },
  radioLabel: {
    fontFamily: theme.FONT_FAMILY.REGULAR,
    fontSize: 14,
    color: theme.COLORS.TEXT_CONTRAST,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  ghostButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: theme.COLORS.BORDER_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.COLORS.GRAY_200,
  },
  ghostButtonText: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
    color: theme.COLORS.TEXT_MUTED,
  },
  primaryButton: {
    flex: 1,
    height: 48,
    borderRadius: 14,
    backgroundColor: theme.COLORS.ACCENT_BRAND,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  primaryButtonText: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 14,
    color: theme.COLORS.BACKGROUND_ELEVATED,
  },
});
