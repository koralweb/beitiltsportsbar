import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Menu from './Menu';

const Header = ({navigation}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.cont}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setShowMenu(!showMenu)}>
        <FontAwesomeIcon
          icon={showMenu ? 'close' : 'bars'}
          color="#fff"
          size={25}
        />
      </TouchableOpacity>
      <View>
        <Image source={require('../assets/top_icon.png')} style={styles.icon} />
        <Text style={styles.text}>Sports pub</Text>
      </View>
      {showMenu && <Menu navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: '#F94332',
    paddingTop: Platform.OS === 'ios' ? 35 : 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    position: 'relative',
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    position: 'relative',
    zIndex: 200,
  },
  icon: {
    width: 224 / 5,
    height: 199 / 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 800,
  },
});

export default Header;
