import {createContext, useMemo, useState} from 'react';

export const LA_Context = createContext(null);

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
    <LA_Context.Provider value={preferences}>{children}</LA_Context.Provider>
  );
}
