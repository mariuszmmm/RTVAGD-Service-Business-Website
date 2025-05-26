import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
  position: absolute;
  top: 400px;
  left: 50%;
  transition: opacity 0.5s ease-in-out;
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  ${({ $left }) => css`
    ${$left ? "transform: translateX(-150%)" : "transform: translateX(50%)"};
  `};

  ${({ $show }) => !$show && css`
      z-index: -1;
      pointer-events: none;
  `};

  @media(orientation: portrait) {
    top: clamp(550px, 50vw, 600px);
    transform: translateX(-50%);

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      top: clamp(420px,65vw, 550px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      top: 350px;
    }
  }
`;