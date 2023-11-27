import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';

export default function NavigationBase({children}) {
  return (
    <NavigationContainer>
      {children}
      <AuthNavigator />
    </NavigationContainer>
  );
}
