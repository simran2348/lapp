import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LandingScreen from './screens/landingScreen';
import {FONTS} from './utility';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <ScrollView>
        <LandingScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    fontFamily: FONTS.NUNITO,
  },
});
