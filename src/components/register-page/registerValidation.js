export const registerValidation = (value) => {
    const error = {};
    const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    if (value.email === '') {
        error.email = 'Email is required!!!'
    } else if ((EMAIL_PATTERN).test(value.email) === false) {
        error.email = 'Email is not valid!!!';
    }

    if (value.password === '') {
        error.password = 'Password is required!!!';
    } else if (value.password.length <= 4) {
        error.password = 'Password must be more than 4 char!!!';
    }

    if (value.rePassword === '') {
        error.rePassword = 'Confirm Password is required!!!';
    } else if (value.rePassword !== value.password) {
        error.rePassword = 'Password don/t match!!!'
    }

    return error;

}
