import React from 'react';

import { 
  NavLink, 
  Outlet,
  Route,
  Routes,
  useMatch,
  useParams
} from 'react-router-dom';

function Topic() {
  let { topic } = useParams();
  console.info('ReactTopics - topic: ', topic);
  return (
    <div>
      <h4>{topic}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus dignissimos, deserunt nobis nostrum aperiam iste incidunt saepe delectus quia commodi reiciendis obcaecati expedita beatae placeat quaerat quasi fuga laudantium.</p>
    </div>
  )
}

function ReactTopics() {
  let { pathname, pathnameBase } = useMatch('/react/*');
  console.info('React Topics - pathname: ', pathname);
  console.info('React Topics - pathnameBase: ', pathnameBase);
  return (
    <div>
      <h3>Temas de React</h3>
      <nav>
        <NavLink to={`${pathnameBase}/jsx`}>JSX</NavLink>
        <NavLink to={`${pathnameBase}/props`}>Props</NavLink>
        <NavLink to={`${pathnameBase}/estado`}>Estado</NavLink>
        <NavLink to={`${pathnameBase}/componentes`}>Componentes</NavLink>
      </nav>
      <Routes>
        <Route
          path={pathnameBase}
          element={
            <>
              <h4>Elige un tema de React</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque neque, aliquam earum corporis perspiciatis rem sint mollitia praesentium fugit nostrum soluta accusantium corrupti officia explicabo quos eos iusto? Quos, est?</p>
            </>
          }
          end 
        > 
        </Route>
        <Route
          path={`/:topic`}
          element={<Topic />}
          // end 
        > 
        </Route>
      </Routes>
    </div>
  )
}

export default ReactTopics;