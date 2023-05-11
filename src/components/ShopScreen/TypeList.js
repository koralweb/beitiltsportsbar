import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import productsList from '../../data/products';

const filterProductTypes = () => {
  const arr = ['All'];
  productsList.forEach(prod => {
    if (!arr.includes(prod.type)) arr.push(prod.type);
  });
  return arr;
};

const TypeList = () => {
  const renderTypeList = () => {
    return filterProductTypes().map(el => (
      <TouchableOpacity style={styles.item} key={el}>
        <Text style={styles.text}>{el}</Text>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.typeList}>{renderTypeList()}</View>;
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
  },
  typeList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
  color: '#F94332',
  fontWeight: 500,
  paddingLeft: 10,
  paddingRight: 10,
}

});

export default TypeList;
