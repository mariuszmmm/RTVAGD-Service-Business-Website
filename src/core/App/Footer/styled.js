import styled from "styled-components";
import { ReactComponent as facebookIcon } from "./icons/facebook.svg";
import { ReactComponent as envelopeIcon } from "./icons/envelope.svg";
import { ReactComponent as phoneIcon } from "./icons/phone.svg";
import { ReactComponent as googleIcon } from "./icons/address-card.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: min-content;
  padding: 1vh 0;
  font-size: 0.8rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 1500px;
  margin: 10px auto 0;
  padding: 0 20px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    align-items: flex-start;
  }
`;

export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-content: center;
  width: 100%;
  padding: 0 50px;
  gap: 10px clamp(10px, 5.9vw, 200px);

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, auto);
    padding: 0 200px 0 20px;
  }
`;

export const FooterText = styled.span`
  margin: 0;
  font-size: clamp(0.3rem, 1.6vw, 0.9rem);
  font-weight: 200;
  width: max-content;
`;

export const FooterCopy = styled.p`
  margin: 10px 0 3px;
  font-size: clamp(0.2rem, 1.9vw, 0.6rem);
  color: ${({ theme }) => theme.color.border};
  font-weight: 200;
  width: max-content;
  align-self: center;
`;

const styledIcon = (icon) => styled(icon)`
  width: 2vw;
  height: 2vw;
`;

export const EmailIcon = styledIcon(envelopeIcon);
export const PhoneIcon = styledIcon(phoneIcon);
export const FacebookIcon = styledIcon(facebookIcon);
export const GoogleIcon = styledIcon(googleIcon);

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-self: center;
  gap: clamp(5px, 5.5vw, 10px);
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    justify-self: left;
  }

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;
