import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const CheckoutScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={styles.title}>Gracias por su orden!</Text>
      <Text style={styles.desc}>
        Nuestros gerentes se comunicarán con usted para aclarar los detalles en
        un futuro próximo. Gracias por elegir nuestro bar deportivo.
      </Text>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 900,
    color: '#F84433',
    paddingTop: 15,
    paddingBottom: 10,
    textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 700,
    padding: 15,
  },
});
