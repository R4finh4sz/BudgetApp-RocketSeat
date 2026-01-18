import { StyleSheet } from 'react-native';

import theme from '../../../Global/theme';

export const styles = StyleSheet.create({
	container: {
		paddingTop: 20,
		flex: 1,
		backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 32,
	},
	headerRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginTop: 8,
		marginBottom: 24,
	},
	title: {
		fontSize: 20,
		color: theme.COLORS.ACCENT_BRAND,
		fontFamily: theme.FONT_FAMILY.SEMIBOLD,
	},
	subtitle: {
		marginTop: 4,
		fontSize: 14,
		color: theme.COLORS.TEXT_MUTED,
		fontFamily: theme.FONT_FAMILY.REGULAR,
	},
	newButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.COLORS.PURPLE_BASE,
		paddingHorizontal: 14,
		paddingVertical: 10,
		borderRadius: 14,
	},
	newButtonText: {
		marginLeft: 8,
		color: theme.COLORS.BACKGROUND_ELEVATED,
		fontFamily: theme.FONT_FAMILY.SEMIBOLD,
		fontSize: 14,
	},
	searchRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 12,
	},
	filterButton: {
		marginLeft: 12,
	},
	listArea: {
		paddingBottom: 12,
	},
	emptyState: {
		paddingVertical: 40,
		alignItems: 'center',
	},
	emptyTitle: {
		fontFamily: theme.FONT_FAMILY.SEMIBOLD,
		fontSize: 16,
		color: theme.COLORS.TEXT_CONTRAST,
	},
	emptySubtitle: {
		fontFamily: theme.FONT_FAMILY.REGULAR,
		fontSize: 14,
		color: theme.COLORS.TEXT_MUTED,
	},
});
