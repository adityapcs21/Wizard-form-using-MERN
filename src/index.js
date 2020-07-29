import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './redux/store';
import Form from './form/Form';

ReactDOM.render(
  <Provider store={store}>
  
  <React.StrictMode>
    <App />
  </React.StrictMode>
 
  
</Provider>
,
  document.getElementById('root')
);
