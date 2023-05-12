import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';
import { height } from '@fortawesome/free-solid-svg-icons/faBars';

const BookingScreen = ({navigation}) => {
  const [persons, setPersons] = useState('');
  const [outside, setOutside] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        <Text style={styles.title}>Reserva de mesa</Text>
        <Text style={styles.desc}>
        Quieres poner la mesa rápidamente? Enviar una solicitud de reserva en línea
          mesa en nuestro restaurante. ¡Y definitivamente te llamaremos!
        </Text>
        <Text style={styles.item}>Número de personas</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPersons}
          value={persons}
          placeholder="Número de personas"
        />
        <Text style={styles.item}>Ubicación de la mesa</Text>
        <TextInput
          style={styles.input}
          onChangeText={setOutside}
          value={outside}
          placeholder="Interior o exterior?"
        />
        <Text style={styles.item}>Número de teléfono</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Número de teléfono"
        />
        <Text style={styles.item}>fecha y hora</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="fecha y hora"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.button}>Libro</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/logobooking.png')} style={styles.logo} />

    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontSize: 25,
    fontWeight: 900,
    color: '#F84433',
    paddingTop: 15,
    paddingBottom: 10,
  },
  desc: {
    fontSize: 15,
    fontWeight: 700,
    padding: 15,
  },

  item:{
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: 900,
    marginLeft: 20,

  },

  input: {
    borderWidth: 1,
    width: 350,
    height: 40,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#909090",
    color: "#909090",
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 5,
   

  },
  btn: {
    padding: 5,
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E6AB1",
  },
  button: {
    color: "white",
    fontSize: 20,
    fontWeight: 900,
    alignSelf: "center",


  },

  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",


  },
});

export default BookingScreen;
