import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Check, Minus, Plus, TrashSimple, X} from 'phosphor-react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';

import theme from '@/src/Global/theme';
import {styles} from './styles';

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
  return (
    <Modal transparent visible={visible} animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.root}>
          <View style={styles.backdrop} />
          <View style={styles.sheetContainer}>
            <KeyboardAwareScrollView
              style={styles.scrollView}
              contentContainerStyle={styles.contentContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              bounces={false}>
              <View style={styles.header}>
                <Text style={styles.title}>Servico</Text>
                <Pressable onPress={onClose} hitSlop={12}>
                  <X size={20} color={theme.COLORS.TEXT_MUTED} />
                </Pressable>
              </View>

              <TextInput
                value={title}
                onChangeText={onChangeTitle}
                placeholder="Design de interfaces"
                placeholderTextColor={theme.COLORS.TEXT_MUTED}
                style={styles.input}
              />

              <TextInput
                value={description}
                onChangeText={onChangeDescription}
                placeholder="Criacao de wireframes e prototipos de alta fidelidade"
                placeholderTextColor={theme.COLORS.TEXT_MUTED}
                style={[styles.input, styles.textarea]}
                multiline
              />

              <View style={styles.row}>
                <View style={styles.moneyField}>
                  <Text style={styles.currency}>R$</Text>
                  <TextInput
                    value={amount}
                    onChangeText={onChangeAmount}
                    placeholder="0,00"
                    placeholderTextColor={theme.COLORS.TEXT_MUTED}
                    keyboardType="numeric"
                    style={styles.moneyInput}
                  />
                </View>

                <View style={styles.qtyField}>
                  <Pressable style={styles.qtyButton} onPress={onDecreaseQty}>
                    <Minus size={16} color={theme.COLORS.PURPLE_BASE} />
                  </Pressable>
                  <Text style={styles.qtyText}>{quantity}</Text>
                  <Pressable style={styles.qtyButton} onPress={onIncreaseQty}>
                    <Plus size={16} color={theme.COLORS.PURPLE_BASE} />
                  </Pressable>
                </View>
              </View>

              <View style={styles.actions}>
                <Pressable style={styles.deleteButton} onPress={onDelete}>
                  <TrashSimple size={18} color={theme.COLORS.DANGER_BASE} />
                </Pressable>
                <Pressable style={styles.saveButton} onPress={onSave}>
                  <Check size={18} color={theme.COLORS.BACKGROUND_ELEVATED} />
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
