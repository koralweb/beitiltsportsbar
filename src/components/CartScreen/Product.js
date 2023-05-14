import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Counter from '../ShopScreen/Counter';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import prod from '../../mobx/products';

const Product = ({pr}) => {
  const [cnt, setCnt] = useState(pr.count);
  return (
    <View style={styles.item}>
      <Image source={pr.image} style={styles.img} />
      <View style={{justifyContent: 'space-between'}}>
        <Text style={styles.title}>{pr.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Counter cnt={cnt} setCnt={setCnt} />
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => prod.removeProduct(pr.id)}>
            <FontAwesomeIcon icon="close" color="#F94332" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  title: {
    color: '#F94332',
    fontWeight: 800,
    fontSize: 22,
  },
  closeBtn: {
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
  },
});

export default Product;
