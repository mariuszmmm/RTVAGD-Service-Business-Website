import styled, { css } from "styled-components";

export const Hero = styled.section`
  text-align: center;
  padding: 100px 0 9vh;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 100px 0 6vh;
  }
`;

export const HeroContainer = styled.header`
  max-width: 1200px;
  min-height: 800px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    min-height: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    min-height: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    min-height: 350px;
    padding: 10px;
  }

  @media (orientation: portrait) {
    min-height: 1100px;

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
      min-height: 850px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      min-height: 730px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      min-height: 630px;
    }
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 3vw, 3rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 10px;
    font-size: 1.3rem;
  }

  @media (orientation: portrait) {
    /* font-size: 1.5rem; */
  }
`;

const textStyled = css`
  opacity: ${({ $notShow }) => ($notShow ? 0 : 1)};
  margin-bottom: 50px;
  font-size: clamp(0.8rem, 2.3vw, 1.3rem);
  line-height: 1.5;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 20px;
  }
`;
export const HeroText = styled.h2`
  ${textStyled}
`;

export const HeroSubText = styled.h3`
  ${textStyled}
  font-size: clamp(0.6rem, 1.8vw, 1.1rem);
`;
