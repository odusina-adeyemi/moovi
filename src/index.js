
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from '../src/utils/store'; // Import the exported store
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App component with the Provider component and pass the store */}
      <App />
    </Provider>
  </React.StrictMode>
);
