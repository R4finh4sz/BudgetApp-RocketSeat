import {useMemo, useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Briefcase,
  CaretLeft,
  Check,
  Minus,
  Plus,
  Tag,
  TrashSimple,
  X,
} from 'phosphor-react-native';
import {useRouter} from 'expo-router';
import {CreditCard, Store} from 'lucide-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

import theme from '@/src/Global/theme';
import {FormInput} from '@/src/components/ui/FormInput';
import {FormSection} from '@/src/components/ui/FormSection';
import {ServiceItemRow} from '@/src/components/ui/ServiceItemRow';
import {StatusOption} from '@/src/components/ui/StatusOption';
import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';
import {saveBudget} from '@/src/storage/budgets';
import {formatCurrency} from '@/src/utils/formatCurrency';
import {styles} from './styles';

const STATUS_ORDER: BudgetStatus[] = ['draft', 'approved', 'sent', 'rejected'];

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
    setServiceAmount(String(service.amount));
    setServiceQuantity(service.quantity);
    setIsServiceSheetOpen(true);
  };

  const handleSaveService = () => {
    const amountValue = Number(serviceAmount.replace(',', '.')) || 0;
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

  const handleSaveBudget = async () => {
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
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <CaretLeft size={20} color={theme.COLORS.TEXT_CONTRAST} />
          </Pressable>
          <Text style={styles.headerTitle}>Orcamento</Text>
          <View style={styles.headerSpacer} />
        </View>

        <FormSection
          title="Informacoes gerais"
          icon={<Store size={16} color={theme.COLORS.PURPLE_BASE} />}>
          <FormInput
            value={title}
            onChangeText={setTitle}
            placeholder="Titulo"
            style={styles.inputSpacing}
          />
          <FormInput
            value={client}
            onChangeText={setClient}
            placeholder="Cliente"
          />
        </FormSection>

        <FormSection
          title="Status"
          icon={<Tag size={16} color={theme.COLORS.PURPLE_BASE} />}>
          <View style={styles.statusGrid}>
            {STATUS_ORDER.map(option => (
              <View key={option} style={styles.statusItem}>
                <StatusOption
                  status={option}
                  selected={status === option}
                  onPress={() => setStatus(option)}
                />
              </View>
            ))}
          </View>
        </FormSection>

        <FormSection
          title="Servicos inclusos"
          icon={<Briefcase size={16} color={theme.COLORS.PURPLE_BASE} />}>
          {services.map((service, index) => (
            <ServiceItemRow
              key={service.id}
              title={service.title}
              description={service.description}
              amount={service.amount}
              quantity={service.quantity}
              isLast={index === services.length - 1}
              onEdit={() => openEditService(service)}
            />
          ))}
          <Pressable style={styles.addButton} onPress={openNewService}>
            <Plus size={18} color={theme.COLORS.PURPLE_BASE} />
            <Text style={styles.addButtonText}>Adicionar servico</Text>
          </Pressable>
        </FormSection>

        <FormSection
          title="Investimento"
          icon={<CreditCard size={16} color={theme.COLORS.PURPLE_BASE} />}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal</Text>
            <View style={styles.summaryMeta}>
              <Text style={styles.summaryMetaText}>{itemsCount} itens</Text>
              <Text style={styles.summaryValue}>
                {formatCurrency(subtotal)}
              </Text>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={styles.discountLabel}>
              <Text style={styles.summaryLabel}>Desconto</Text>
              <View style={styles.discountBadge}>
                <Text style={styles.discountBadgeText}>
                  {discountPercent} %
                </Text>
              </View>
            </View>
            <Text style={styles.summaryValueDanger}>
              - {formatCurrency(discountAmount)}
            </Text>
          </View>

          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Valor total</Text>
            <Text style={styles.totalValue}>{formatCurrency(total)}</Text>
          </View>
        </FormSection>
        <View style={styles.footer}>
          <Pressable
            style={styles.secondaryButton}
            onPress={() => router.back()}>
            <Text style={styles.secondaryButtonText}>Cancelar</Text>
          </Pressable>
          <Pressable style={styles.primaryButton} onPress={handleSaveBudget}>
            <Text style={styles.primaryButtonText}>Salvar</Text>
          </Pressable>
        </View>
      </KeyboardAwareScrollView>

      <Modal transparent visible={isServiceSheetOpen} animationType="slide">
        <View style={styles.sheetRoot}>
          <TouchableWithoutFeedback
            onPress={() => setIsServiceSheetOpen(false)}>
            <View style={styles.sheetBackdrop} />
          </TouchableWithoutFeedback>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.sheetContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>Servico</Text>
              <Pressable
                onPress={() => setIsServiceSheetOpen(false)}
                hitSlop={12}>
                <X size={20} color={theme.COLORS.TEXT_MUTED} />
              </Pressable>
            </View>

            <TextInput
              value={serviceTitle}
              onChangeText={setServiceTitle}
              placeholder="Design de interfaces"
              placeholderTextColor={theme.COLORS.TEXT_MUTED}
              style={styles.sheetInput}
            />

            <TextInput
              value={serviceDescription}
              onChangeText={setServiceDescription}
              placeholder="Criacao de wireframes e prototipos de alta fidelidade"
              placeholderTextColor={theme.COLORS.TEXT_MUTED}
              style={[styles.sheetInput, styles.sheetTextarea]}
              multiline
            />

            <View style={styles.sheetRow}>
              <View style={styles.sheetMoneyField}>
                <Text style={styles.sheetCurrency}>R$</Text>
                <TextInput
                  value={serviceAmount}
                  onChangeText={setServiceAmount}
                  placeholder="0,00"
                  placeholderTextColor={theme.COLORS.TEXT_MUTED}
                  keyboardType="numeric"
                  style={styles.sheetMoneyInput}
                />
              </View>

              <View style={styles.sheetQtyField}>
                <Pressable
                  style={styles.sheetQtyButton}
                  onPress={() =>
                    setServiceQuantity(prev => (prev > 1 ? prev - 1 : 1))
                  }>
                  <Minus size={16} color={theme.COLORS.PURPLE_BASE} />
                </Pressable>
                <Text style={styles.sheetQtyText}>{serviceQuantity}</Text>
                <Pressable
                  style={styles.sheetQtyButton}
                  onPress={() => setServiceQuantity(prev => prev + 1)}>
                  <Plus size={16} color={theme.COLORS.PURPLE_BASE} />
                </Pressable>
              </View>
            </View>

            <View style={styles.sheetActions}>
              <Pressable
                style={styles.sheetDeleteButton}
                onPress={handleDeleteService}>
                <TrashSimple size={18} color={theme.COLORS.DANGER_BASE} />
              </Pressable>
              <Pressable
                style={styles.sheetSaveButton}
                onPress={handleSaveService}>
                <Check size={18} color={theme.COLORS.BACKGROUND_ELEVATED} />
                <Text style={styles.sheetSaveButtonText}>Salvar</Text>
              </Pressable>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
