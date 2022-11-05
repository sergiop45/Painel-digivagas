import React, { useState, useEffect } from 'react'
import './style.css';

const Cidade = () => {

  const [cidades, setCidades] = useState()

  async function buscarCidades () {

    await fetch('http://localhost:3000/city')
    .then((res) => res.json()).then((data) => setCidades(data))
    .catch((err) => alert(err));
    
  }

  useEffect(() => {
    
    buscarCidades();

  }, []);

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
                    <button>Deletar</button>
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