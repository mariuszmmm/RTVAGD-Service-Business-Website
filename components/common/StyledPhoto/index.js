import styled from "styled-components";

export const StyledPhoto = styled.div`
  position: relative;
  width: 30vw;
  aspect-ratio: 1;
  max-width: 600px;
  justify-self: center;
  margin-bottom: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-bottom: 30px;
  }

  @media(orientation: portrait) {
    width: clamp(30vw, 59vw, 520px);
  }
`;  