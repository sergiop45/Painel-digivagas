import React from 'react'
import {FormLogin} from '../../components/formLogin'
import './style.css';

const Login = () => {
  return (
    <div className='LoginPage'>
        <h1>Login no sistema</h1>
        <FormLogin />
    </div>
  )
}

export default Login