import styled, { css } from "styled-components";

export const WashingMachineWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-870px) translateY(-40px);
  z-index: -1;
  transition: opacity 1s ease-in-out;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-700px) translateY(-190px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-560px) translateY(-330px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-520px) translateY(-360px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-470px) translateY(-390px) scale(20%);
      `}
  }

  ${({ $center }) =>
    $center &&
    css`
      top: clamp(220px, 55vw, 350px);
      transform: translateX(-50%) scale(50%);

      @media (orientation: portrait) {
        top: clamp(400px, 45vw, 550px);
        transform: translateX(-50%) translateY(170px) scale(50%);

        @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
          transform: translateX(-50%) translateY(-60px) scale(40%);
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
          transform: translateX(-50%) translateY(0) scale(40%);
        }
      }
    `}
`;

export const Image = styled.img`
  transform: scale(70%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));

  @media (orientation: portrait) {
    ${({ $center }) =>
      $center &&
      css`
        transform: scale(180%);
        max-width: 80vw;
      `};
  }
`;
