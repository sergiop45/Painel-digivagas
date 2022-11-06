import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/digimon.png'
import './style.css'

export function Navbar()  {
  return (
   <nav className='navbar'>
      
      <div className='logo-nav'>
          <img src={Logo} alt="digimon logo" />
          <p>DigiVagas</p>
      </div>

      <div className='itens-nav'>
        
        <Link to='/'>Home</Link>
        <Link to='/vagas'>Vagas</Link>
        <Link to='/cidades'>Cidades</Link>
        <Link to='/cadastrar'>Cadastrar</Link>
        <Link to='/login' >Login</Link>
        
      </div>
   </nav>
  )
}

export default Navbar