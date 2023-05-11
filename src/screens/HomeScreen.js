import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

function HomeScreen({navigation}) {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <View style={styles.img}>
        <Image source={require('../assets/icon.png')} style={styles.icon} />
      </View>

      <View style={styles.cont}>
        <TouchableOpacity onPress={() => navigation.push('Shop')}>
          <Text style={styles.text}>Магазин</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Booking')}>
          <Text style={styles.text}>Бронь столика</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Show')}>
          <Text style={styles.text}>Трансляции</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Contacts')}>
          <Text style={styles.text}>Контакты</Text>
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
    backgroundColor: '#F94332',
  },
  icon: {
    width: 599 / 3,
    height: 506 / 3,
    marginLeft: 100,
    backgroundColor: '#F94332',
  },

  text: {
    color: 'white',
    fontWeight: 800,
    fontSize: 35,
    fontStyle: 'normal',
  },
  img: {
    backgroundColor: '#F94332',
    paddingTop: 75,
  },
});

export default HomeScreen;
