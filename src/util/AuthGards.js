import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router-dom";

const AuthGards = ({ children }) => {

    const { user } = useContext(AuthContext);

    if (user.accessToken !== undefined ) {
        return <Navigate to='/' ></Navigate>
    }

    return children ? children : <Outlet />
}

export default AuthGards;