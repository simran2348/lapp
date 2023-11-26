import {ScrollView, StyleSheet, View} from 'react-native';
import {LandingScreen} from './screens';
import {color} from './constants';
import {MyStatusBar} from './components';
import {NavigationBase} from './navigation';

export default function App() {
  return (
    <NavigationBase>
      <View style={styles.appContainer}>
        <MyStatusBar backgroundColor={color.theme} barStyle={'light-content'} />
        <ScrollView>
          <LandingScreen />
        </ScrollView>
      </View>
    </NavigationBase>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: color.white,
  },
});
