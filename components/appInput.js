import {StyleSheet, TextInput, View} from 'react-native';
import {FONTS, color} from '../constants';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const App_Input = props => {
  const {
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    placeholder,
    value,
    password,
    onChange,
    type,
    disabled,
    max,
  } = props;
  return (
    <>
      <View style={styles.textBoxContainer}>
        {leftIcon && (
          <FontAwesome5
            onPress={onLeftIconClick}
            name={leftIcon}
            color={color.theme}
            size={25}
            style={styles.icon}
          />
        )}
        <TextInput
          readOnly={disabled}
          style={styles.textInput}
          selectionColor={color.theme}
          placeholder={placeholder}
          placeholderTextColor={color.theme}
          value={value}
          secureTextEntry={password}
          onChangeText={onChange}
          keyboardType={type}
          maxLength={max}
        />
        {rightIcon && (
          <FontAwesome5
            onPress={onRightIconClick}
            name={rightIcon}
            color={color.theme}
            size={25}
            style={styles.icon}
          />
        )}
      </View>
      <View style={styles.textboxShadow}></View>
    </>
  );
};

const styles = StyleSheet.create({
  textBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    padding: 0,
    height: 50,
    fontSize: 18,
    fontFamily: FONTS.NUNITO400,
    paddingHorizontal: 10,
    color: color.black,
  },
  icon: {
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 1,

    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 3,

    overflow: 'visible',
    padding: 10,
  },
  textboxShadow: {
    height: 0,
    borderWidth: 1,
    borderColor: color.theme,
    marginBottom: 40,
    backgroundColor: color.white,
    borderRadius: 10,

    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 3,

    elevation: 3,
  },
});

export default App_Input;
