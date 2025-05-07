// GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    text-decoration: none;
  }

  body {
    background-color: #222222;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color:#1DCD9F; 
    cursor:pointer;  
  }
`;

export default GlobalStyle;
