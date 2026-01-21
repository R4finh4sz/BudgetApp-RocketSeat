import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

type Props = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

export function FormSection({title, icon, children}: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconWrap}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
}
