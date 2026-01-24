// src/components/ui/BudgetCard/index.tsx (ou onde estiver)
import {Pressable, Text, View} from 'react-native';
import {useRouter} from 'expo-router';

import {StatusBadge} from '@/src/components/ui/StatusBadge';
import {styles} from './styles';
import {BudgetItem} from '@/src/Interfaces/HomeInterfaces';
import {formatCurrency} from '@/src/utils/formatCurrency';

type Props = {
  item: BudgetItem;
};

export function BudgetCard({item}: Props) {
  const router = useRouter();

  const handleOpenDetails = () => {
    router.push(`/Main/BudgetDetails/${item.id}`);
  };

  return (
    <Pressable style={styles.card} onPress={handleOpenDetails}>
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
    </Pressable>
  );
}
