import styled from "styled-components";

export const Team = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  aspect-ratio: 255/170;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 10px;
  margin-top: 80px;
`;
