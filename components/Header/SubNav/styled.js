import styled, { css } from "styled-components";

export const SubNavWrapper = styled.div`
  position: absolute;
    transform: translateX(-15%);
    max-height: 0;
    opacity: 0;
    overflow-x: hidden;
    z-index: 1;
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
    transition-delay: 0.2s;

    ${({ $show }) => $show && css`
      transition: max-height 0s; 
      opacity: 1;
      max-height: 215px;  
    `}; 
`;