import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import header from './container/Header';
import './App.css';
import Error404 from './container/Error404';
import Login from './pages/Login';
import styled, { createGlobalStyle } from 'styled-components';
// import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={header} />
        <Route exact path='/login' component={Login} />
        <Route path='*' component={Error404} />
      </Switch>
    </Router>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Playfair Display', Arial, Helvetica, sans-serif;
  }

  body {
    font-family: 'Playfair Display', Arial, Helvetica, sans-serif;
  }
`;

export default App;
