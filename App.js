import React from 'react';
import FormIn from './components/formIn'
import FormOut from './components/formOut'
import './style/style.css'

function App() {
  return (
    <div>
      <div className="row">
        <h4>Обмен валюты</h4>
        <h4>Курсы</h4>
      </div>
      <div className="change">
        <React.Fragment>
          <FormIn/>
          <FormOut/>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
