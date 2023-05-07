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
        <Text style={styles.text}>Домашняя страница</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Shop')}>
        <Text style={styles.text}>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Booking')}>
        <Text style={styles.text}>Бронь столика</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Show')}>
        <Text style={styles.text}>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push('Contacts')}>
        <Text style={styles.text}>Контакты</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    zIndex: 100,
  },
  text: {
    color: '#fff',
  },
});

export default Menu;
