import { useContext, useState } from 'react'
import { registerValidation } from '../../components/register-page/registerValidation';
import { AuthContext } from '../../context/AuthContext';

export default function useFormRegister() {

    const { authRegister } = useContext(AuthContext);

    const [value, setValue] = useState({
        email: '',
        password: '',
        rePassword: '',
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
        const error = registerValidation(value);
        setFormError(error);

        if (Object.values(error).length === 0) {
            authRegister(value);
            setValue({ email: '', password: '', rePassword: '' });
        }
    }

    return { value, formError, onChange, onSubmit }

}
