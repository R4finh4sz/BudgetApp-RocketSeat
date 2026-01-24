import {Pressable, Text, View} from 'react-native';
import {ChevronLeftIcon} from 'lucide-react-native';
import theme from '@/src/Global/theme';
import {StatusBadge} from '@/src/components/ui/StatusBadge';
import {styles} from '@/src/components/Screens/BudgetDetails/styles';

type BudgetStatus = 'draft' | 'approved' | 'sent' | 'rejected';

type Props = {
  title: string;
  status: BudgetStatus;
  onBack: () => void;
};

export function BudgetDetailsHeader({title, status, onBack}: Props) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onBack} hitSlop={12} style={styles.backBtn}>
        <ChevronLeftIcon size={22} color={theme.COLORS.TEXT_CONTRAST} />
      </Pressable>

      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>

      <StatusBadge status={status} />
    </View>
  );
}
