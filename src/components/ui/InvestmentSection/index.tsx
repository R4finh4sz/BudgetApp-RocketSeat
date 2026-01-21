import {Text, View} from 'react-native';
import {CreditCard} from 'lucide-react-native';

import theme from '@/src/Global/theme';
import {FormSection} from '@/src/components/ui/FormSection';
import {formatCurrency} from '@/src/utils/formatCurrency';
import {styles} from '@/src/app/Main/BudgetNew/styles';

type Props = {
  itemsCount: number;
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
};

export function InvestmentSection({
  itemsCount,
  subtotal,
  discountPercent,
  discountAmount,
  total,
}: Props) {
  return (
    <FormSection
      title="Investimento"
      icon={<CreditCard size={16} color={theme.COLORS.PURPLE_BASE} />}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Subtotal</Text>
        <View style={styles.summaryMeta}>
          <Text style={styles.summaryMetaText}>{itemsCount} itens</Text>
          <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.discountLabel}>
          <Text style={styles.summaryLabel}>Desconto</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountBadgeText}>{discountPercent} %</Text>
          </View>
        </View>
        <Text style={styles.summaryValueDanger}>
          - {formatCurrency(discountAmount)}
        </Text>
      </View>

      <View style={[styles.summaryRow, styles.totalRow]}>
        <Text style={styles.totalLabel}>Valor total</Text>
        <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
      </View>
    </FormSection>
  );
}
