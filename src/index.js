import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Nav.js';
import { env } from './config';

ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <App />
    <About/>
    <Contact env={env} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
