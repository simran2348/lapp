import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS, color, laText} from '../constants';
import {LALogo} from '../assets';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AuthHeader = (props, page) => {
  const {navigation} = props;
  switch (page) {
    case 'home':
      return (
        <View style={styles.headerContainer}>
          <Image source={LALogo} />
          <Text style={styles.headerText}>{laText.LA}</Text>
        </View>
      );
    case 'login':
      return (
        <View style={styles.headerContainer}>
          <FontAwesome5
            name="chevron-circle-left"
            size={28}
            color={color.backButton}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>{laText.loginHeader}</Text>
        </View>
      );
    case 'register':
      return (
        <View style={styles.headerContainer}>
          <FontAwesome5
            name="chevron-circle-left"
            size={28}
            color={color.backButton}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>{laText.registerHeader}</Text>
        </View>
      );
    case 'forgotPassword':
      return (
        <View style={styles.headerContainer}>
          <FontAwesome5
            name="chevron-circle-left"
            size={28}
            color={color.backButton}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerText}>{laText.forgotPasswordHeader}</Text>
        </View>
      );
  }
};

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
  backButton: {
    position: 'absolute',
    left: 20,
  },
});

export default AuthHeader;
