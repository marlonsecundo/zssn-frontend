import { createGlobalStyle } from 'styled-components';

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
