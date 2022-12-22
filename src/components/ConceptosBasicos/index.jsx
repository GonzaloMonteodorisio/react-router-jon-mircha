import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const ConceptosBasicos = () => {
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
            element={<h3>Acerca</h3>}
            exact
          >
          </Route>
          <Route 
            path='/contacto'
            element={<h3>Contacto</h3>}
            exact
          >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default ConceptosBasicos;