import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../routes';
import {LandingScreen} from '../screens';
import {HomeHeader} from '../resources';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{header: HomeHeader}}
        name={ROUTES.HOME}
        component={LandingScreen}
      />
    </Stack.Navigator>
  );
}
