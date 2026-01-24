import {
  Modal,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {X} from 'phosphor-react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import theme from '@/src/Global/theme';
import {statusOptions, sortOptions} from '@/src/constants/constants';
import {BudgetStatus, SortOption} from '@/src/Interfaces/HomeInterfaces';
import {styles} from './styles';

type Props = {
  visible: boolean;
  onClose: () => void;
  selectedStatuses: Set<BudgetStatus>;
  onToggleStatus: (status: BudgetStatus) => void;
  sortOption: SortOption;
  onChangeSort: (sort: SortOption) => void;
  onReset: () => void;
  onApply: () => void;
};

export function FilterBottomSheet({
  visible,
  onClose,
  selectedStatuses,
  onToggleStatus,
  sortOption,
  onChangeSort,
  onReset,
  onApply,
}: Props) {
  const insets = useSafeAreaInsets();

  return (
    <Modal transparent visible={visible} animationType="slide">
      <View style={styles.root}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.backdrop} />
        </TouchableWithoutFeedback>
        <View
          style={[
            styles.sheet,
            {
              paddingBottom: insets.bottom + 16,
            },
          ]}>
          <View style={styles.header}>
            <Text style={styles.title}>Filtrar e ordenar</Text>

            <Pressable onPress={onClose} hitSlop={12}>
              <X size={22} color={theme.COLORS.TEXT_MUTED} />
            </Pressable>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Status</Text>

            {statusOptions.map(option => (
              <CheckRow
                key={option.key}
                label={option.label}
                color={option.color}
                checked={selectedStatuses.has(option.key)}
                onPress={() => onToggleStatus(option.key)}
              />
            ))}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Ordenação</Text>

            {sortOptions.map(option => (
              <RadioRow
                key={option.key}
                label={option.label}
                selected={sortOption === option.key}
                onPress={() => onChangeSort(option.key)}
              />
            ))}
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.ghostButton} onPress={onReset}>
              <Text style={styles.ghostButtonText}>Resetar filtros</Text>
            </Pressable>

            <Pressable style={styles.primaryButton} onPress={onApply}>
              <Text style={styles.primaryButtonText}>Aplicar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

type CheckRowProps = {
  label: string;
  color: string;
  checked: boolean;
  onPress: () => void;
};

function CheckRow({label, color, checked, onPress}: CheckRowProps) {
  return (
    <Pressable style={styles.checkboxRow} onPress={onPress}>
      <View
        style={[
          styles.checkboxBox,
          checked && {
            borderColor: color,
            backgroundColor: theme.COLORS.BACKGROUND_ELEVATED,
          },
        ]}>
        {checked && (
          <View style={[styles.checkboxFill, {backgroundColor: color}]} />
        )}
      </View>

      <Text
        style={[
          styles.checkboxLabel,
          {
            color,
            backgroundColor: `${color}20`,
            padding: 3,
            borderRadius: 4,
          },
        ]}>
        {label}
      </Text>
    </Pressable>
  );
}

type RadioRowProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

function RadioRow({label, selected, onPress}: RadioRowProps) {
  return (
    <Pressable style={styles.radioRow} onPress={onPress}>
      <View
        style={[
          styles.radioOuter,
          selected && {
            borderColor: theme.COLORS.ACCENT_BRAND,
          },
        ]}>
        {selected && <View style={styles.radioInner} />}
      </View>

      <Text style={styles.radioLabel}>{label}</Text>
    </Pressable>
  );
}
