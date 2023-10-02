import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/hook-localStorage/useLocalStorage";
import * as authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const key = 'userData';
    const navigate = useNavigate();

    const [auth, setAuth] = useLocalStorage(key, []);
    const [serverError, setServerError] = useState(null);

    async function authLogin(value) {
        const result = await authServices.login(value);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setAuth(result);
        navigate('/');
    }
    

    async function authRegister(value) {
        const result = await authServices.register(value);
        if (result.message) {
            setServerError(result.message);
            return serverError;
        }

        setAuth(result);
        navigate('/');
    }

    function authLogout() {
        localStorage.clear(key);
        setAuth({});
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ user: auth, serverError, authLogin, authRegister, authLogout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;