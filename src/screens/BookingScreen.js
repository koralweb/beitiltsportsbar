import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const BookingScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <View>
        <Text>BookingScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default BookingScreen;
