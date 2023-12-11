import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FONTS, color, appText} from '../../constants';
import {LABackground, LALogin} from '../../assets';
import {App_Checkbox, App_Input} from '../../components';
import {ToForgotPassword, ToRegister} from '../../utility';

export default function LoginScreen({navigation}) {
  const [isVisible, setVisible] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    isTrusted: false,
  });

  const setForm = (key, value) => {
    setFormData(prevState => ({...prevState, [key]: value}));
  };

  const toggleVisibility = () => setVisible(!isVisible);

  const isDisabled = () => {
    return formData.email.trim() === '' || formData.password.trim() === '';
  };

  const createButton = (text, onPress) => (
    <TouchableOpacity
      disabled={isDisabled()}
      onPress={onPress}
      style={styles(isDisabled()).signInButton}>
      <Text style={styles(isDisabled()).buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  const submitForm = () => {
    console.log(formData);
  };

  return (
    <ScrollView style={styles().baseContainer}>
      <View style={styles().topContainer}>
        <LABackground />
        <ImageBackground
          source={LALogin}
          style={styles().imageBanner}
          resizeMode="contain"
        />
      </View>
      <View style={styles().bottomContainer}>
        <App_Input
          leftIcon="mail-bulk"
          rightIcon={isEmailValid && 'check'}
          placeholder={appText.emailPlaceholder}
          value={formData.email}
          onChange={text => setForm('email', text)}
          type="email-address"
        />
        <App_Input
          leftIcon="user-lock"
          rightIcon={isVisible ? 'eye-slash' : 'eye'}
          placeholder={appText.passwordPlaceholder}
          onRightIconClick={toggleVisibility}
          value={formData.password}
          onChange={text => setForm('password', text)}
          password={!isVisible}
        />
        <View style={styles().forgotPasswordContainer}>
          <Text
            style={styles().forgotPassword}
            onPress={() => ToForgotPassword(navigation)}>
            {appText.forgotPassword}
          </Text>
        </View>
        <View style={styles().buttonContainer}>
          {createButton(appText.signIn, () => {
            submitForm();
          })}
          <App_Checkbox
            value={formData.isTrusted}
            onChange={() => setForm('isTrusted', !formData.isTrusted)}
            label={appText.trustDevice}
          />
        </View>
        <View style={styles().notRegisteredContainer}>
          <Text style={styles().notRegistered}>{appText.notRegistered} </Text>
          <Text
            style={styles().register}
            onPress={() => ToRegister(navigation)}>
            {appText.signUp}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = (isDisabled = false) =>
  StyleSheet.create({
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
      backgroundColor: isDisabled ? color.disabled : color.theme,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: isDisabled ? color.disabled : color.theme,
      paddingVertical: 10,
      marginBottom: 25,

      shadowOpacity: isDisabled ? 0 : 0.3,
      shadowOffset: {width: 0, height: 3},
      shadowRadius: 3,

      elevation: isDisabled ? 0 : 3,
    },
    buttonText: {
      textAlign: 'center',
      color: isDisabled ? color.disabledText : color.textWhite,
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
