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

const TypeList = ({setType}) => {
  const renderTypeList = () => {
    return filterProductTypes().map(el => (
      <TouchableOpacity
        style={styles.item}
        key={el}
        onPress={() => setType(el)}>
        <Text style={styles.text}>{el}</Text>
      </TouchableOpacity>
    ));
  };

  return <View style={styles.typeList}>{renderTypeList()}</View>;
};

const styles = StyleSheet.create({
  item: {},
  typeList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    color: '#F94332',
    fontWeight: 500,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
  },
});

export default TypeList;
