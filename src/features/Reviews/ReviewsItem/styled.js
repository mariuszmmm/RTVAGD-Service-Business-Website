import styled from "styled-components";
import logoGoogle from "../../../assets/images/logoGoogle.png";

export const ItemWrapper = styled.div`
  margin: 0 20px 20px;
  background-color: white;
  color: black;
  border-radius: 15px;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
`;

export const Photo = styled.img`
  height: clamp(2.5rem, 6vw, 4rem);
  margin-right: 15px;
`;

export const Data = styled.div`
  width: 100%;
  text-align: left;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  position: relative;
`;

export const Author = styled.h3`
  margin: 0 0 3px;
  padding: 0 25px 0 0;
  font-weight: bold;
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  line-height: 1.4em;

  &::after {
    content: "";
    display: block;
    width: clamp(1.1rem, 2.5vw, 1.5rem);
    height: clamp(1.1rem, 2.5vw, 1.5rem); 
    background-image: url('${logoGoogle}');
    background-size: cover; 
    position: absolute;
    top: 0;
    right: 0; 
  }
`;

export const Text = styled.p`
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  margin: 0;
  text-align: justify;
  text-justify: inter-word;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    text-align: left; 
  }
`;


