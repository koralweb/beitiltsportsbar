import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const ShowScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <View>
        <Text>ShowScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
