import styled, { css } from "styled-components";

export const StyledText = styled.p`
  grid-area: ${({ $subArea }) => $subArea ? "text_2" : "text"};
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  margin: 1rem 0;
  text-align: justify;
  text-justify: inter-word;

  ${({ $check }) => $check && css`
    list-style: none;  
    padding-left: 12px;
    
    li {
      position: relative;
      padding-left: 28px; 
    }

    li::before {
      content: "✔"; 
      position: absolute;
      left: 0;
      color: ${({ theme }) => theme.color.check};
      font-size: 1.2em; 
    }
  `};
  
  ${({ $forReviews }) => $forReviews && css`
    font-style: italic;
  `}

  h3 {
    margin-top: 1rem;
    margin-bottom: 0;
  } 
`;

export const StyledSpan = styled(StyledText).attrs({ as: "span" })`
  margin: 0;
`;