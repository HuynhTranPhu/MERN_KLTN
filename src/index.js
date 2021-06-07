import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './Store/store';
import reportWebVitals from './reportWebVitals';
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./i18n";

import {DataProvider} from './Socket'
import { Suspense } from 'react';
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <DataProvider>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
        <ToastContainer autoClose={1500} />
      </DataProvider>
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
