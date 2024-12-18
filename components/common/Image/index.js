import styled from "styled-components";
import { CldImage } from 'next-cloudinary';

export const Image = styled(CldImage)`
  width: 100%;
  height: 100%;
  max-width: 300px;
  object-fit: contain; 
 
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));
  transition: transform 0.2s ease-out, filter 0.2s ease-out;

  &:hover {
    transform: scale(101%);
    filter: drop-shadow(10px 10px 15px rgba(255, 140, 0, 0.7));
  }
`;