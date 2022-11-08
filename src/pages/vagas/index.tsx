import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import CardVaga from '../../components/cardVaga';
import './style.css';

const Vagas = () => {

  const [vagas, setVagas] = useState();
  const [cidades, setCidades] = useState()
  const [token, setToken] = useState();

  const navigate = useNavigate();

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

              <CardVaga vaga={vaga} key={vaga.id} cidades={cidades} deletar={deletar}/>  )
          }))
          
        )}
        
      </div>
    </div>
  )
}

export default Vagas;