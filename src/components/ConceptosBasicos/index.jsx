import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Acerca from '../../pages/Acerca';
import Contacto from '../../pages/Contacto';

function ConceptosBasicos() {
  return (
    <div>
      <h2>Conceptos Basicos</h2>
      <Router>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <h3>Home</h3>
                <p>Bienvenidos al tema de las rutas en React</p>
              </>
            }
            // Creo que no es necesario "exact" en versiones de react-router-dom a partir de la 6.0
            exact
          >  
          </Route>
          <Route 
            path='/acerca'
            element={<Acerca />}
            exact
          >
          </Route>
          <Route 
            path='/contacto'
            element={<Contacto />}
            exact
          >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;