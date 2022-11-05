import React from 'react';
import './style.css';

const CardVaga = ({vaga, cidades}) => {
  return (
    <div key={vaga.id} className='cardVaga'>
        <h4>{vaga.titulo}</h4>
        <p><strong>Descrição:</strong>
        <br />
        {vaga.description}</p>
        <p><strong>Cidade:</strong> {cidades &&
        cidades.map((cidade) => {
          if(cidade.id === vaga.city_id) return(cidade.name)
        })}</p>
        <p><strong>Telefone:</strong> {vaga.fone}</p>
    </div>
  )
}

export default CardVaga