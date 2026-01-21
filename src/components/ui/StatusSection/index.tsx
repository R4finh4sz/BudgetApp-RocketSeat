import {View} from 'react-native';
import {TagIcon} from 'phosphor-react-native';
import theme from '@/src/Global/theme';
import {FormSection} from '@/src/components/ui/FormSection';
import {StatusOption} from '@/src/components/ui/StatusOption';
import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';
import {styles} from '@/src/app/Main/BudgetNew/styles';

const STATUS_ORDER: BudgetStatus[] = ['draft', 'approved', 'sent', 'rejected'];

type Props = {
  selectedStatus: BudgetStatus;
  onStatusChange: (status: BudgetStatus) => void;
};

export function StatusSection({selectedStatus, onStatusChange}: Props) {
  return (
    <FormSection
      title="Status"
      icon={<TagIcon size={16} color={theme.COLORS.PURPLE_BASE} />}>
      <View style={styles.statusGrid}>
        {STATUS_ORDER.map(option => (
          <View key={option} style={styles.statusItem}>
            <StatusOption
              status={option}
              selected={selectedStatus === option}
              onPress={() => onStatusChange(option)}
            />
          </View>
        ))}
      </View>
    </FormSection>
  );
}
