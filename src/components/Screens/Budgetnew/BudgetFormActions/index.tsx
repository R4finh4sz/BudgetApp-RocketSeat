import {Pressable, Text, View} from 'react-native';
import {styles} from '@/src/app/Main/BudgetNew/styles';

type Props = {
  onCancel: () => void;
  onSave: () => void;
};

export function BudgetFormActions({onCancel, onSave}: Props) {
  return (
    <View style={styles.footer}>
      <Pressable style={styles.secondaryButton} onPress={onCancel}>
        <Text style={styles.secondaryButtonText}>Cancelar</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={onSave}>
        <Text style={styles.primaryButtonText}>Salvar</Text>
      </Pressable>
    </View>
  );
}
