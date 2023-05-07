import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Counter = ({cnt, setCnt}) => {
  const inc = () => {
    setCnt(cnt + 1);
  };

  const dec = () => {
    if (cnt === 1) return;
    setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={dec} style={styles.operator}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{cnt}</Text>
      <TouchableOpacity onPress={inc} style={styles.operator}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
  },
  operator: {
    padding: 3,
    borderWidth: 1,
  },
});

export default Counter;
