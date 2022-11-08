import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './style.css';

export const FormLogin = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    async function Login (e) {

        e.preventDefault();

        const data = {
            "email": email,
            "password": pass,
        }
        
        await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(data),
        }).then((res) => res.json())
        .then((dados) => {
            localStorage.setItem('token', JSON.stringify(dados));
            navigate('/home');
        })
       .catch((err) => console.log(err));

       

    }





  return (
    <div className='formLogin'>
        <form onSubmit={(e) => Login(e)} >
            <h4>Login</h4>
            Email: <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
            Senha: <input type="password" name="password" onChange={(e) => setPass(e.target.value)}/>
            <input type="submit" value="Entrar" />
        </form>
    </div>
  )
}

