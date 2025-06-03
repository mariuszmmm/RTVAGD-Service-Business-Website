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
  LinkIcon,
} from "./styled";
import { serwis } from "../../utils/serwis";

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <FooterInfo>
        <StyledLink
          href={`tel:${serwis.phone.number}`}
          title="Telefon">
          <PhoneIcon />
          <FooterText>{serwis.phone.formatted} </FooterText>
        </StyledLink>
        <StyledLink
          href={`mailto:${serwis.email}`}
          title="E-mail">
          <EmailIcon />
          <FooterText>{serwis.email} </FooterText>
        </StyledLink>
        <StyledLink
          href={serwis.url.facebook}
          title="Facebook">
          <FacebookIcon />
          <FooterText>Facebook</FooterText>
        </StyledLink>
        <StyledLink
          $link
          href="/"
          title="naprawaprzemysl.pl"
        >
          <LinkIcon />
          <FooterText>{"naprawaprzemysl.pl"} </FooterText>
        </StyledLink>
        <StyledLink
          href={serwis.url.google}
          title="Google"
        >
          <GoogleIcon />
          <FooterText>Google</FooterText>
        </StyledLink>
      </FooterInfo>
      <FooterCopy>
        © 2025 Serwis RTV i AGD w Przemyślu. Wszelkie prawa zastrzeżone.
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;