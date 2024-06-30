import { createGlobalStyle } from "styled-components";
import backgrund from "../assets/images/background.png";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.background};
    background-image: url("${backgrund}");
    background-size: cover;
    background-position: center ; 
    background-repeat: no-repeat; 
    background-attachment: fixed; 
    color: ${({ theme }) => theme.color.white};


    /* position: relative;
            width: 100%;
            height: 100vh; 
            overflow: hidden;  */
  };
`;

export default GlobalStyle;
