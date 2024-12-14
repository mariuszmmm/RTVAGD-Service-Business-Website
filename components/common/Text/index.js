import styled, { css } from "styled-components";

export const Text = styled.p`
  grid-area: ${({$subArea}) => $subArea ? "text_2" : "text"};
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 1rem 0;
  text-align: justify;
  text-justify: inter-word;

  ${({ $forReviews }) => $forReviews && css`
    font-style: italic;
  `}

  h3 {
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;