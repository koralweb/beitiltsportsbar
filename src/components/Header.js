import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
      {showMenu && <Menu navigation={navigation} />}
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    backgroundColor: 'silver',
    paddingTop: 35,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  btn: {
    position: 'relative',
    zIndex: 200,
  },
});

export default Header;
