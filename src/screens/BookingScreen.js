import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

const BookingScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View>
        <Text>BookingScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default BookingScreen;
