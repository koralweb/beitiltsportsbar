import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Counter from './Counter';
import {observer} from 'mobx-react-lite';
import products from '../../mobx/products';

const Product = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);

  const addProduct = () => {
    products.addProduct(pr.id, cnt);
  };

  return (
    <View style={styles.item}>
      <Text>{pr.title}</Text>
      <Image source={pr.image} style={styles.productImage} />
      <Text>{pr.desc}</Text>
      {pr.added ? (
        <View style={styles.addedBtn}>
          <Text>V</Text>
        </View>
      ) : (
        <View style={styles.counterAndBtn}>
          <Counter cnt={cnt} setCnt={setCnt} />
          <TouchableOpacity style={styles.addBtn} onPress={addProduct}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: 200,
    height: 200,
  },
  counterAndBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addBtn: {
    padding: 5,
    borderWidth: 1,
  },
  addedBtn: {
    padding: 5,
    borderWidth: 1,
    width: 50,
    alignSelf: 'flex-end',
  },
});

export default observer(Product);
