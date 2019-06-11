import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "STANFORD FREE";
  src: url("/static/fonts/stanford-free.ttf");
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html, body {
  height: 100%;
  overflow: auto;
}

#__next {
  display: flex;
  height: 100%;
}

div, section, nav, a, button {
  display: flex;
}

button, input {
   border: none;
   outline: none;
}

a {
  text-decoration: none;
  color: ${colors.text};

  ::visited {
    color: ${colors.text};
  }
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Nunito', sans-serif;
}


*,
*::before,
*::after {
  box-sizing: inherit;
}
`;

export default GlobalStyles;
