import { StyleSheet, Text, View } from 'react-native';

import { BudgetItem } from '../../../Interfaces/HomeInterfaces';
import { formatCurrency } from '../../../utils/formatCurrency';
import { StatusBadge } from '@/src/components/ui/StatusBadge';
import { styles } from './styles';

type Props = {
  item: BudgetItem;
};

export function BudgetCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleGroup}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.client}</Text>
        </View>
        <StatusBadge status={item.status} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.amount}>{formatCurrency(item.amount)}</Text>
      </View>
    </View>
  );
}

