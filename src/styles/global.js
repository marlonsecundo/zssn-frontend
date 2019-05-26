import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html, body, #root {
  height: 100%;
} 

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}


*,
*::before,
*::after {
  box-sizing: inherit;
}
`;

export default GlobalStyles;
