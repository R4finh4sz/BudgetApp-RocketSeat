import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FunnelSimple, Plus } from 'phosphor-react-native';

import { IconButton } from '@/src/components/ui/IconButton';
import { SearchBar } from '@/src/components/ui/SearchBar';
import { BudgetCard } from '@/src/components/ui/BudgetCard';
import { FilterBottomSheet } from '@/src/components/ui/FilterBottomSheet';
import theme from '@/src/Global/theme';
import { BUDGETS } from './mock';
import { styles } from './styles';
import { BudgetStatus, SortOption } from '@/src/Interfaces/HomeInterfaces';

export default function Home() {
	const [query, setQuery] = useState('');
	const [selectedStatuses, setSelectedStatuses] = useState<Set<BudgetStatus>>(new Set());
	const [sortOption, setSortOption] = useState<SortOption>('recent');
	const [isSheetOpen, setIsSheetOpen] = useState(false);

	const toggleStatus = (status: BudgetStatus) => {
		setSelectedStatuses((prev) => {
			const next = new Set(prev);
			next.has(status) ? next.delete(status) : next.add(status);
			return next;
		});
	};

	const resetFilters = () => {
		setSelectedStatuses(new Set());
		setSortOption('recent');
	};

	const filteredBudgets = useMemo(() => {
		const text = query.trim().toLowerCase();

		const filtered = BUDGETS.filter((item) => {
			const matchesText = text
				? item.title.toLowerCase().includes(text) || item.client.toLowerCase().includes(text)
				: true;
			const matchesStatus = selectedStatuses.size ? selectedStatuses.has(item.status) : true;
			return matchesText && matchesStatus;
		});

		return filtered.sort((a, b) => {
			if (sortOption === 'highest') return b.amount - a.amount;
			if (sortOption === 'lowest') return a.amount - b.amount;
			const dateA = new Date(a.createdAt).getTime();
			const dateB = new Date(b.createdAt).getTime();
			return sortOption === 'recent' ? dateB - dateA : dateA - dateB;
		});
	}, [query, selectedStatuses, sortOption]);

	const draftsCount = BUDGETS.filter((item) => item.status === 'draft').length;

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
				<View style={styles.headerRow}>
					<View>
						<Text style={styles.title}>Orçamentos</Text>
						<Text style={styles.subtitle}>
							Você tem {draftsCount} item{draftsCount === 1 ? '' : 's'} em rascunho
						</Text>
					</View>

					<Pressable style={styles.newButton} onPress={() => {}}>
						<Plus size={18} color={theme.COLORS.BACKGROUND_ELEVATED} weight="bold" />
						<Text style={styles.newButtonText}>Novo</Text>
					</Pressable>
				</View>

				<View style={styles.searchRow}>
					<SearchBar value={query} onChangeText={setQuery} />
					<IconButton onPress={() => setIsSheetOpen(true)} style={styles.filterButton}>
						<FunnelSimple size={22} color={theme.COLORS.ACCENT_BRAND} weight="bold" />
					</IconButton>
				</View>

				<View style={styles.listArea}>
					{filteredBudgets.map((item) => (
						<BudgetCard key={item.id} item={item} />
					))}
					{!filteredBudgets.length && (
						<View style={styles.emptyState}>
							<Text style={styles.emptyTitle}>Nada encontrado</Text>
							<Text style={styles.emptySubtitle}>Ajuste os filtros ou busque por outro termo.</Text>
						</View>
					)}
				</View>
			</ScrollView>

			<FilterBottomSheet
				visible={isSheetOpen}
				onClose={() => setIsSheetOpen(false)}
				selectedStatuses={selectedStatuses}
				onToggleStatus={toggleStatus}
				sortOption={sortOption}
				onChangeSort={setSortOption}
				onReset={resetFilters}
				onApply={() => setIsSheetOpen(false)}
			/>
		</SafeAreaView>
	);
}
