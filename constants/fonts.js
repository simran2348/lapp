import {Platform} from 'react-native';
const FONTS = {
  ...Platform.select({
    ios: {
      NUNITO200: 'Nunito-ExtraLight',
      NUNITO300: 'Nunito-Light',
      NUNITO400: 'Nunito-Regular',
      NUNITO500: 'Nunito-Medium',
      NUNITO600: 'Nunito-SemiBold',
      NUNITO700: 'Nunito-Bold',
      NUNITO800: 'Nunito-ExtraBold',
      NUNITO900: 'Nunito-Black',
    },
    android: {
      NUNITO200: 'NunitoExtraLight',
      NUNITO300: 'NunitoLight',
      NUNITO400: 'NunitoRegular',
      NUNITO500: 'NunitoMedium',
      NUNITO600: 'NunitoSemiBold',
      NUNITO700: 'NunitoBold',
      NUNITO800: 'NunitoExtraBold',
      NUNITO900: 'NunitoBlack',
    },
  }),
};

export default FONTS;
