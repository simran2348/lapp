import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FONTS, color, appText} from '../../constants';
import {ToLogin, ToRegister} from '../../utility';

export default function LandingScreen({navigation}) {
  const createButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress} style={styles.inputButton}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.baseContainer}>
      <View style={styles.buttonContainer}>
        <View>
          {createButton(appText.toDoctorText, () => ToLogin(navigation))}
        </View>
        <View>
          {createButton(appText.toPatientText, () => ToRegister(navigation))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {},
  inputButton: {
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 40,
    borderColor: color.theme,
    paddingVertical: 10,
    color: color.white,
    backgroundColor: color.theme,
    marginVertical: 20,
    width: 200,
  },
  buttonText: {
    fontFamily: FONTS.NUNITO700,
    fontSize: 20,
    color: color.white,
    textAlign: 'center',
  },
});
