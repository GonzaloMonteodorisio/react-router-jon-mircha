import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Acerca from '../../pages/Acerca';
import Contacto from '../../pages/Contacto';
import Error404 from '../../pages/Error404';
import Home from '../../pages/Home';

function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
            // Creo que no es necesario "exact" en versiones de react-router-dom a partir de la 6.0
          />  
          <Route 
            path='/acerca'
            element={<Acerca />}
          >
          </Route>
          <Route 
            path='/contacto'
            element={<Contacto />}
          />
          <Route 
            path='*'
            element={<Error404 />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;