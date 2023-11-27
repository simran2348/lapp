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
import {LABackground, LAForgotPassword, LASignup} from '../assets';
import {LA_Input} from '../components';
import {ToLogin} from '../utility';

export default function ForgotPasswordScreen({navigation}) {
  const [isEmailValid, setEmailValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
  });

  const setForm = (key, value) => {
    setFormData(prevState => ({...prevState, [key]: value}));
  };

  const isDisabled = () => {
    return formData.email.trim() === '' && formData.mobile.trim() === '';
  };

  const createButton = (text, onPress) => (
    <TouchableOpacity
      disabled={isDisabled()}
      onPress={onPress}
      style={styles(isDisabled()).validateButton}>
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
          source={LAForgotPassword}
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
        <Text style={styles().separator}>OR</Text>
        <LA_Input
          leftIcon="mobile-alt"
          placeholder={laText.mobilePlaceholder}
          value={formData.mobile}
          onChange={text => setForm('mobile', text)}
          type="number-pad"
          max={10}
        />
        <View style={styles().buttonContainer}>
          {createButton(laText.validate, () => {
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

const styles = (isDisabled = false, isInputDisabled = false) =>
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
      paddingHorizontal: 30,
      marginBottom: 40,
    },
    validateButton: {
      backgroundColor: isDisabled ? color.disabled : color.theme,
      borderWidth: 2,
      borderRadius: 50,
      borderColor: isDisabled ? color.disabled : color.theme,
      paddingVertical: 10,
      marginTop: 20,

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
      width: 300,
      height: 280,
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
    separator: {
      fontFamily: FONTS.NUNITO500,
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 10,
      color: color.black,
    },
  });
