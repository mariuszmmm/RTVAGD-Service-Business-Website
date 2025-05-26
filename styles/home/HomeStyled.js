import styled, { css } from "styled-components";

export const Hero = styled.main`
  text-align: center;
  padding: 120px 0 9vh;
  min-height: 100vh;  
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 80px 0 6vh;
  }
`;

export const HeroHeader = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  min-height: clamp(500px, 50vw, 800px);  

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }

  @media (orientation: portrait) {
    min-height: clamp(370px, 106vw, 900px);  
  }
`;

export const HeroTitle = styled.h1`
  margin: 60px 0 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
  margin: 30px 0 0;
    font-size: 1.3rem;
  }

  /* @media (orientation: portrait) {
     margin: 20px 0 0;
  } */
`;

export const HeroText = styled.p`
  margin: 36px 0;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 20px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 16px 0;
  }
`;