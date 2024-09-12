import {ROUTES} from '../routes';

export const ToHome = navigation => {
  navigation.navigate(ROUTES.HOME);
};

export const ToLogin = navigation => {
  navigation.navigate(ROUTES.LOGIN);
};

export const ToRegister = navigation => {
  navigation.navigate(ROUTES.REGISTER);
};

export const ToForgotPassword = navigation => {
  navigation.navigate(ROUTES.FORGOTPASSWORD);
};
