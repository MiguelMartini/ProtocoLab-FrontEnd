import { createContext, useState } from "react";

const AuthContext = createContext(null);

export default AuthContext;

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(null);

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken
            }}
        >

            {children}

        </AuthContext.Provider>

    );
}