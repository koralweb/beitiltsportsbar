import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Header from '../components/Header';

function HomeScreen({navigation}) {
  return (
    <>
      <Header navigation={navigation} />
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
    </>
  );
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
  },
});

export default HomeScreen;
