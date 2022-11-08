import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';

const Cidade = () => {

  

  const [cidades, setCidades] = useState();
  const [token, setToken] = useState();

  const navigate = useNavigate();

  function getToken() {
    const getToken = localStorage.getItem('token');
  
    if(getToken) {
    const access_token = JSON.parse(getToken);
    setToken(access_token.access_token);
    } else {
      navigate("/login");
    }
    
  }

  async function buscarCidades () {

    await fetch('http://localhost:3000/city')
    .then((res) => res.json()).then((data) => setCidades(data))
    .catch((err) => alert(err));
    
  }

  

  async function deletar(e, id) {

    e.preventDefault();
    
    const idDelete = id+'';
    
    fetch('http://localhost:3000/city/'+idDelete, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
    }).then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('err : '+err));

  }

  

  useEffect(() => {
    
    getToken();
    buscarCidades();
    
    
  }, [deletar]);

  return (
    <div>
      <div className='feedCidades'>
        <h1>Cidades</h1>
        {cidades && (
          
          cidades.map(((cidade) =>{

            return (
              <div key={cidade.id} className='cardCidade'>
                <h5>{cidade.name}</h5>
                <div>
                    <button onClick={(e) => deletar(e, cidade.id)}>Deletar</button>
                    <button>Editar</button>
                </div>
              </div>
            )
          }))
          
        )}
      
      </div>
    </div>
  )
}

export default Cidade;