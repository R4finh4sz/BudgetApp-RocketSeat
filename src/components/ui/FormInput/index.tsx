import React from 'react';
import {TextInput, TextStyle} from 'react-native';

import theme from '@/src/Global/theme';
import {styles} from './styles';

type Props = {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  style?: TextStyle;
};

export function FormInput({value, placeholder, onChangeText, style}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.COLORS.TEXT_MUTED}
      style={[styles.input, style]}
    />
  );
}
