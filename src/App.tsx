import { useState } from "react";
import Home from "./Home";
import GlobalStyles from "./styles/global";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: '#fcfcfc',
    button: '#1b1b1b',
    bright_grey: '#ECECEC',
    light_grey: '#D6D6D6',
    black_400: '#ACABAC',
    black_600: '#757272',
    black_700: '#605C5C',
    primary_red: '#f0004c',
    blue: "#2774E9"
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
