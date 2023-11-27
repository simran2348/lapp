import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FONTS, color, laText} from '../constants';
import {LABackground, LALogin} from '../assets';
import {LACheckbox, LA_Input} from '../components';
import {ToForgotPassword, ToRegister} from '../utility';

export default function LoginScreen({navigation}) {
  const [isVisible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isTrusted: false,
  });

  const setForm = (key, value) => {
    setFormData(prevState => ({...prevState, [key]: value}));
  };

  const toggleVisibility = () => setVisible(!isVisible);

  const createButton = (text, onPress, style) => (
    <TouchableOpacity onPress={onPress} style={[styles.signInButton, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  const submitForm = () => {
    console.log(formData);
  };

  return (
    <ScrollView style={styles.baseContainer}>
      <View style={styles.topContainer}>
        <LABackground />
        <ImageBackground
          source={LALogin}
          style={styles.imageBanner}
          resizeMode="contain"
        />
      </View>
      <View style={styles.bottomContainer}>
        <LA_Input
          leftIcon="mail-bulk"
          placeholder={laText.emailPlaceholder}
          value={formData.email}
          onChange={text => setForm('email', text)}
        />
        <LA_Input
          leftIcon="user-lock"
          rightIcon={isVisible ? 'eye-slash' : 'eye'}
          placeholder={laText.passwordPlaceholder}
          onRightIconClick={toggleVisibility}
          value={formData.password}
          onChange={text => setForm('password', text)}
          password={!isVisible}
        />
        <View style={styles.forgotPasswordContainer}>
          <Text
            style={styles.forgotPassword}
            onPress={() => ToForgotPassword(navigation)}>
            {laText.forgotPassword}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {createButton(
            laText.signIn,
            () => {
              submitForm();
            },
            styles.signInButton,
          )}
          <LACheckbox
            value={formData.isTrusted}
            onChange={() => setForm('isTrusted', !formData.isTrusted)}
            label={laText.trustDevice}
          />
        </View>
        <View style={styles.notRegisteredContainer}>
          <Text style={styles.notRegistered}>{laText.notRegistered} </Text>
          <Text style={styles.register} onPress={() => ToRegister(navigation)}>
            {laText.signUp}
          </Text>
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
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  signInButton: {
    backgroundColor: color.theme,
    color: color.textWhite,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: color.theme,
    paddingVertical: 10,
    marginBottom: 25,

    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 3,

    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: color.textWhite,
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
  forgotPasswordContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  forgotPassword: {
    fontSize: 20,
    fontFamily: FONTS.NUNITO400,
    color: color.theme,
    textAlign: 'right',
  },
  notRegisteredContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  notRegistered: {
    fontFamily: FONTS.NUNITO400,
    fontSize: 20,
    color: color.theme,
  },
  register: {
    fontFamily: FONTS.NUNITO800,
    fontSize: 20,
    color: color.theme,
  },
});
