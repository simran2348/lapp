import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS, color, laText} from '../constants';
import {LALogo} from '../assets';

const HomeHeader = () => (
  <View style={styles.headerContainer}>
    <Image source={LALogo} />
    <Text style={styles.headerText}>{laText.LA}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: color.theme,
    height: 80,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    color: color.white,
    fontSize: 28,
    fontFamily: FONTS.NUNITO700,
  },
});

export default HomeHeader;
