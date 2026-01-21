import {Store} from 'lucide-react-native';

import theme from '@/src/Global/theme';
import {FormInput} from '@/src/components/ui/FormInput';
import {FormSection} from '@/src/components/ui/FormSection';
import {styles} from '@/src/app/Main/BudgetNew/styles';

type Props = {
  title: string;
  client: string;
  onChangeTitle: (value: string) => void;
  onChangeClient: (value: string) => void;
  titleError?: string;
  clientError?: string;
};

export function GeneralInfoSection({
  title,
  client,
  onChangeTitle,
  onChangeClient,
  titleError,
  clientError,
}: Props) {
  return (
    <FormSection
      title="Informacoes gerais"
      icon={<Store size={16} color={theme.COLORS.PURPLE_BASE} />}>
      <FormInput
        value={title}
        onChangeText={onChangeTitle}
        placeholder="Titulo"
        style={styles.inputSpacing}
        error={titleError}
      />
      <FormInput
        value={client}
        onChangeText={onChangeClient}
        placeholder="Cliente"
        error={clientError}
      />
    </FormSection>
  );
}
