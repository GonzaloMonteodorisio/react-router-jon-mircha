import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Productos() {
  // let location = useLocation();
  // console.info('Productos - location: ', location);
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  console.info('Productos - query: ', query);
  const LIMIT = 20;
  let start = parseInt(query.get('inicio')) || 1;
  let end = parseInt(query.get('fin')) || LIMIT;
  console.info('Productos - start: ', start);
  console.info('Productos - end: ', end);

  let navigate = useNavigate();
  console.info('Productos - navigate: ', navigate);

  const handlePrev = e => {
    navigate(`?inicio=${start - LIMIT}&fin=${end - LIMIT}`);
  }

  const handleNext = e => {
    navigate(`?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
  }

  return (
    <div>
      <h3>Productos</h3>
      <p>Mostrando productos del <b>{start}</b> al <b>{end}</b></p>
      {start > LIMIT && <button onClick={handlePrev}>Atrás</button>}
      <button onClick={handleNext}>Adelante</button>
    </div>
  )
}

export default Productos;