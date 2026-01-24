import {useCallback, useMemo, useState} from 'react';
import {Alert, Share, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

import {formatCurrency} from '@/src/utils/formatCurrency';
import {
  BudgetStored,
  deleteBudget,
  duplicateBudget,
  getBudgets,
} from '@/src/storage/budgets';

import {styles} from '@/src/app/Main/BudgetDetails/styles';
import {BudgetDetailsBottomBar} from '@/src/components/Screens/BudgetDetails/BudgetDetailsBottomBar';
import {BudgetDetailsHeader} from '@/src/components/Screens/BudgetDetails/BudgetDetailsHeader';
import {BudgetDetailsInfoCard} from '@/src/components/Screens/BudgetDetails/BudgetDetailsInfoCard';
import {BudgetDetailsSummaryCard} from '@/src/components/Screens/BudgetDetails/BudgetDetailsSummaryCard';
import {BudgetDetailsServicesCard} from '@/src/components/Screens/BudgetDetails/BudgetDetailsServicesCard';

function formatDateBR(iso: string) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

export default function BudgetDetails() {
  const router = useRouter();
  const {id} = useLocalSearchParams<{id: string}>();
  const insets = useSafeAreaInsets();

  const [budget, setBudget] = useState<BudgetStored | null>(null);

  const load = useCallback(async () => {
    const all = await getBudgets();
    const found = all.find(b => String(b.id) === String(id));
    setBudget(found ?? null);
  }, [id]);

  useMemo(() => {
    load();
  }, [load]);

  const subtotal = useMemo(() => {
    if (!budget) return 0;
    return budget.services.reduce((acc, s) => acc + s.amount * s.quantity, 0);
  }, [budget]);

  const discountAmount = budget?.discountAmount ?? 0;
  const discountPercent = budget?.discountPercent ?? 0;

  const total = useMemo(() => {
    if (!budget) return 0;
    return budget.total ?? subtotal - discountAmount;
  }, [budget, subtotal, discountAmount]);

  const handleDelete = () => {
    if (!budget) return;

    Alert.alert(
      'Excluir orçamento',
      'Tem certeza que deseja excluir este orçamento? Essa ação não pode ser desfeita.',
      [
        {text: 'Cancelar', style: 'cancel'},
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: async () => {
            await deleteBudget(String(budget.id));
            router.back();
          },
        },
      ],
    );
  };

  const handleDuplicate = async () => {
    if (!budget) return;

    const copy = await duplicateBudget(String(budget.id));
    if (!copy) return;

    router.replace(`/Main/BudgetDetails/${copy.id}`);
  };

  const handleEdit = () => {
    if (!budget) return;
    Alert.alert('Em breve', 'A edição ainda não foi implementada.');
  };

  const handleShare = async () => {
    if (!budget) return;

    const servicesText = budget.services
      .map(s => {
        const v = formatCurrency(s.amount);
        return `• ${s.title} (Qt: ${s.quantity}) - ${v}`;
      })
      .join('\n');

    const message = `Orçamento #${budget.id}

Título: ${budget.title}
Cliente: ${budget.client}
Status: ${budget.status}

Serviços:
${servicesText || 'Nenhum serviço'}

Subtotal: ${formatCurrency(subtotal)}
Desconto: - ${formatCurrency(discountAmount)}
Total: ${formatCurrency(total)}
`;

    await Share.share({message});
  };

  if (!budget) {
    return (
      <SafeAreaView style={styles.container}>
        <BudgetDetailsHeader
          title="Orçamento"
          status="draft"
          onBack={() => router.back()}
        />
        <View style={styles.empty}>
          <Text style={styles.emptyTitle}>Orçamento não encontrado</Text>
          <Text style={styles.emptySubtitle}>
            Não foi possível carregar os dados deste orçamento.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={[
            styles.content,
            {paddingBottom: insets.bottom + 24},
          ]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <BudgetDetailsHeader
            title={`Orçamento #${budget.id}`}
            status={budget.status}
            onBack={() => router.back()}
          />

          <BudgetDetailsInfoCard
            title={budget.title}
            client={budget.client}
            createdAt={formatDateBR(budget.createdAt)}
            updatedAt={formatDateBR(budget.updatedAt)}
          />

          <BudgetDetailsServicesCard services={budget.services} />

          <BudgetDetailsSummaryCard
            subtotal={subtotal}
            discountPercent={discountPercent}
            discountAmount={discountAmount}
            total={total}
          />
        </KeyboardAwareScrollView>
      </View>

      <BudgetDetailsBottomBar
        onDelete={handleDelete}
        onDuplicate={handleDuplicate}
        onEdit={handleEdit}
        onShare={handleShare}
      />
    </SafeAreaView>
  );
}
