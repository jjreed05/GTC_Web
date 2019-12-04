import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Home from'./views/home';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

const routing = (
   <Router>
      <div>
         <Route path='/' component={Home} />
      </div>
   </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
