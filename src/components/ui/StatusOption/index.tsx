import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {STATUS_CONFIG} from '@/src/constants/constants';
import {BudgetStatus} from '@/src/Interfaces/HomeInterfaces';
import {styles} from './styles';

type Props = {
  status: BudgetStatus;
  selected: boolean;
  onPress: () => void;
};

export function StatusOption({status, selected, onPress}: Props) {
  const config = STATUS_CONFIG[status];

  return (
    <Pressable
      style={[
        styles.option,
        selected && {borderColor: config.color, backgroundColor: '#FFFFFF'},
      ]}
      onPress={onPress}>
      <View
        style={[
          styles.radioOuter,
          selected && {borderColor: config.color},
        ]}>
        {selected && (
          <View style={[styles.radioInner, {backgroundColor: config.color}]} />
        )}
      </View>
      <View style={[styles.labelPill, {backgroundColor: config.background}]}>
        <View style={[styles.labelDot, {backgroundColor: config.color}]} />
        <Text style={[styles.labelText, {color: config.color}]}>
          {config.label}
        </Text>
      </View>
    </Pressable>
  );
}
