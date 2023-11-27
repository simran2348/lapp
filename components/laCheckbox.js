import CheckBox from '@react-native-community/checkbox';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS, color} from '../constants';

const LACheckbox = props => {
  const {value, onChange, label} = props;

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        disabled={false}
        value={value}
        onChange={onChange}
        tintColors={{true: color.theme, false: color.theme}}
        boxType="square"
        style={styles.checkbox}
        tintColor={color.theme}
        onCheckColor={color.white}
        onTintColor={color.theme}
        onFillColor={color.theme}
        onAnimationType="fill"
        offAnimationType="bounce"
      />
      <Text style={styles.checkboxLabel} onPress={onChange}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  checkboxLabel: {
    color: color.theme,
    fontFamily: FONTS.NUNITO400,
    fontSize: 17,
  },
  checkbox: {
    padding: 2,
    height: 21,
    width: 21,
    marginRight: 10,
  },
});

export default LACheckbox;
