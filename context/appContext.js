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
  const [isEmailValid, setEmailValid] = useState(false);

  const checkEmail = email => {
    setLoading(true);
    apiRequest
      .post(apiUrl.checkEmail, email)
      .then(response => {
        response.status === 200 && setEmailValid(true);
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

  const preferences = useMemo(
    () => ({
      checkEmail,
      setEmailError,
      setEmailValid,
      isEmailValid,
      isLoading,
      emailError,
    }),
    [isLoading, emailError, isEmailValid],
  );
  return (
    <App_Context.Provider value={preferences}>{children}</App_Context.Provider>
  );
}
