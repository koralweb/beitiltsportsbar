import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

const ShopScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View>
        <Text>ShopScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default ShopScreen;
