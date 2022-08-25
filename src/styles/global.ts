import { createGlobalStyle } from "styled-components";
import { theme } from "../config/theme";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary};
    -moz-box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary};
    -webkit-box-shadow: 0 0 0 2px ${({theme}) => theme.colors.primary};
  }

body {
  background: ${theme.colors.background};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font: 400 1rem ${theme.font.family},sans-serif;
}
`

export default GlobalStyle;