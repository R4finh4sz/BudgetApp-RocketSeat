import {Text, TextInput, View, StyleSheet, TextInputProps} from 'react-native';
import theme from '@/src/Global/theme';
import {styles} from './styles';

type Props = TextInputProps & {
  error?: string;
};

export function FormInput({error, style, ...rest}: Props) {
  return (
    <View>
      <TextInput
        style={[styles.input, error && styles.inputError, style]}
        placeholderTextColor={theme.COLORS.TEXT_MUTED}
        {...rest}
      />
      {error && <Text style={styles.inputError}>{error}</Text>}
    </View>
  );
}
