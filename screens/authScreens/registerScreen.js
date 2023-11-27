import {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {FONTS, color, laText} from '../../constants';
import {LABackground, LASignup} from '../../assets';
import {LACheckbox, LA_Input} from '../../components';
import {ToLogin} from '../../utility';

export default function RegisterScreen({navigation}) {
  const [isVisible, setVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  });

  const setForm = (key, value) => {
    setFormData(prevState => ({...prevState, [key]: value}));
  };

  const toggleVisibility = () => setVisible(!isVisible);
  const toggleConfirmVisibility = () => setConfirmVisible(!isConfirmVisible);

  const isDisabled = () => {
    return (
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.confirmPassword.trim() === ''
    );
  };

  const createButton = (text, onPress) => (
    <TouchableOpacity
      disabled={isDisabled()}
      onPress={onPress}
      style={styles(isDisabled()).signUpButton}>
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
          source={LASignup}
          style={styles().imageBanner}
          resizeMode="contain"
        />
      </View>
      <View style={styles().bottomContainer}>
        <LA_Input
          leftIcon="mail-bulk"
          rightIcon={isEmailValid && 'check'}
          placeholder={laText.emailPlaceholder}
          value={formData.email}
          onChange={text => setForm('email', text)}
          type="email-address"
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
        <LA_Input
          leftIcon="user-lock"
          rightIcon={isVisible ? 'eye-slash' : 'eye'}
          placeholder={laText.confirmPasswordPlaceholder}
          onRightIconClick={toggleConfirmVisibility}
          value={formData.confirmPassword}
          onChange={text => setForm('confirmPassword', text)}
          password={!isConfirmVisible}
        />
        <View style={styles().buttonContainer}>
          <LACheckbox
            value={formData.acceptedTerms}
            onChange={() => setForm('acceptedTerms', !formData.acceptedTerms)}
            label={laText.acceptTerms}
          />
          {createButton(laText.signUp, () => {
            submitForm();
          })}
        </View>
        <View style={styles().registeredContainer}>
          <Text style={styles().registered}>{laText.alreadyRegistered} </Text>
          <Text style={styles().login} onPress={() => ToLogin(navigation)}>
            {laText.signIn}
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
    signUpButton: {
      backgroundColor: isDisabled ? color.disabled : color.theme,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: isDisabled ? color.disabled : color.theme,
      paddingVertical: 10,
      marginTop: 25,

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
