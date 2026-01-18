import theme from "@/src/Global/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  label: {
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
    fontSize: 12,
  },
});
