import React from 'react';
import {createContext,useMemo} from 'react';


export const CurrentUserContext = createContext({});

export const CurrentUserProvider = ({ children }) => {
const [currentUser, setCurrentUser] = React.useState("start");
console.log("Resetting it again",currentUser)
const value = useMemo(() => ({ currentUser, setCurrentUser }), [currentUser])
  
return (
  <CurrentUserContext.Provider value={value}>
    {children}
  </CurrentUserContext.Provider>
)
}

export const useCurrentUser = () => React.useContext(CurrentUserContext)