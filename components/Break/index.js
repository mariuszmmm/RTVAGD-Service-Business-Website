import styled from 'styled-components';

export const Break = styled.br`
  @media (max-width: ${({ theme }) => theme.breakpoint.small})  {
    display: none;
  }
`;