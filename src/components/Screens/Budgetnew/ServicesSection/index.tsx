// ServicesSection.tsx
import {Pressable, Text} from 'react-native';
import {PlusIcon} from 'phosphor-react-native';
import theme from '@/src/Global/theme';
import {FormSection} from '@/src/components/ui/FormSection';
import {ServiceItemRow} from '@/src/components/ui/ServiceItemRow';
import {styles} from '@/src/app/Main/BudgetNew/styles';
import {BriefcaseBusinessIcon} from 'lucide-react-native';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

type Props = {
  services: ServiceItem[];
  onAddService: () => void;
  onEditService: (service: ServiceItem) => void;
};

export function ServicesSection({
  services,
  onAddService,
  onEditService,
}: Props) {
  return (
    <FormSection
      title="Serviços inclusos"
      icon={
        <BriefcaseBusinessIcon size={16} color={theme.COLORS.PURPLE_BASE} />
      }>
      {services.map((service, index) => (
        <ServiceItemRow
          key={service.id}
          title={service.title}
          description={service.description}
          amount={service.amount}
          quantity={service.quantity}
          isLast={index === services.length - 1}
          onEdit={() => onEditService(service)}
        />
      ))}

      <Pressable style={styles.addButton} onPress={onAddService}>
        <PlusIcon size={18} color={theme.COLORS.PURPLE_BASE} />
        <Text style={styles.addButtonText}>Adicionar serviço</Text>
      </Pressable>
    </FormSection>
  );
}
