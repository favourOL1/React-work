/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const AuthContext = createContext()


const AuthProvider = (props) => {

    const [token, setToken] = useState(sessionStorage.getItem("token"))

    function updateToken(value) {
        sessionStorage.setItem("token", value)
        setToken(value)
    }

    return (
        <AuthContext.Provider value={{token, updateToken}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export { AuthContext }