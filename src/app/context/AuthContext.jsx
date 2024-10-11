import { createContext, useContext, useState } from "react";


const authProvider = createContext();

export const AuthContext = ({children}) => {
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false)
    const orderPlace = () => setIsOrderSubmitted(true)
    return(
        <authProvider.Provider value={{isOrderSubmitted, orderPlace}}>
            {children}
        </authProvider.Provider>
    )
}
export const useAuth = () => useContext(authProvider)