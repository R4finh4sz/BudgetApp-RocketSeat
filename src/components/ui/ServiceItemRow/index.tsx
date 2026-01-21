import {Pressable, Text, View} from 'react-native';
import {PencilSimpleIcon} from 'phosphor-react-native';

import theme from '@/src/Global/theme';
import {formatCurrency} from '@/src/utils/formatCurrency';
import {styles} from './styles';

type Props = {
  title: string;
  description: string;
  amount: number;
  quantity: number;
  isLast?: boolean;
  onEdit?: () => void;
};

export function ServiceItemRow({
  title,
  description,
  amount,
  quantity,
  isLast = false,
  onEdit,
}: Props) {
  return (
    <View style={[styles.row, isLast && styles.rowLast]}>
      <View style={styles.mainInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {description}
        </Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.amount}>{formatCurrency(amount)}</Text>
        <Text style={styles.quantity}>Qt: {quantity}</Text>
      </View>
      <Pressable
        style={styles.editButton}
        onPress={onEdit}
        android_ripple={{color: theme.COLORS.GRAY_200}}>
        <PencilSimpleIcon size={16} color={theme.COLORS.PURPLE_BASE} />
      </Pressable>
    </View>
  );
}
