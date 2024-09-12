import {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FONTS, color, appText} from '../../constants';
import {App_Checkbox, App_Input} from '../../components';
import {ToLogin} from '../../utility';
import {App_Context} from '../../context/appContext';

export default function RegisterScreen({navigation}) {
  const {checkEmail, isEmailValid, emailError} = useContext(App_Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);

  const toggleVisibility = () => setVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmVisible(!isConfirmVisible);

  const isSubmitDisabled = () => {
    return (
      email.trim() === '' ||
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      password !== confirmPassword
    );
  };

  const submitButton = label => (
    <TouchableOpacity
      onPress={() => submitForm()}
      style={styles(isSubmitDisabled()).signUpButton}>
      <Text style={styles(isSubmitDisabled()).buttonText}>{label}</Text>
    </TouchableOpacity>
  );

  const submitObject = () => {
    return {
      email,
      password,
    };
  };

  const emailObject = () => {
    return email;
  };

  const submitForm = () => {
    console.log(submitObject());
  };

  return (
    <ScrollView style={styles().baseContainer}>
      <View style={styles().bottomContainer}>
        <App_Input
          leftIcon="mail-bulk"
          rightIcon={emailError ? 'times' : isEmailValid ? 'check' : ''}
          placeholder={appText.emailPlaceholder}
          value={email}
          onChange={text => setEmail(text)}
          type="email-address"
          onBlur={() => checkEmail(emailObject())}
        />
        <App_Input
          leftIcon="user-lock"
          rightIcon={isVisible ? 'eye-slash' : 'eye'}
          placeholder={appText.passwordPlaceholder}
          onRightIconClick={toggleVisibility}
          value={password}
          onChange={text => setPassword(text)}
          password={!isVisible}
        />
        <App_Input
          leftIcon="user-lock"
          rightIcon={isConfirmVisible ? 'eye-slash' : 'eye'}
          placeholder={appText.confirmPasswordPlaceholder}
          onRightIconClick={toggleConfirmVisibility}
          value={confirmPassword}
          onChange={text => setConfirmPassword(text)}
          password={!isConfirmVisible}
        />
        <View style={styles().buttonContainer}>
          <App_Checkbox
            value={terms}
            onChange={() => setTerms(!terms)}
            label={appText.acceptTerms}
          />
          {submitButton(appText.signUp)}
        </View>
        <View style={styles().registeredContainer}>
          <Text style={styles().registered}>{appText.alreadyRegistered} </Text>
          <Text style={styles().login} onPress={() => ToLogin(navigation)}>
            {appText.signIn}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = (isSubmitDisabled = false) =>
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
    signUpButton: {
      backgroundColor: isSubmitDisabled ? color.disabled : color.theme,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: isSubmitDisabled ? color.disabled : color.theme,
      paddingVertical: 10,
      marginTop: 25,

      shadowOpacity: isSubmitDisabled ? 0 : 0.3,
      shadowOffset: {width: 0, height: 3},
      shadowRadius: 3,

      elevation: isSubmitDisabled ? 0 : 3,
    },
    buttonText: {
      textAlign: 'center',
      color: isSubmitDisabled ? color.disabledText : color.textWhite,
      fontFamily: FONTS.NUNITO400,
      fontSize: 20,
    },
    imageBanner: {
      flex: 1,
      width: 350,
      height: 300,
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
    registeredContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 40,
    },
    registered: {
      fontFamily: FONTS.NUNITO400,
      fontSize: 20,
      color: color.theme,
    },
    login: {
      fontFamily: FONTS.NUNITO800,
      fontSize: 20,
      color: color.theme,
    },
  });
