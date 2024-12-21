import styled, { css } from "styled-components";

export const Emoticon = styled.div`
  position: relative;
  width: clamp(1.5rem, 3vw, 2rem);
  aspect-ratio: 1;
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px ;
  margin-bottom: 4px;
 
  ${({ $logo }) => $logo && css`
    margin: 0;
    width: clamp(0.8rem, 2.5vw, 1.5rem);
  `}

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: ${({ $logo }) => $logo ? " block" : "none"};
  }
`; 