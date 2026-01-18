import { Text, View } from 'react-native';

import { STATUS_CONFIG } from '@/src/constants/constants';
import { BudgetStatus } from '@/src/Interfaces/HomeInterfaces';
import { styles } from './styles';

type Props = {
  status: BudgetStatus;
};

export function StatusBadge({ status }: Props) {
  const config = STATUS_CONFIG[status];

  return (
    <View style={[styles.badge, { backgroundColor: config.background }]}> 
      <View style={[styles.dot, { backgroundColor: config.color }]} />
      <Text style={[styles.label, { color: config.color }]}>{config.label}</Text>
    </View>
  );
}

