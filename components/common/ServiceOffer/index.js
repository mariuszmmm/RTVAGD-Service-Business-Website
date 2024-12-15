import styled from "styled-components";

export const ServiceOffer = styled.div`
  scroll-margin-top: clamp(4rem, 7vw, 5.5rem);
  margin: 0 0 60px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "header header"
    "text photo"
    "text_2 text_2";  
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-areas:
    "header"
    "text"
    "photo"
    "text_2";
  } 
`;