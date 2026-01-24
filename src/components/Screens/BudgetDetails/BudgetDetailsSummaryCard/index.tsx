import {Text, View} from 'react-native';
import {ReceiptTextIcon} from 'lucide-react-native';
import theme from '@/src/Global/theme';
import {formatCurrency} from '@/src/utils/formatCurrency';
import {styles} from '@/src/components/Screens/BudgetDetails/styles';

type Props = {
  subtotal: number;
  discountPercent: number;
  discountAmount: number;
  total: number;
};

export function BudgetDetailsSummaryCard({
  subtotal,
  discountPercent,
  discountAmount,
  total,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.summaryTop}>
        <View style={styles.iconBox}>
          <ReceiptTextIcon size={18} color={theme.COLORS.PURPLE_BASE} />
        </View>

        <View style={styles.summaryRows}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <Text style={styles.summaryValue}>{formatCurrency(subtotal)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <View style={styles.discountLeft}>
              <Text style={styles.summaryLabel}>Desconto</Text>
              {!!discountPercent && (
                <View style={styles.discountBadge}>
                  <Text style={styles.discountBadgeText}>
                    {discountPercent}% off
                  </Text>
                </View>
              )}
            </View>

            <Text style={styles.discountValue}>
              - {formatCurrency(discountAmount)}
            </Text>
          </View>

          <View style={styles.summaryRowTotal}>
            <Text style={styles.totalLabel}>Investimento total</Text>
            <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
