import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  SocialIcon,
  SocialIcons,
  FacebookIcon,
  GoogleIcon,
} from "./styled";
import { serwis } from "../../../utils/serwis";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; 2024 {serwis.name}. Wszelkie prawa zastrzeżone.
        </FooterText>
        <SocialIcons>
          <FooterText>
            <SocialIcon href={serwis.url.facebook} target="_blank">
              <a
                href="https://www.facebook.com/profile.php?id=100063811592941"
                target="_blank"
              >
                Facebook
              </a>
              facebook
              <FacebookIcon />
            </SocialIcon>{" "}
          </FooterText>
          <FooterText>
            <SocialIcon href={serwis.url.google} target="_blank">
              google
              <GoogleIcon />
            </SocialIcon>
          </FooterText>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};
