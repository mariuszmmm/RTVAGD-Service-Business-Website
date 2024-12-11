import styled from "styled-components";

export const Photo = styled.img`
  grid-area: photo;
  width: 15vw;
  max-width: 70%;
  margin: clamp(20px, 1vw, 40px);
  margin-top: 50px;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: none;
  } 
`;