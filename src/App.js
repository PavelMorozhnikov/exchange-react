import React from 'react';
import './App.css';
import Main from './Components/HomePage/Main'
import PageCalculator from './Components/PageCalculator/PageCalculator'
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Route exact path='/' component={Main} />
          <Route path='/calculator' component={PageCalculator} />
      </div>
    </BrowserRouter>
  );
}

export default App;
