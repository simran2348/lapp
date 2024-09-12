import {createContext, useMemo, useState} from 'react';
import axios from 'axios';
import {apiUrl} from '../constants';

export const App_Context = createContext(null);

const apiRequest = axios.create({
  baseURL: 'http://10.0.2.2:3001/api/',
});

export default function ContextWrapper({children}) {
  const [isLoading, setLoading] = useState(false);
  const [isEmailValid, setEmailValid] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const checkEmail = email => {
    setLoading(true);
    setEmailError(null);
    apiRequest
      .post(apiUrl.checkEmail, {email})
      .then(response => {
        console.log(response.status);
        response.status === 200 && setEmailValid(true);
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
      isLoading,
      emailError,
      isEmailValid,
    }),
    [isLoading, emailError, isEmailValid],
  );
  return (
    <App_Context.Provider value={preferences}>{children}</App_Context.Provider>
  );
}
