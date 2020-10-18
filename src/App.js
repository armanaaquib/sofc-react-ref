import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import QuestionPage from './pages/QuestionPage';

import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/question/:questionId">
        <QuestionPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
