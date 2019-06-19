import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: "STANFORD FREE";
  src: url("/static/fonts/stanford-free.ttf");
}

html {
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  outline: 0;
}

*:before, *:after {
  box-sizing: inherit;
}

body {
  height: 100%;
  overflow: auto;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'Nunito', sans-serif;
}

#__next {
  display: flex;
  height: 100%;
}

div, section, nav, a, button, form {
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

`;

export default GlobalStyles;
