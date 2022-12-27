import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Acerca from '../../pages/Acerca';
import Contacto from '../../pages/Contacto';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';
import Productos from '../../pages/Productos';
import Usuario from '../../pages/Usuario';
import MenuConceptosBasicos from '../MenuConceptosBasicos';

function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <MenuConceptosBasicos />
        <Routes>
          <Route 
            path='/'
            element={<Home />}
            // Creo que no es necesario "exact" en versiones de react-router-dom a partir de la 6.0 -> es reemplazado por "end"
            end
          />  
          <Route 
            path='/acerca'
            element={<Acerca />}
            end
          >
          </Route>
          <Route 
            path='/contacto'
            element={<Contacto />}
            end
          />
          <Route 
            // URLs amigables
            path='/usuario/:username'
            element={<Usuario />}
            end
          />
          <Route 
            // Parámetros de consulta
            path='/productos'
            element={<Productos />}
            end
          />
          <Route 
            path='*'
            element={<Error404 />}
            end
          />
          <Route 
            path='/about'
            element={<Navigate to='/acerca' />}
            end
          />
          <Route 
            path='/contact'
            element={<Navigate to='/contacto' />}
            end
          />
        </Routes>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;