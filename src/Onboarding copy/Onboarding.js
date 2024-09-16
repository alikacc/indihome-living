import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import LoginForm from './Loginform';
import Carousel from './Carousel';
import backgroundImage from '../assets/dashboard.png'; // Import the image

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  body {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImage}); /* Reference the imported image */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Homepage = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <LoginForm />
      <Carousel />
    </AppContainer>
  </>
);

export default Homepage;
