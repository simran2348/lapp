import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import {useEffect} from 'react';

export default function NavigationBase({children}) {
  useEffect;
  return (
    <NavigationContainer>
      {children}
      <AuthNavigator />
    </NavigationContainer>
  );
}
