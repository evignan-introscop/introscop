import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './components/app/App';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
