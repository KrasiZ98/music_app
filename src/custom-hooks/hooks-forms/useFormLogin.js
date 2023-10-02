import { useContext, useState } from 'react';
import { loginValidation } from '../../components/login-page/loginValidation';
import { AuthContext } from '../../context/AuthContext';

export default function useFormLogin() {

    const { authLogin } = useContext(AuthContext);

    const [value, setValue] = useState({
        email: '',
        password: '',
    });

    const [formError, setFormError] = useState({});

    function onChange(e) {
        setValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }));
    }

    function onSubmit(event) {
        event.preventDefault();
        const error = loginValidation(value);
        setFormError(error);

        if (Object.values(error).length === 0) {
            authLogin(value)
            setValue({ email: "", password: "" })
        }

    }

    return { value, formError, onChange, onSubmit };
}
