import React from 'react';
import './App.css';
import Main from './Components/HomePage/Main'
import { Route } from 'react-router-dom';
import PageCalculatorContainer from './Components/PageCalculator/PageCalculatorConteiner';



const App = (props) => {
  return (
    <div>
      <Route exact path='/'
        render={() => <Main />} />
      <Route path='/calculator'
        render={() => <PageCalculatorContainer />} />
    </div>
  );
}

export default App;
