import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../routes';
import {LandingScreen, LoginScreen} from '../screens';
import {AuthHeader, AuthHeaderBackButton} from '../resources';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        options={{header: props => AuthHeader(props, 'home')}}
        name={ROUTES.HOME}
        component={LandingScreen}
      />
      <Stack.Screen
        options={{
          header: props => AuthHeader(props, 'login'),
        }}
        name={ROUTES.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{header: props => AuthHeader(props, 'register')}}
        name={ROUTES.REGISTER}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
