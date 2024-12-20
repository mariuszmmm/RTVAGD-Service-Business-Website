import styled from "styled-components";

export const StyledPhoto = styled.div`
position: relative;
  grid-area: photo;
  width: 50vw;
  height: 100%;
  max-width: 300px;
  margin-left: clamp(20px, 1vw, 40px);
  justify-self: center;
  min-height: 70vh;
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-self: center;
    width: 80%;
    min-height: 80vw;
  } 
`;