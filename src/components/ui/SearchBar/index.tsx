
import {  TextInput, View } from 'react-native';
import {  MagnifyingGlassIcon } from 'phosphor-react-native';

import theme from '@/src/Global/theme';
import { styles } from './styles';

type Props = {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
};

export function SearchBar({ value, onChangeText, placeholder = 'Título ou cliente' }: Props) {
  return (
    <View style={styles.container}>
      <MagnifyingGlassIcon size={20} color={theme.COLORS.TEXT_MUTED} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.COLORS.TEXT_MUTED}
        style={styles.input}
      />
    </View>
  );
}

