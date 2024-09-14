import {createContext, useEffect, useMemo, useState} from 'react';
import axios from 'axios';
import {apiUrl} from '../constants';

export const App_Context = createContext(null);

const apiRequest = axios.create({
  baseURL: 'http://10.0.2.2:3001/api/',
});

export default function ContextWrapper({children}) {
  const [isLoading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isEmailValid, setEmailValid] = useState(false);

  const checkEmail = payload => {
    setLoading(true);
    apiRequest
      .post(apiUrl.checkEmail, payload)
      .then(response => {
        setEmailValid(true);
        setEmailError('');
      })
      .catch(error => {
        setEmailValid(false);
        setEmailError(error.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const login = payload => {
    setLoading(true);
    apiRequest
      .post(apiUrl.signIn, payload)
      .then(response => {
        console.log(response.data);
        setPasswordError('');
      })
      .catch(error => {
        console.log(error.response.data);
        setPasswordError(error.response.data.msg);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const register = payload => {
    setLoading(true);
    apiRequest
      .post(apiUrl.signUp, payload)
      .then(response => {
        console.log('register', response.data);
      })
      .catch(error => {
        console.log('register error', error.response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const preferences = useMemo(
    () => ({
      checkEmail,
      setEmailError,
      setEmailValid,
      login,
      register,
      setPasswordError,
      isEmailValid,
      isLoading,
      emailError,
      passwordError,
    }),
    [isLoading, emailError, isEmailValid, passwordError],
  );
  return (
    <App_Context.Provider value={preferences}>{children}</App_Context.Provider>
  );
}
