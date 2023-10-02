import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useFormLogin from '../../custom-hooks/hooks-forms/useFormLogin'
import { Notification } from '../error-box/Notification';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
  const { serverError } = useContext(AuthContext);
  const { value, formError, onChange, onSubmit } = useFormLogin();
  return (
    <section id="loginPage">
 {serverError && <Notification error={serverError} />}
      {formError.email && <Notification error={formError.email} />}
      {formError.password && <Notification error={formError.password} />}
      <form onSubmit={onSubmit}>

        <legend>Login</legend>

        <label htmlFor="email" className="vhide">Email</label>
        <input id="email" className="email" name="email" type="text" placeholder="Email"
          onChange={onChange} value={value.email} />

        <label htmlFor="password" className="vhide">Password</label>
        <input id="password" className="password" name="password" type="password" placeholder="Password"
          onChange={onChange} value={value.password} />

        <button type="submit" className="login">Login</button>

        <p className="field">
          <span>If you don't have profile click <Link to="/register">here</Link></span>
        </p>

      </form>
    </section>
  )
}
