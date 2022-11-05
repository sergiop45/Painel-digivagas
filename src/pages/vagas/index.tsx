import React, { useState, useEffect } from 'react'
import CardVaga from '../../components/cardVaga';
import './style.css';

const Vagas = () => {

  const [vagas, setVagas] = useState();
  const [cidades, setCidades] = useState()

  async function buscarVagas () {

    await fetch('http://localhost:3000/vaga')
    .then((res) => res.json()).then((data) => setVagas(data))
    .catch((err) => alert(err));
    
  }

  async function buscarCidades () {

    await fetch('http://localhost:3000/city')
    .then((res) => res.json()).then((data) => setCidades(data))
    .catch((err) => alert(err));
    
  }

  useEffect(() => {
    buscarVagas();
    buscarCidades();
  }, []);

  return (
    <div>
      <div className='feedVaga'>
        <h1>Vagas de Emprego</h1>
        {vagas && (
          vagas.map(((vaga) =>{
            return (
              <CardVaga vaga={vaga} key={vaga.id} cidades={cidades}/>
            )
          }))
          
        )}
        
      </div>
    </div>
  )
}

export default Vagas;