import {Image, StyleSheet, Text, View} from 'react-native';
import {FONTS, color, appText} from '../constants';
import {AppLogo} from '../assets';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AuthHeader = (props, page) => {
  const {navigation} = props;
  switch (page) {
    case 'home':
      return (
        <View style={styles.headerContainer}>
          <Image source={AppLogo} />
          <Text style={styles.headerText}>{appText.appName}</Text>
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
          <Text style={styles.headerText}>{appText.loginHeader}</Text>
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
          <Text style={styles.headerText}>{appText.registerHeader}</Text>
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
          <Text style={styles.headerText}>{appText.forgotPasswordHeader}</Text>
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
