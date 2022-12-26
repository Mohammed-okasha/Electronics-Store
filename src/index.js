import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//? Main Scss File
import "./sass/main.scss";
//*? React Toast Css
import 'react-toastify/dist/ReactToastify.css';
//? React Router DOM
import { BrowserRouter } from "react-router-dom";
//? State Store**************
import { Provider } from 'react-redux';
import { store } from './RTk/store';
import { GET_CART_VALUES } from './RTk/slices/cartSlice';

// dispatch GET_CART_VALUES Action Creator
store.dispatch(GET_CART_VALUES());
//!=============================================================================
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// import reportWebVitals from './reportWebVitals';
// reportWebVitals();
