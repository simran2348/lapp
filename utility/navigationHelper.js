import {ROUTES} from '../routes';

export const ToHome = navigation => {
  navigation.navigate(ROUTES.HOME);
};

export const ToDoctorLogin = navigation => {
  navigation.navigate(ROUTES.LOGIN);
};

export const ToPatientLogin = navigation => {
  navigation.navigate(ROUTES.REGISTER);
};

export const ToForgotPassword = navigation => {
  navigation.navigate(ROUTES.FORGOTPASSWORD);
};
