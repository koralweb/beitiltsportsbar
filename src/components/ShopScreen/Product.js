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
          <Image
            source={require('../../assets/vector.png')}
            style={styles.vector}></Image>
        </View>
      ) : (
        <View style={styles.counterAndBtn}>
          <Text style={styles.price}>{Math.round(pr.price / 10) * cnt} €</Text>
          <View style={{flexDirection: 'row'}}>
            <Counter cnt={cnt} setCnt={setCnt} />
            <TouchableOpacity style={styles.addBtn} onPress={addProduct}>
              <Text style={styles.add}>Add</Text>
            </TouchableOpacity>
          </View>
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
    borderColor: '#CDCDCD',
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
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  addBtn: {
    padding: 10,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    backgroundColor: 'blue',
  },
  addedBtn: {
    padding: 5,
    borderWidth: 1,
    alignSelf: 'flex-end',
    borderTopLeftRadius: 30,
    backgroundColor: 'green',
  },
  vector: {
    width: 50,
    height: 50,
  },

  add: {
    fontSize: 25,
    fontWeight: 900,
    color: 'white',
  },

  price: {
    fontSize: 25,
    fontWeight: 900,
    marginLeft: 10,
  },
});

export default observer(Product);
