import { createGlobalStyle } from 'styled-components';
import colors from './colors';

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html, body {
  height: 100%;
}

#__next {
  display: flex;
  height: 100%;
}

div, section {
  display: flex;
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
