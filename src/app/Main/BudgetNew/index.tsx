// BudgetNew.tsx
import {useMemo, useState} from 'react';
import {Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useRouter} from 'expo-router';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';
import {saveBudget} from '@/src/storage/budgets';
import {budgetGeneralInfoSchema} from '@/src/Validation/BudgetNew.validation';

import {styles} from './styles';
import {BudgetFormActions} from '@/src/components/Screens/Budgetnew/BudgetFormActions';
import {InvestmentSummary} from '@/src/components/Screens/Budgetnew/InvestmentSummary';
import {BudgetHeader} from '@/src/components/ui/BudgetHeader';
import {GeneralInfoSection} from '@/src/components/ui/GeneralInfoSection';
import {ServiceBottomSheet} from '@/src/components/ui/ServiceBottomSheet';
import {ServicesSection} from '@/src/components/ui/ServicesSection';
import {StatusSection} from '@/src/components/ui/StatusSection';
import {parseBRLCurrencyToNumber} from '@/src/utils/parseBRLCurrencyToNumber';

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  amount: number;
  quantity: number;
};

export default function BudgetNew() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [client, setClient] = useState('');
  const [status, setStatus] = useState<BudgetStatus>('draft');
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [discountPercent] = useState(8);
  const [discountAmount] = useState(200);
  const [isServiceSheetOpen, setIsServiceSheetOpen] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [serviceTitle, setServiceTitle] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceAmount, setServiceAmount] = useState('');
  const [serviceQuantity, setServiceQuantity] = useState(1);

  const [titleError, setTitleError] = useState('');
  const [clientError, setClientError] = useState('');

  const itemsCount = useMemo(
    () => services.reduce((total, item) => total + item.quantity, 0),
    [services],
  );

  const subtotal = useMemo(
    () =>
      services.reduce((total, item) => total + item.amount * item.quantity, 0),
    [services],
  );

  const total = useMemo(
    () => subtotal - discountAmount,
    [subtotal, discountAmount],
  );

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (titleError) setTitleError('');
  };

  const handleClientChange = (value: string) => {
    setClient(value);
    if (clientError) setClientError('');
  };

  const openNewService = () => {
    setEditingServiceId(null);
    setServiceTitle('');
    setServiceDescription('');
    setServiceAmount('');
    setServiceQuantity(1);
    setIsServiceSheetOpen(true);
  };

  const openEditService = (service: ServiceItem) => {
    setEditingServiceId(service.id);
    setServiceTitle(service.title);
    setServiceDescription(service.description);
    setServiceAmount(
      service.amount ? `R$ ${service.amount.toFixed(2).replace('.', ',')}` : '',
    );
    setServiceQuantity(service.quantity);
    setIsServiceSheetOpen(true);
  };

  const handleSaveService = () => {
    const amountValue = parseBRLCurrencyToNumber(serviceAmount);

    const payload: ServiceItem = {
      id: editingServiceId || String(Date.now()),
      title: serviceTitle.trim(),
      description: serviceDescription.trim(),
      amount: amountValue,
      quantity: serviceQuantity,
    };

    setServices(prev => {
      if (editingServiceId) {
        return prev.map(item =>
          item.id === editingServiceId ? payload : item,
        );
      }
      return [...prev, payload];
    });

    setIsServiceSheetOpen(false);
  };

  const handleDeleteService = () => {
    if (editingServiceId) {
      setServices(prev => prev.filter(item => item.id !== editingServiceId));
    }
    setIsServiceSheetOpen(false);
  };

  const handleDecreaseQty = () => {
    setServiceQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncreaseQty = () => {
    setServiceQuantity(prev => prev + 1);
  };

  const validateForm = () => {
    setTitleError('');
    setClientError('');

    const result = budgetGeneralInfoSchema.safeParse({title, client});

    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;

      if (errors.title?.[0]) setTitleError(errors.title[0]);
      if (errors.client?.[0]) setClientError(errors.client[0]);

      Alert.alert(
        'Campos obrigatórios',
        'Preencha o título e o cliente antes de salvar o orçamento',
      );
      return false;
    }

    return true;
  };

  const handleSaveBudget = async () => {
    if (!validateForm()) return;

    const now = new Date().toISOString();
    await saveBudget({
      id: String(Date.now()),
      title: title.trim(),
      client: client.trim(),
      status,
      services,
      discountPercent,
      discountAmount,
      total,
      createdAt: now,
      updatedAt: now,
    });

    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <BudgetHeader title="Orçamento" onBack={() => router.back()} />

        <GeneralInfoSection
          title={title}
          client={client}
          onChangeTitle={handleTitleChange}
          onChangeClient={handleClientChange}
          titleError={titleError}
          clientError={clientError}
        />

        <StatusSection selectedStatus={status} onStatusChange={setStatus} />

        <ServicesSection
          services={services}
          onAddService={openNewService}
          onEditService={openEditService}
        />

        <InvestmentSummary
          itemsCount={itemsCount}
          subtotal={subtotal}
          discountPercent={discountPercent}
          discountAmount={discountAmount}
          total={total}
        />

        <BudgetFormActions
          onCancel={() => router.back()}
          onSave={handleSaveBudget}
        />
      </KeyboardAwareScrollView>

      <ServiceBottomSheet
        visible={isServiceSheetOpen}
        title={serviceTitle}
        description={serviceDescription}
        amount={serviceAmount}
        quantity={serviceQuantity}
        onClose={() => setIsServiceSheetOpen(false)}
        onChangeTitle={setServiceTitle}
        onChangeDescription={setServiceDescription}
        onChangeAmount={setServiceAmount}
        onDecreaseQty={handleDecreaseQty}
        onIncreaseQty={handleIncreaseQty}
        onDelete={handleDeleteService}
        onSave={handleSaveService}
      />
    </SafeAreaView>
  );
}
