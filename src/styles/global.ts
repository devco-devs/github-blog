import { createGlobalStyle } from "styled-components";
import { theme } from "../config/theme";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 400 1rem ${theme.font.family},sans-serif;
  background: ${theme.colors.background};
}
`

export default GlobalStyle;