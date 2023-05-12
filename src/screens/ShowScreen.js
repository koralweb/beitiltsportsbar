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
            <Text style={styles.ligatext}>{tr.ligaOf}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.dateTime}>
              <Text style={styles.date}>{currentDate}.05 - </Text>
              <Text style={styles.time}>{tr.matchTime}</Text>
            </View>
            <View style={styles.teams}>
              <Text style={styles.teamsname}>{tr.team_1}</Text>
              <Text style={styles.teamsname}>{tr.team_2}</Text>
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
          <Text style={styles.daytext}>{i}.05</Text>
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
        <Text style={styles.title}>Retransmisiones deportivas</Text>
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
  title:{
    fontSize: 25,
    fontWeight: 900,
    color: '#F84433',
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: "center",
  },
  scrollCont: {
    flex: 1,
  },
  dayListBlock: {
    flexDirection: 'row',
    alignSelf: "center",
  },
  dayItem: {
    borderWidth: 3,
    marginHorizontal: 3,
    borderColor: "#F84433",
    borderRadius: 5,
    padding: 10,
    marginBottom: 30,
    backgroundColor: "#FFF1C0",
  },
  daytext: {
    fontSize: 15,
    fontWeight: 700,
  },
  liga: {
    borderWidth: 1,
  },
  ligatext: {
    fontSize: 15,
    fontWeight: 700,
    paddingLeft: 5,

  },
  dateTime: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
  },
  date: {
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 5,
    color: "#909090",
  },
  time: {
    fontSize: 15,
    fontWeight: 800,
    paddingRight: 5,
    color: '#F84433',

  },
  teamsname: {
    fontSize: 15,
    fontWeight: 800,
    paddingLeft: 10,

  },
  translationItem: {
    borderRadius: 5,
    margin: 15,
    borderWidth: 1,
    
  },
 
});

export default ShowScreen;
