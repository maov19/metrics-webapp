import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { BrowserRouter } from 'react-router-dom';
import assetsReducer from './components/redux/assetsSlice';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    assets: assetsReducer,
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
reportWebVitals();
