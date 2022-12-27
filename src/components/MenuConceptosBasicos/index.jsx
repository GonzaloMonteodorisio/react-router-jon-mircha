import React from 'react';
import { Link, Navigate, NavLink } from 'react-router-dom';

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
        <li>
          <span>Parámetros: </span>
          <NavLink 
            to='/usuario/:gonzalo' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            gonzalo
          </NavLink>
          <NavLink 
            to='/usuario/:manuelita' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            manuelita
          </NavLink>
        </li>
        <li>
          <span>Parámetros de consulta: </span>
          <NavLink 
            to='/productos' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            Productos
          </NavLink>          
        </li>
        <li>
          <span>Redirecciones</span>
          <NavLink 
            to='/about' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            About
          </NavLink>   
          <NavLink 
            to='/contact' 
            className={({isActive}) => 
            isActive ? 'active' : undefined
          }
          >
            Contact
          </NavLink>   
        </li>
      </ol>
    </nav>
  )
}

export default MenuConceptosBasicos;