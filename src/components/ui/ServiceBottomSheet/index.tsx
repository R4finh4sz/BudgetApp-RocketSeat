import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from 'react-native';
import {PlusIcon, TrashSimpleIcon, XIcon} from 'phosphor-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaskInput, {Masks} from 'react-native-mask-input';
import {CheckCheckIcon, MinusIcon} from 'lucide-react-native';

import theme from '@/src/Global/theme';
import {styles} from './styles';
import {parseBRLCurrencyToNumber} from '@/src/utils/parseBRLCurrencyToNumber';

type Props = {
  visible: boolean;
  title: string;
  description: string;
  amount: string;
  quantity: number;
  onClose: () => void;
  onChangeTitle: (value: string) => void;
  onChangeDescription: (value: string) => void;
  onChangeAmount: (value: string) => void;
  onDecreaseQty: () => void;
  onIncreaseQty: () => void;
  onDelete: () => void;
  onSave: () => void;
};

export function ServiceBottomSheet({
  visible,
  title,
  description,
  amount,
  quantity,
  onClose,
  onChangeTitle,
  onChangeDescription,
  onChangeAmount,
  onDecreaseQty,
  onIncreaseQty,
  onDelete,
  onSave,
}: Props) {
  const insets = useSafeAreaInsets();

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Erro', 'Informe o título do serviço');
      return;
    }

    if (!description.trim()) {
      Alert.alert('Erro', 'Informe a descrição do serviço');
      return;
    }

    const amountNumber = parseBRLCurrencyToNumber(amount);
    if (amountNumber <= 0) {
      Alert.alert('Erro', 'Informe um valor maior que zero');
      return;
    }

    if (quantity <= 0) {
      Alert.alert('Erro', 'A quantidade deve ser maior que zero');
      return;
    }

    onSave();
  };

  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.root}>
          <View style={styles.backdrop} />

          <View
            style={[
              styles.sheetContainer,
              {paddingBottom: insets.bottom + 16},
            ]}>
            <KeyboardAwareScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false}>
              <View style={styles.header}>
                <Text style={styles.title}>Serviço</Text>
                <Pressable onPress={onClose} hitSlop={12}>
                  <XIcon size={20} color={theme.COLORS.TEXT_MUTED} />
                </Pressable>
              </View>

              <MaskInput
                value={title}
                onChangeText={text => onChangeTitle(text)}
                placeholder="Design de interfaces"
                placeholderTextColor={theme.COLORS.TEXT_MUTED}
                style={styles.input}
              />

              <MaskInput
                value={description}
                onChangeText={text => onChangeDescription(text)}
                placeholder="Criação de wireframes e protótipos de alta fidelidade"
                placeholderTextColor={theme.COLORS.TEXT_MUTED}
                style={[styles.input, styles.textarea]}
                multiline
              />

              <View style={styles.row}>
                <View style={styles.moneyField}>
                  <MaskInput
                    value={amount}
                    onChangeText={masked => onChangeAmount(masked)}
                    mask={Masks.BRL_CURRENCY}
                    keyboardType="numeric"
                    placeholder="0,00"
                    placeholderTextColor={theme.COLORS.TEXT_MUTED}
                    style={styles.moneyInput}
                  />
                </View>

                <View style={styles.qtyField}>
                  <Pressable style={styles.qtyButton} onPress={onDecreaseQty}>
                    <MinusIcon size={16} color={theme.COLORS.PURPLE_BASE} />
                  </Pressable>

                  <Text style={styles.qtyText}>{quantity}</Text>

                  <Pressable style={styles.qtyButton} onPress={onIncreaseQty}>
                    <PlusIcon size={16} color={theme.COLORS.PURPLE_BASE} />
                  </Pressable>
                </View>
              </View>

              <View style={styles.actions}>
                <Pressable style={styles.deleteButton} onPress={onDelete}>
                  <TrashSimpleIcon size={18} color={theme.COLORS.DANGER_BASE} />
                </Pressable>

                <Pressable style={styles.saveButton} onPress={handleSave}>
                  <CheckCheckIcon
                    size={18}
                    color={theme.COLORS.BACKGROUND_ELEVATED}
                  />
                  <Text style={styles.saveButtonText}>Salvar</Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
