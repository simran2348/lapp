import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../routes';
import {
  ForgotPasswordScreen,
  LandingScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens';
import {AuthHeader} from '../resources';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.HOME}>
      <Stack.Screen
        name={ROUTES.HOME}
        options={{
          headerShown: false,
        }}
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
        component={RegisterScreen}
      />
      <Stack.Screen
        options={{header: props => AuthHeader(props, 'forgotPassword')}}
        name={ROUTES.FORGOTPASSWORD}
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
