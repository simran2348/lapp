import {createContext, useMemo, useState} from 'react';

export const App_Context = createContext(null);

export default function ContextWrapper({children}) {
  const [user, setUser] = useState({
    name: 'simmi',
  });

  const preferences = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );
  return (
    <App_Context.Provider value={preferences}>{children}</App_Context.Provider>
  );
}
