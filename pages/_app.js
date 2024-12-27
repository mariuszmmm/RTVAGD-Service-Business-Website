import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Normalize } from 'styled-normalize';
import GlobalStyle from '../styles/GlobalStyle';
import React from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Footer from '../components/Footer';

function App({ Component, pageProps, rating, reviews }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Background />
        <Header {...pageProps} rating={rating}/>
        <Component {...pageProps} reviews={reviews}/>
        <Footer />
      </ThemeProvider>
    </React.StrictMode>
  );
}

export const getStaticProps = async () => {
  const [ratingProps, reviewsProps] = await Promise.all([
    getRatingProps(),
    getReviewsProps(),
  ]);

  return {
    props: {
      ...ratingProps.props,
      ...reviewsProps.props,
    },
  };
};

export default App;