import styled from "styled-components";

export const Container = styled.main`
  padding: 120px 0 9vh;
  text-align: center;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 80px 0 9vh;
  }
`;