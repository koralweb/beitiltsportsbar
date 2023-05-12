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
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>
      <Text style={styles.cnt}>{cnt}</Text>
      <TouchableOpacity onPress={inc} style={styles.operator}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    borderWidth: 2,
    marginRight: 20,
     
  },
  operator: {
    padding: 5,
    
    
  },
  text: {
    margin: 5,
    fontSize: 20,
    fontWeight: 700,

  },
  cnt: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 900,

  },
});

export default Counter;
