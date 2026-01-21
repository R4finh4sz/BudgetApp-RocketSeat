import {Store} from 'lucide-react-native';
import theme from '@/src/Global/theme';
import {FormSection} from '@/src/components/ui/FormSection';
import {FormInput} from '@/src/components/ui/FormInput';
import {styles} from '@/src/app/Main/BudgetNew/styles';

type Props = {
  title: string;
  client: string;
  onTitleChange: (value: string) => void;
  onClientChange: (value: string) => void;
};

export function GeneralInfoSection({
  title,
  client,
  onTitleChange,
  onClientChange,
}: Props) {
  return (
    <FormSection
      title="Informacoes gerais"
      icon={<Store size={16} color={theme.COLORS.PURPLE_BASE} />}>
      <FormInput
        value={title}
        onChangeText={onTitleChange}
        placeholder="Titulo"
        style={styles.inputSpacing}
      />
      <FormInput
        value={client}
        onChangeText={onClientChange}
        placeholder="Cliente"
      />
    </FormSection>
  );
}
