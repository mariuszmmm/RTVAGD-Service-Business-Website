import styled from "styled-components";

export const ServiceOffer = styled.div`
  scroll-margin-top: clamp(4rem, 7vw, 5.5rem);
  margin: 0 0 60px;
  display: grid;
  grid-template-areas:
    "header header"
    "text photo";  
 
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin: 0 0 20px;
  }
`;