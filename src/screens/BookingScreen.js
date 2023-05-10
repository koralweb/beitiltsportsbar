import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';

const BookingScreen = ({navigation}) => {
  const [persons, setPersons] = useState('');
  const [outside, setOutside] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        <Text>Бронирование столика</Text>
        <Text>
          Хотите быстро накрыть на стол? Оставьте онлайн-заявку на бронирование
          столика в нашем ресторане. И мы обязательно вам позвоним!
        </Text>
        <Text>Количество персон</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPersons}
          value={persons}
          placeholder="Количество персон"
        />
        <Text>Расположение столика</Text>
        <TextInput
          style={styles.input}
          onChangeText={setOutside}
          value={outside}
          placeholder="В помещении или на улице?"
        />
        <Text>Номер телефона</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Номер телефона"
        />
        <Text>Дата и время</Text>
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Дата и время"
        />
        <TouchableOpacity style={styles.btn}>
          <Text>Забронировать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
  },
  btn: {
    padding: 5,
    borderWidth: 1,
    width: 200,
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default BookingScreen;
