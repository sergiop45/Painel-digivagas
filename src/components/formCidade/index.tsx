import React, { useState } from 'react';
import './style.css';

const FormCidade = () => {

  const [name, setName] = useState('');
  const [token, setToken] = useState('');  

  async function cadastrarCidade(e) {

    e.preventDefault()

    const data = {
        "name": name
    }

    await fetch('http://localhost:3000/city', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(data),
    }).then(() => alert("vaga cadastrada!"))
    .catch((err) => alert(err));

    setName('');
    setToken('');

  }
  

  return (
    <div className='formCidade'>
      <h2>Cadastrar Vaga</h2>
      <form onSubmit={(e) => cadastrarCidade(e)}>
        Name: <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
        Token: <input type="text" value={token} name="token" onChange={(e) => setToken('Bearer ' + e.target.value)}/>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default FormCidade