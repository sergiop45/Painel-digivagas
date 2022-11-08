import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const FormVaga = () => {

const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('1');
  const [cidades, setCidades] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  async function buscarCidades () {

    await fetch('http://localhost:3000/city')
    .then((res) => res.json()).then((data) => setCidades(data))
    .catch((err) => alert(err));
    
  }

  useEffect(() => {
    setUsuario('1')
    buscarCidades();
    const getToken = localStorage.getItem('token');
  
    if(getToken) {
    const access_token = JSON.parse(getToken);
    setToken(access_token.access_token);
    } else {
      navigate("/login");
    }

  }, [])

  const cadastrarVaga = (e) => {
    e.preventDefault()
    
    const data = {
      "titulo": titulo,
		  "description": descricao,
		  "fone": telefone,
		  "city": {"connect": {"id": parseInt(cidade, 10)}},
		  "user": {"connect": {"id": parseInt(usuario, 10)}}
		}
   
    fetch('http://localhost:3000/vaga', 
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      body: JSON.stringify(data),

    }).then((res) => {
      setTitulo('');
      setDescricao('');
      setTelefone('');
      if(res.status === 401) {
        alert("Faça Login!");
        navigate("/login");
      } else {
        alert('Vaga cadastrada!');
      }
      
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className='formVaga'>
      <h2>Cadastrar Vaga </h2>
      <form onSubmit={(e) => cadastrarVaga(e)}>
        Titulo: <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        Descrição: <textarea name="description" value={descricao}  cols={30} rows={10} onChange={(e) => setDescricao(e.target.value)} />
        Telefone: <input type="text" name="fone" value={telefone} onChange={(e) => setTelefone(e.target.value)}/>
        <select name="city" onChange={(e) => setCidade(e.target.value)}>
          {cidades.length > 0 && cidades.map((city) => {
              return(
                <option value={city.id} key={city.id}>{city.name}</option>
              )
          })}
        </select>
        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  )
}

export default FormVaga