import styled from "styled-components";

export const Emoticon = styled.img`
  width: clamp(1.5rem, 3vw, 2rem);
  height: clamp(1.5rem, 3vw, 2rem);
  display: inline-block;
  vertical-align: middle;
  margin-left: 20px ;
  margin-bottom: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    opacity: 0;
  }
`;