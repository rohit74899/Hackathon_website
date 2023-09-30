// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Productstore from './Store/Productstore';

ReactDOM.render(
  <Provider store={Productstore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
