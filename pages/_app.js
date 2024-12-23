// import { GlobalProvider } from '../context/GlobalContext';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps }) {
  return (
    // <GlobalProvider>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Background />
        <Header {...pageProps} />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
    // </GlobalProvider>
  );
}

export default App;