import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import useFormRegister from '../../custom-hooks/hooks-forms/useFormRegister'
import { AuthContext } from '../../context/AuthContext'
import { Notification } from '../error-box/Notification'

export const Register = () => {
  const { serverError } = useContext(AuthContext);
  const { value, formError, onChange, onSubmit } = useFormRegister();
  return (
    <section id="registerPage">
      {serverError && <Notification error={serverError} />}
      {formError.email && <Notification error={formError.email} />}
      {formError.password && <Notification error={formError.password} />}
      {formError.rePassword && <Notification error={formError.rePassword} />}
      <form onSubmit={onSubmit}>

        <legend>Register</legend>

        <label htmlFor="email" className="vhide">Email</label>
        <input id="email" className="email" name="email" type="text" placeholder="Email"
          onChange={onChange} value={value.email} />

        <label htmlFor="password" className="vhide">Password</label>
        <input id="password" className="password" name="password" type="password" placeholder="Password"
          onChange={onChange} value={value.password} />

        <label htmlFor="conf-pass" className="vhide">Confirm Password:</label>
        <input id="conf-pass" className="conf-pass" name="rePassword" type="password" placeholder="Confirm Password"
          onChange={onChange} value={value.rePassword} />

        <button type="submit" className="register">Register</button>

        <p className="field">
          <span>If you already have profile click <Link to="/login">here</Link></span>
        </p>

      </form>
    </section>
  )
}
