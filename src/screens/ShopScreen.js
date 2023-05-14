import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';
import products from '../mobx/products';
import Product from '../components/ShopScreen/Product';
import TypeList from '../components/ShopScreen/TypeList';

const ShopScreen = ({navigation}) => {
  const [type, setType] = useState('All');
  const renderProduct = () => {
    return type === 'All'
      ? products.list.map(pr => <Product pr={pr} key={pr.id} />)
      : products.list
          .filter(p => p.type === type)
          .map(pr => <Product pr={pr} key={pr.id} />);
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />
      <TypeList setType={setType} />
      <ScrollView>{renderProduct()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default ShopScreen;
