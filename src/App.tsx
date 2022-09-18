import { useState } from "react";
import Home from "./Home";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: '#fcfcfc',
    button: '#1b1b1b',
    black_400: '#ACABAC',
    primary_red: '#f0004c'
  }
} 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Home />
      </>
    </ThemeProvider>
  );
}

export default App;
