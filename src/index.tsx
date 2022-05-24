import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';

import App from './App';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: #000000;
    
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    
  }
  h1, h2, h3 {
    font-size: 36px;
    font-weight: 400;
  }
`


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <>
      <Global/>
      <App />
    </>
  </React.StrictMode>
);

