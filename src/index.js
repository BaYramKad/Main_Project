import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC71PG5B7a09E9KN5HJUvede7bsb5zFjo0",
  authDomain: "first-firebas.firebaseapp.com",
  databaseURL: "https://first-firebas-default-rtdb.firebaseio.com",
  projectId: "first-firebas",
  storageBucket: "first-firebas.appspot.com",
  messagingSenderId: "360258568140",
  appId: "1:360258568140:web:314aa48aa3d7d12795e769"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
