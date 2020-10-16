import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import UserProvider from './context/user/UserProvider';
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
