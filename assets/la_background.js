import * as React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';
export default LABackground = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    style={styles.svg}
    viewBox="0 0 1440 320"
    {...props}>
    <Path
      fill="#ffffff"
      d="m0 32 21.8 21.3C43.6 75 87 117 131 138.7c43.5 21.3 87 21.3 131 42.6 43.5 21.7 87 63.7 131 85.4 43.4 21.3 87 21.3 131-5.4 43.3-26.3 87-80.3 131-96 43.2-16.3 87 5.7 130-5.3 44.1-11 88-53 131-53.3 44 .3 88 42.3 131 80 43.9 37.3 88 69.3 131 48 43.8-21.7 87-95.7 131-112 43.7-15.7 87 26.3 109 48l22 21.3v128H0Z"
    />
  </Svg>
);

const styles = StyleSheet.create({
  svg: {
    height: 320,
    width: 1440,
    position: 'absolute',
    left: -400,
    bottom: 0,
  },
});
