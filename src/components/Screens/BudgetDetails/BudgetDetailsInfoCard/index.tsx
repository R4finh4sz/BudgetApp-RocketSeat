import {Text, View} from 'react-native';
import {BriefcaseBusinessIcon} from 'lucide-react-native';
import theme from '@/src/Global/theme';
import {styles} from '@/src/components/Screens/BudgetDetails/styles';

type Props = {
  title: string;
  client: string;
  createdAt: string;
  updatedAt: string;
};

export function BudgetDetailsInfoCard({
  title,
  client,
  createdAt,
  updatedAt,
}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.iconBox}>
          <BriefcaseBusinessIcon size={18} color={theme.COLORS.PURPLE_BASE} />
        </View>

        <Text style={styles.bigTitle}>{title}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.infoGrid}>
        <View style={styles.infoCol}>
          <Text style={styles.label}>Cliente</Text>
          <Text style={styles.value}>{client}</Text>
        </View>

        <View style={styles.infoRow}>
          <View style={styles.infoCol}>
            <Text style={styles.label}>Criado em</Text>
            <Text style={styles.value}>{createdAt}</Text>
          </View>

          <View style={styles.infoCol}>
            <Text style={styles.label}>Atualizado em</Text>
            <Text style={styles.value}>{updatedAt}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
