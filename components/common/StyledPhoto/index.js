import styled from "styled-components";

export const StyledPhoto = styled.div`
  position: relative;
  grid-area: photo;
  width: 80vw;
  aspect-ratio: 1;
  max-width: 300px;
  justify-self: center;
  margin: clamp(2px, 5vw, 40px) 0;
`;