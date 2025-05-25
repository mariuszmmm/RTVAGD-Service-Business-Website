import styled from "styled-components";

export const Title = styled.h1`
  margin: 60px 0 0;
  font-size: clamp(1.5rem, 3vw, 3rem);
  text-align: center;

  span {
    color: ${({ theme }) => theme.color.check};
    margin-right: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-right: 0;
    span {
      display: none; 
    }
  }
`;