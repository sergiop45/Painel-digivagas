import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormCidade from '../../components/formCidade';
import FormVaga from '../../components/formVaga';
import './style.css';

const Cadastrar = () => {

  const [cadastro, setCadastro] = useState(1)
  const [token, setToken] = useState('');

  const navigate = useNavigate();

  

 

  
  
  return (
    <div>
      <nav className='navCadastro'>
        <button onClick={() => setCadastro(1)}>Vagas</button>
        <button onClick={() => setCadastro(2)}>Cidades</button>
        <button onClick={() => setCadastro(3)}>Usuarios</button>
      </nav>

      {cadastro === 1 && <FormVaga/>}
      {cadastro === 2 && <FormCidade/>}
      
      
    </div>
    
  )
}

export default Cadastrar