import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Hero = styled.section`
  text-align: center;
  padding: 12vh 0 9vh;
  min-height: calc(100vh - 5vh);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 12vh 0 6vh;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  min-height: 600px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    min-height: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    min-height: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px;
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
    font-size: 1.5rem;
  }
`;

export const HeroText = styled.h2`
  opacity: ${({ $notShow }) => ($notShow ? 0 : 1)};
  margin-bottom: 50px;
  font-size: clamp(0.8rem, 2.5vw, 1.4rem);
  line-height: 1.5;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 20px;
  }
`;

const buttonStyles = css`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: clamp(0.7rem, 2vw, 2rem);
  text-decoration: none;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px 15px;
    margin: 0 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 10px 10px;
    margin: 0 5px;
  }
`;

export const HeroButton = styled.a`
  ${buttonStyles}
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
`;
