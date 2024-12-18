import styled, { css } from "styled-components";

export const Emoticon = styled.img`
  width: clamp(1.5rem, 3vw, 2rem);
  height: clamp(1.5rem, 3vw, 2rem);
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px ;
  margin-bottom: 4px;

  ${({ $logo }) => $logo && css`
    margin: 0;
    width: clamp(0.8rem, 2.5vw, 1.5rem);
    height: clamp(0.8rem, 2.5vw, 1.5rem);
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: ${({ $logo }) => $logo ? " block" : "none"};
  }
`; 