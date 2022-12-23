import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function MenuConceptosBasicos() {
  return (
    <nav>
      <ol>
        <li>
          <span style={{display: 'block'}}>Enlaces HTML (no recomendado - se recarga toda la página): </span>
          <a href="/">Home</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
        </li>
        <li>
          <span style={{display: 'block'}}>Componente Link (recomendado - no se recarga toda la página): </span>
          <Link to='/'>Home</Link>
          <Link to='/acerca'>Acerca</Link>
          <Link to='/contacto'>Contacto</Link>
          <Link to='/no-existe'>Error 404</Link>
        </li>
        <li>
          <span style={{display: 'block'}}>Componente NavLink (tiene una propiedad "activeClassName" adicional) : </span>
          <NavLink 
            to='/' 
            className={({isActive}) => 
              isActive ? 'active' : undefined
            }
          >
            Home
          </NavLink>
          <NavLink 
            to='/acerca' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            Acerca
          </NavLink>
          <NavLink 
            to='/contacto' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            Contacto
          </NavLink>
          <NavLink 
            to='/no-existe' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            Error 404
          </NavLink>
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptosBasicos;