import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {color} from '../constants';

export default function MyStatusBar({backgroundColor, ...props}) {
  return (
    <View style={[styles.statusBar, {backgroundColor}]}>
      <SafeAreaView>
        <StatusBar
          translucent
          backgroundColor={color.white}
          barStyle={'dark-content'}
          {...props}
        />
      </SafeAreaView>
    </View>
  );
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
