import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

const ContactsScreen = ({navigation}) => {
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View>
        <Text style={styles.title}>Contactos</Text>

        <View style={styles.cont}>
          <Text style={styles.titleitem}>DIRECCIÓN</Text>
          <Text style={styles.item}>
            Av. del Dr. Peset Aleixandre, 75, 46009 València, Valencia, Spain
          </Text>

          <Text style={styles.titleitem}>Teléfono</Text>
          <Text style={styles.item}>+34 961 13 30 39</Text>

          <Text style={styles.titleitem}>Horas Laborales</Text>
          <Text style={styles.item}>08:00 - 04:00</Text>
        </View>
      </View>
      <Image
        source={require('../assets/logobooking.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  title: {
    fontSize: 25,
    fontWeight: 900,
    color: '#F84433',
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  cont: {
    borderWidth: 1,
    borderColor: '#909090',
    width: 350,
    height: 340,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleitem: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 5,
    color: '#909090',
  },
  item: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 15,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 150,
  },
});

export default ContactsScreen;
