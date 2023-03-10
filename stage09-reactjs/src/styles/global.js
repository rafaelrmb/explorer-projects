import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --ff-primary: 'Roboto Slab', serif;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: black;
    color: white;
    font-family: var(--ff-primary);
    font-size: 1rem;
   -webkit-font-smoothing: antialiased;
  }  
  
  a {
    text-decoration: none;
  }

  button {
   cursor: pointer;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;