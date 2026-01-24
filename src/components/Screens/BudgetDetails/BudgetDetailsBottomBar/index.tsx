import {Text, TouchableOpacity, View} from 'react-native';
import {CopyIcon, PencilIcon, SendIcon, Trash2Icon} from 'lucide-react-native';

import theme from '@/src/Global/theme';
import {styles} from '@/src/components/Screens/BudgetDetails/styles';

type Props = {
  onDelete: () => void;
  onDuplicate: () => void;
  onEdit: () => void;
  onShare: () => void;
};

type RoundIconButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
};

function RoundIconButton({onPress, children}: RoundIconButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.roundBtn}>
      {children}
    </TouchableOpacity>
  );
}

export function BudgetDetailsBottomBar({
  onDelete,
  onDuplicate,
  onEdit,
  onShare,
}: Props) {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomLeft}>
        <RoundIconButton onPress={onDelete}>
          <Trash2Icon size={18} color={theme.COLORS.DANGER_BASE} />
        </RoundIconButton>

        <RoundIconButton onPress={onDuplicate}>
          <CopyIcon size={18} color={theme.COLORS.PURPLE_BASE} />
        </RoundIconButton>

        <RoundIconButton onPress={onEdit}>
          <PencilIcon size={18} color={theme.COLORS.PURPLE_BASE} />
        </RoundIconButton>
      </View>

      <TouchableOpacity
        style={styles.shareBtn}
        onPress={onShare}
        activeOpacity={0.8}>
        <SendIcon size={18} color={theme.COLORS.BACKGROUND_ELEVATED} />
        <Text style={styles.shareText}>Compartilhar</Text>
      </TouchableOpacity>
    </View>
  );
}
