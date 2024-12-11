import styled, { css } from "styled-components";
import { Button } from "../Button";

export const ButtonLink = styled(Button).attrs({ as: "a" })`
  ${({ $opinia }) => $opinia && css`
    position: absolute;
    top: 67px;
    right: 20px;
    padding: 8px 15px;
    font-size: clamp(0.3rem, 1.6vw, 0.9rem);
    font-weight: 600;
    opacity: 1;
    transition:  opacity 0.2s ease;
  
    ${({ $hidden }) => $hidden && css`
        opacity: 0;
        pointer-events: none;
    `}; 

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      margin: 0;
      padding: 5px 10px;
      top: 60px;
    };
    
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      top: 56px;
    }
  `}
`;
