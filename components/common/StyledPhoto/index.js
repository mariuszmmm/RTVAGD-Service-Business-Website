import styled from "styled-components";

export const StyledPhoto = styled.div`
  position: relative;
  width: 30vw;
  aspect-ratio: 1;
  max-width: 600px;
  justify-self: center;
  margin: clamp(2px, 5vw, 40px) 0;

  @media(orientation: portrait) {
    width: clamp(30vw, 59vw, 520px);
  }
`;  