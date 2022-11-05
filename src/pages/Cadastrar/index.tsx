import React, { useState } from 'react';
import './style.css';

const Cadastrar = () => {

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [usuario, setUsuario] = useState('');
  const [token, setToken] = useState('');

  const cadastrarVaga = (e) => {
    e.preventDefault()
    const data = {
      "titulo": titulo,
		  "description": descricao,
		  "fone": telefone,
		  "city": {"connect": {"id": parseInt(cidade, 10)}},
		  "user": {"connect": {"id": parseInt(usuario, 10)}}
		}
    console.log(token)
    console.log(data)
    fetch('http://localhost:3000/vaga', 
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
  }

  return (
    <div className='formVaga'>
      <h2>Cadastrar Vaga</h2>
      <form onSubmit={(e) => cadastrarVaga(e)}>
        Titulo: <input type="text" name="titulo" onChange={(e) => setTitulo(e.target.value)} />
        Descrição: <input type="text" name="description" onChange={(e) => setDescricao(e.target.value)}/>
        Telefone: <input type="text" name="fone" onChange={(e) => setTelefone(e.target.value)}/>
        Cidade: <input type="text" name="city" onChange={(e) => setCidade(e.target.value)}/>
        User: <input type="text" name="user" onChange={(e) => setUsuario(e.target.value)}/>
        Token: <input type="text" name="token" onChange={(e) => setToken('Bearer ' + e.target.value)}/>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default Cadastrar