import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import globalStyles from '../globalStyles';
import translations from '../data/translations';

const today = new Date().getDate();

const ShowScreen = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState(today);

  const renderTranslations = () => {
    return translations
      .filter(el => el.matchDate === currentDate)
      .map(tr => (
        <View style={styles.translationItem} key={Math.random()}>
          <View style={styles.liga}>
            <Text>{tr.ligaOf}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.dateTime}>
              <Text>{currentDate}.05 - </Text>
              <Text>{tr.matchTime}</Text>
            </View>
            <View style={styles.teams}>
              <Text>{tr.team_1}</Text>
              <Text>{tr.team_2}</Text>
            </View>
          </View>
        </View>
      ));
  };

  const renderDaysList = () => {
    const arr = [];
    for (let i = today; i < today + 5; i++) {
      const el = (
        <TouchableOpacity
          style={styles.dayItem}
          key={i}
          onPress={() => setCurrentDate(i)}>
          <Text>{i}.05</Text>
        </TouchableOpacity>
      );
      arr.push(el);
    }
    return arr;
  };

  return (
    <View style={styles.globalCont}>
      <Header navigation={navigation} />

      <View style={styles.cont}>
        <Text>Спортивные трансляции</Text>
        {/* функция renderDaysList (вверху) отрисовывает список дат для нажатия */}
        <View style={styles.dayListBlock}>{renderDaysList()}</View>
        <ScrollView style={styles.scrollCont}>
          {/* функция renderTranslations (вверху) отрисовывает список событий для каждого дня */}
          {renderTranslations()}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  cont: {
    flex: 1,
  },
  scrollCont: {
    flex: 1,
  },
  dayListBlock: {
    flexDirection: 'row',
  },
  dayItem: {
    borderWidth: 1,
    marginHorizontal: 2,
  },
  liga: {
    borderWidth: 1,
  },
  dateTime: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
});

export default ShowScreen;
