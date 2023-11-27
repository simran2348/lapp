import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FONTS, color, laText} from '../../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LAFamily, LABackground} from '../../assets';
import {ToLogin, ToRegister} from '../../utility';

export default function LandingScreen({navigation}) {
  const CheckIcon = () => (
    <FontAwesome5
      name="check"
      size={18}
      color={color.textGreen}
      style={styles.icon}
    />
  );

  const createButton = (text, onPress, buttonStyle, textColor) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.inputButton, buttonStyle]}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.baseContainer}>
      <View style={styles.topContainer}>
        <LABackground />
        <ImageBackground
          source={LAFamily}
          style={styles.imageBanner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.quoteText}>{laText.home_quote}</Text>
        {[laText.home_point1, laText.home_point2, laText.home_point3].map(
          (point, index) => (
            <View key={index} style={styles.semiQuoteTextContainer}>
              <CheckIcon />
              <Text style={styles.semiQuoteText}>{point}</Text>
            </View>
          ),
        )}
        <View style={styles.buttonContainer}>
          <View>
            {createButton(
              laText.signIn,
              () => ToLogin(navigation),
              styles.signInButton,
              color.textWhite,
            )}
          </View>
          <View>
            {createButton(
              laText.signUp,
              () => ToRegister(navigation),
              styles.signUpButton,
              color.theme,
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: color.white,
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: color.theme,
    height: 280,
  },
  bottomContainer: {
    padding: 35,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 30,
  },
  quoteText: {
    fontSize: 20,
    color: color.theme,
    lineHeight: 30,
    marginBottom: 35,
    fontFamily: FONTS.NUNITO600,
  },
  semiQuoteText: {
    fontSize: 18,
    color: color.textGreen,
    marginLeft: 5,
    fontFamily: FONTS.NUNITO400,
  },
  semiQuoteTextContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginTop: 4,
  },
  inputButton: {
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 40,
    borderColor: color.theme,
    paddingVertical: 10,
  },
  signInButton: {
    backgroundColor: color.theme,
    color: color.textWhite,
  },
  signUpButton: {
    borderColor: color.theme,
    color: color.theme,
  },
  buttonText: {
    fontFamily: FONTS.NUNITO400,
    fontSize: 20,
  },
  imageBanner: {
    flex: 1,
    width: 350,
    height: 260,
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
  },
});
