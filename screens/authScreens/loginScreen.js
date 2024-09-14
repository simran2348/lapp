import {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {FONTS, color, appText} from '../../constants';
import {App_Checkbox, App_Input} from '../../components';
import {ToForgotPassword, ToRegister} from '../../utility';
import {App_Context} from '../../context/appContext';

export default function LoginScreen({navigation}) {
  const {
    checkEmail,
    emailError,
    isEmailValid,
    setEmailValid,
    setEmailError,
    passwordError,
    setPasswordError,
    login,
  } = useContext(App_Context);
  const isFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      resetAll();
      setPassword('');
    }
  }, [isFocused]);

  useEffect(() => {
    email.length === 0 && resetAll();
  }, [email]);

  useEffect(() => {
    password.length === 0 && setPasswordError('');
  }, [password]);

  const resetAll = () => {
    setEmailError('');
    setEmail('');
    setEmailValid(false);
  };

  const toggleVisibility = () => setVisible(!isVisible);

  const isSubmitDisabled = () => {
    return password.trim() === '' || email.trim() === '' || !isEmailValid;
  };

  const submitObject = () => {
    return {
      email,
      password,
    };
  };

  const emailObject = () => {
    return {email, type: 'L'};
  };

  const submitForm = () => {
    login(submitObject());
  };

  const createButton = (text, onPress) => (
    <TouchableOpacity
      disabled={isSubmitDisabled()}
      onPress={onPress}
      style={styles(isSubmitDisabled()).signInButton}>
      <Text style={styles(isSubmitDisabled()).buttonText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles().baseContainer}>
      <View style={styles().bottomContainer}>
        <App_Input
          leftIcon={{icon: 'mail-bulk', type: 'theme'}}
          rightIcon={
            isEmailValid
              ? {icon: 'check', type: 'success'}
              : emailError
              ? {icon: 'times', type: 'error'}
              : ''
          }
          placeholder={appText.emailPlaceholder}
          value={email}
          onChange={text => setEmail(text.trim())}
          type="email-address"
          onBlur={() => email.length > 0 && checkEmail(emailObject())}
          error={{
            isError: emailError.length > 0,
            msg: emailError,
          }}
        />
        <App_Input
          leftIcon={{icon: 'user-lock', type: 'theme'}}
          rightIcon={
            isVisible
              ? {icon: 'eye-slash', type: 'theme'}
              : {icon: 'eye', type: 'theme'}
          }
          placeholder={appText.passwordPlaceholder}
          onRightIconClick={toggleVisibility}
          value={password}
          onChange={text => setPassword(text.trim())}
          password={!isVisible}
          error={{isError: passwordError.length > 0, msg: passwordError}}
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
          {/* <App_Checkbox
            value={formData.isTrusted}
            onChange={() => setForm('isTrusted', !formData.isTrusted)}
            label={appText.trustDevice}
          /> */}
        </View>
        <View style={styles().notRegisteredContainer}>
          <Text style={styles().notRegistered}>{appText.notRegistered} </Text>
          <Text
            style={styles().register}
            onPress={() => {
              ToRegister(navigation);
            }}>
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
