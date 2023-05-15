import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';
import products from '../mobx/products';
import Product from '../components/ShopScreen/Product';
import TypeList from '../components/ShopScreen/TypeList';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';

const ShopScreen = ({navigation}) => {
  const [type, setType] = useState('All');
  const renderProduct = () => {
    return type === 'All'
      ? products.list.map(pr => <Product pr={pr} key={pr.id} />)
      : products.list
          .filter(p => p.type === type)
          .map(pr => <Product pr={pr} key={pr.id} />);
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <TypeList setType={setType} />
      <ScrollView>{renderProduct()}</ScrollView>
      {products.list.some(el => el.added) && (
        <TouchableOpacity
          style={styles.goToCart}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-cart'} color="green" size={30} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  goToCart: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: 'green',
    position: 'absolute',
    bottom: 20,
    left: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: 'green',
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.8,
    shadowRadius: 18,

    elevation: 23,
  },
});

export default observer(ShopScreen);
