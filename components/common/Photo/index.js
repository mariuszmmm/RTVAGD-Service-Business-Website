import styled from "styled-components";

export const Photo = styled.img`
  grid-area: photo;
  width: 20vw;
  max-width: 80%;
  margin: clamp(20px, 1vw, 40px);
  margin-top: 40px;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-self: center;
    width: 50%;
    margin-top: 20px;
  } 
`;