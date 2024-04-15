import { View, Text } from 'react-native'
import React, { createContext, useContext, useState } from 'react'


const AuthContext = createContext();
export const useUserLogin = () => {
    return useContext(AuthContext);
}

export default function Context({ children }) {
    const [userLogin, setUserLogin] = useState();
    const [userAuth, setUserAuth] = useState()
    return (
        <AuthContext.Provider
            value={{ userLogin, setUserLogin, userAuth, setUserAuth }}
        >
            {children}
        </AuthContext.Provider>
    )
}