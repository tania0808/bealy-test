import { useState } from "react";
import Home from "./Home";
import GlobalStyle  from './theme/globalStyles'
import { ThemeProvider } from "styled-components";
import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
