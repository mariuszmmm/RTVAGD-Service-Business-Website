import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  FacebookIcon,
  GoogleIcon,
  FooterInfo,
  FooterCopy,
  EmailIcon,
  PhoneIcon,
  StyledLink,
} from "./styled";
import { serwis } from "../../../utils/serwis";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInfo>
          <StyledLink href={`tel:${serwis.phone}`}>
            <PhoneIcon />
            <FooterText>{serwis.phone} </FooterText>
          </StyledLink>
          <StyledLink href={`mailto:${serwis.email}`}>
            <EmailIcon />
            <FooterText>{serwis.email} </FooterText>
          </StyledLink>
          <StyledLink href={serwis.url.facebook}>
            <FacebookIcon />
            <FooterText>facebook</FooterText>
          </StyledLink>
          <StyledLink href={serwis.url.google}>
            <GoogleIcon />
            <FooterText>google</FooterText>
          </StyledLink>
        </FooterInfo>
        <FooterCopy>
          &copy; 2024 {serwis.name}. Wszelkie prawa zastrzeżone.
        </FooterCopy>
      </FooterContainer>
    </FooterWrapper>
  );
};
