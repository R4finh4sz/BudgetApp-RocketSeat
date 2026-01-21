import {Pressable, Text, View} from 'react-native';
import {CaretLeftIcon} from 'phosphor-react-native';
import theme from '@/src/Global/theme';
import {styles} from '@/src/app/Main/BudgetNew/styles';

type Props = {
  title: string;
  onBack: () => void;
};

export function BudgetHeader({title, onBack}: Props) {
  return (
    <View style={styles.headerRow}>
      <Pressable style={styles.backButton} onPress={onBack}>
        <CaretLeftIcon size={20} color={theme.COLORS.TEXT_CONTRAST} />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.headerSpacer} />
    </View>
  );
}
