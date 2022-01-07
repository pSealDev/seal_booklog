import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
