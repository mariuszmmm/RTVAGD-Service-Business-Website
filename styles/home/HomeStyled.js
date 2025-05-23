import styled, { css } from "styled-components";

export const Hero = styled.section`
  text-align: center;
  padding: 100px 0 9vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 100px 0 6vh;
  }
`;

export const HeroContainer = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto 100px;
  padding: 20px;

  min-height: clamp(500px, 50vw, 800px);  

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px;
  }

  @media (orientation: portrait) {
    min-height: clamp(370px, 106vw, 900px);  
  }
`;

export const HeroTitle = styled.h1`
  margin: 50px 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  @media (orientation: portrait) {
    margin-bottom: 20px;
  }
`;

export const HeroText = styled.p`
  margin-bottom: 36px;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 16px;
  }
`;