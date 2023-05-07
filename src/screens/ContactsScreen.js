import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const ContactsScreen = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} />

      <View>
        <Text>ContactsScreen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ContactsScreen;
