import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

function HomeScreen({navigation}) {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <Image source={require('../assets/icon.png')} style={styles.icon} />
      <View style={styles.cont}>
        <TouchableOpacity onPress={() => navigation.push('Shop')}>
          <Text>Магазин</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Booking')}>
          <Text>Бронь столика</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Show')}>
          <Text>Трансляции</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Contacts')}>
          <Text>Контакты</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 599 / 4,
    height: 506 / 4,
  },
});

export default HomeScreen;
