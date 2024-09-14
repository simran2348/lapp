import {useState, useContext, useEffect} from 'react';
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
import {useIsFocused} from '@react-navigation/native';

export default function RegisterScreen({navigation}) {
  const {
    checkEmail,
    emailError,
    setEmailError,
    isEmailValid,
    setEmailValid,
    register,
  } = useContext(App_Context);
  const isFocused = useIsFocused();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setPasswordValid] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmValid, setConfirmValid] = useState('');
  // const [terms, setTerms] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);

  const toggleVisibility = () => setVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmVisible(!isConfirmVisible);

  useEffect(() => {
    if (!isFocused) {
      resetAll();
      setPassword('');
      setConfirmPassword('');
    }
  }, [isFocused]);

  useEffect(() => {
    email.length === 0 && resetAll();
  }, [email]);

  useEffect(() => {
    if (password) {
      const errors = validatePasswords();
      setPasswordValid(errors.password);
      setConfirmValid(errors.confirmPassword);
    }
  }, [password, confirmPassword]);

  const resetAll = () => {
    setEmailError('');
    setEmail('');
    setEmailValid(false);
  };

  const isSubmitDisabled = () => {
    return (
      password.trim() === '' ||
      confirmPassword.trim() === '' ||
      !isEmailValid ||
      isPasswordValid.length > 0 ||
      isConfirmValid.length > 0
    );
  };

  const validatePasswords = () => {
    const errors = {
      password: '',
      confirmPassword: '',
    };

    if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }
    if (confirmPassword !== password && confirmPassword.length > 0) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
  };

  const handlePassword = text => {
    text.length === 0 && setPasswordValid('');
    setPassword(text.trim());
  };

  const handleConfirm = text => {
    text.length === 0 && setConfirmValid('');
    setConfirmPassword(text.trim());
  };

  const submitObject = () => {
    return {
      email,
      password,
    };
  };

  const emailObject = () => {
    return {email, type: 'R'};
  };

  const submitForm = () => {
    register(submitObject());
  };

  const submitButton = label => (
    <TouchableOpacity
      onPress={() => submitForm()}
      style={styles(isSubmitDisabled()).signUpButton}>
      <Text style={styles(isSubmitDisabled()).buttonText}>{label}</Text>
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
          onChange={text => handlePassword(text)}
          password={!isVisible}
          error={{isError: isPasswordValid.length > 0, msg: isPasswordValid}}
        />
        <App_Input
          leftIcon={{icon: 'user-lock', type: 'theme'}}
          rightIcon={
            isConfirmVisible
              ? {icon: 'eye-slash', type: 'theme'}
              : {icon: 'eye', type: 'theme'}
          }
          placeholder={appText.confirmPasswordPlaceholder}
          onRightIconClick={toggleConfirmVisibility}
          value={confirmPassword}
          onChange={text => handleConfirm(text)}
          password={!isConfirmVisible}
          error={{isError: isConfirmValid.length > 0, msg: isConfirmValid}}
        />
        <View style={styles().buttonContainer}>
          {/* <App_Checkbox
            value={terms}
            onChange={() => setTerms(!terms)}
            label={appText.acceptTerms}
          /> */}
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
