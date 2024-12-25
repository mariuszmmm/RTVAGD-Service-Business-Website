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
          title="Zadzwoń i zgłoś sprzęt do naprawy">
          <PhoneIcon />
          <FooterText>{serwis.phone.formatted} </FooterText>
        </StyledLink>
        <StyledLink
          href={`mailto:${serwis.email}`}
          title="Napisz z jakim sprzętem masz problem">
          <EmailIcon />
          <FooterText>{serwis.email} </FooterText>
        </StyledLink>
        <StyledLink
          href={serwis.url.facebook}
          title="Facebook">
          <FacebookIcon />
          <FooterText>facebook</FooterText>
        </StyledLink>
        <StyledLink
          $link
          href={"https://naprawaprzemysl.pl/"}
          title="Link do strony naprawaprzemysl.pl"
        >
          <LinkIcon />
          <FooterText>{"naprawaprzemysl.pl"} </FooterText>
        </StyledLink>
        <StyledLink
          href={serwis.url.google}
          title="Google"
        >
          <GoogleIcon />
          <FooterText>google</FooterText>
        </StyledLink>
      </FooterInfo>
      <FooterCopy>
        &copy; 2024 Serwis RTV i AGD. Wszelkie prawa zastrzeżone.
      </FooterCopy>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;