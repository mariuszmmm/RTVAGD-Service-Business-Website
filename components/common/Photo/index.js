import styled from "styled-components";
import { CldImage } from 'next-cloudinary';

export const Photo = styled(CldImage)`
  grid-area: photo;
  width: 22vw;
  height: auto;
  max-width: 300px;
  margin-left: clamp(20px, 1vw, 40px);
  margin-top: 20px;
  justify-self: right;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    justify-self: center;
    width: 50%;
    margin-top: 20px;
  } 
`;