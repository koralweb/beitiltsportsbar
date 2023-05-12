import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Menu = ({navigation}) => {
  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Home')}>
        <Text style={styles.text}>Página principal</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Shop')}>
        <Text style={styles.text}>Comercio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Booking')}>
        <Text style={styles.text}>Reserva de mesa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Show')}>
        <Text style={styles.text}>Transmisiones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Contacts')}>
        <Text style={styles.text}>Contactos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: 'rgba(249,67,50,0.8)',
  },
  item: {
    zIndex: 100,
  },
  text: {
    color: '#fff',
    fontWeight: 800,
    fontSize: 35,
  },
});

export default Menu;
