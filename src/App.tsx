import { ThemeProvider } from "styled-components";

import { theme } from "./config/theme";
import { Router } from "./router";
import { Header } from "./components/Header";

import GlobalStyle from "./styles/global";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
