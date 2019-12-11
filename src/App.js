import React from 'react';
import './styling/output.css'
import Nav from './Components/Nav'
import routes from './routes'
import {withRouter} from 'react-router-dom'


function App(props) {
  return (
    <div className="App">
      {props.location.pathname === '/'
      ? (<>
          {routes}
        </>)
      : (<>
          <Nav />
          {routes}
        </>)}
    </div>
  );
}

export default withRouter(App);
