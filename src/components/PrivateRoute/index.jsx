import React from 'react';
import { Route } from 'react-router-dom';

// No se renderiza como un componente <Route /> cuando lo importo a "ConceptosBasicos"
function PrivateRoute(props) {
  return <Route end={props.end} path={props.path} element={props.element} />;
}

export default PrivateRoute;