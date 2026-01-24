import {Text, View} from 'react-native';
import {ClipboardListIcon} from 'lucide-react-native';
import theme from '@/src/Global/theme';
import {formatCurrency} from '@/src/utils/formatCurrency';
import {styles} from '../styles';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

type Props = {
  services: ServiceItem[];
};

export function BudgetDetailsServicesCard({services}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <View style={styles.iconMini}>
          <ClipboardListIcon size={16} color={theme.COLORS.PURPLE_BASE} />
        </View>
        <Text style={styles.sectionTitle}>Serviços inclusos</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.servicesList}>
        {services.map((s, idx) => (
          <View
            key={s.id}
            style={[
              styles.serviceRow,
              idx === services.length - 1 && styles.serviceRowLast,
            ]}>
            <View style={styles.serviceMain}>
              <Text style={styles.serviceTitle}>{s.title}</Text>
              <Text style={styles.serviceDesc} numberOfLines={2}>
                {s.description}
              </Text>
            </View>

            <View style={styles.serviceMeta}>
              <Text style={styles.serviceAmount}>
                {formatCurrency(s.amount)}
              </Text>
              <Text style={styles.serviceQty}>Qt: {s.quantity}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
