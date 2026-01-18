import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import theme from '../../../Global/theme';
import { styles } from './styles';

type Props = {
  onPress: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
};

export function IconButton({ onPress, children, style }: Props) {
  return (
    <Pressable
      style={[styles.button, style]}
      onPress={onPress}
      android_ripple={{ color: theme.COLORS.GRAY_300 }}
    >
      {children}
    </Pressable>
  );
}


