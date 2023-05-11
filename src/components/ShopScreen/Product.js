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
      <Text style={styles.title}>{pr.title}</Text>
      <Image source={pr.image} style={styles.productImage} />
      <Text style={styles.desc}>{pr.desc}</Text>
      {pr.added ? (
        <View style={styles.addedBtn}>
          <Text>V</Text>
        </View>
      ) : (
        <View style={styles.counterAndBtn}>
          <Counter cnt={cnt} setCnt={setCnt} />
          <TouchableOpacity style={styles.addBtn} onPress={addProduct}>
            <Text style={styles.add}>Add</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    color: '#F94332',
    fontWeight: 800,
    fontSize: 35,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  desc: {
    fontSize: 15,
    fontWeight: 500,
    color: '#000000',
    padding: 10,
  },
  counterAndBtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  addBtn: {
    padding: 10,
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
