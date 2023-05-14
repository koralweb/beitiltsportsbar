import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../globalStyles';
import Header from '../components/Header';
import products from '../mobx/products';
import Product from '../components/CartScreen/Product';
import {observer} from 'mobx-react-lite';

const CartScreen = ({navigation}) => {
  const renderProduct = () => {
    return products.list
      .filter(p => p.added)
      .map(pr => <Product pr={pr} key={pr.id} />);
  };

  const renderBtn = () => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.push('Booking', {cart: true})}>
        <Text style={styles.button}>Verificar</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <Text style={styles.title}>Cart</Text>
      {products.list.filter(p => p.added).length ? (
        <ScrollView>
          {renderProduct()}
          {renderBtn()}
        </ScrollView>
      ) : (
        <Text style={styles.noProductsText}>No hay artículos en el carro</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    fontSize: 25,
    fontWeight: 900,
    color: '#F84433',
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: 'center',
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 23,
    color: 'grey',
  },
  btn: {
    padding: 5,
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1E6AB1',
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
    alignSelf: 'center',
  },
});

export default observer(CartScreen);
