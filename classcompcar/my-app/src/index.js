import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CardSlice from './Redux-Toolkit/CardSlice';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux'

const store = configureStore({
    reducer:{
      cardList:CardSlice
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

