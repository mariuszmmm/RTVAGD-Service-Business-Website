import {
  ContactSection, ContactContainer, ContactInfo,
  ContactText, StyledLink, ImageContainer
} from "../../styles/kontakt/KontaktStyled";
import { SubTitle } from "../../components/common/SubTitle";
import { Title } from "../../components/common/Title";
import { serwis } from "../../utils/serwis";
import ContactForm from "./ContactForm";
import Iframe from "./Iframe";
import { getRatingProps } from "../../utils/getRatingProps";
import MetaTags from "../../components/common/MetaTags";
import { useRouter } from "next/router";
import { dataForMetaTags } from "../../utils/dataForMetaTags";
import Script from "next/script";
import { useEffect, useState } from "react";
// import Image from "next/image";
// import { imageUrls } from "../../utils/urls";

const Contact = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    console.log("useEffect");
    console.log(window.Cookiebot?.consents);

    if (typeof window !== 'undefined') {
      console.log("typeof window !== 'undefined'");

      const checkConsent = () => {
        console.log("checkConsent");

        const interval = setInterval(() => {
          console.log("interval");
          console.log(window.Cookiebot?.consents);

          if (!window.Cookiebot.consents) return;
          if (window.Cookiebot.consents) {
            console.log(window.Cookiebot?.consents);
            if (true) {
              // if (window.Cookiebot.consents?.given && window.Cookiebot?.consents?.statistics) {
              console.log("set true");

              setConsentGiven(true);
            } else {
              console.log("set false");
              setConsentGiven(false);
            }
          }
        }, 3000);

        return () => clearInterval(interval);
      };

      window.addEventListener("CookieConsentUpdate", checkConsent);
      window.addEventListener("CookieConsentDecline", checkConsent);
      window.addEventListener("CookieConsentAccept", checkConsent);
      window.addEventListener("CookieConsentReject", checkConsent);
      window.addEventListener("CookieConsentRevoke", checkConsent);
      window.addEventListener("CookieConsentChange", checkConsent);
      window.addEventListener("CookieConsentRenew", checkConsent);

      return () => {
        window.removeEventListener("CookieConsentChange", checkConsent);
        window.removeEventListener("CookieConsentRenew", checkConsent);
        window.removeEventListener("CookieConsentRevoke", checkConsent);
        window.removeEventListener("CookieConsentUpdate", checkConsent);
        window.removeEventListener("CookieConsentDecline", checkConsent);
        window.removeEventListener("CookieConsentAccept", checkConsent);
        window.removeEventListener("CookieConsentReject", checkConsent);
      };
    }

  }, []);

  return (
    <>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="3b999804-26b5-40e7-93bc-f82624a559cc" type="text/javascript" async></Script>
      < ContactSection >
        <MetaTags
          path={path}
          page={dataForMetaTags.kontakt}
          rating={rating}
          ratingsTotal={ratingsTotal}
        />
        <ContactContainer>
          <Title>Kontakt</Title>
          <ContactForm consentGiven={consentGiven} />
          <ContactInfo>
            <SubTitle>{serwis.name}</SubTitle>
            <ContactText>
              adres:{"  "}
              <StyledLink href={serwis.url.mapaGoogle} title={serwis.adres}>{serwis.adres}</StyledLink>
            </ContactText>
            <ContactText>
              e-mail:{" "}
              <StyledLink href={`mailto:${serwis.email}`} title={serwis.email}>{serwis.email}</StyledLink>
            </ContactText>
            <ContactText>
              telefon:{" "}
              <StyledLink href={`tel:${serwis.phone}`} title={(serwis.phone).replace(/(\d{3})(\d{3})(\d{3})/, '$1-$2-$3')}>{serwis.phone}</StyledLink>
            </ContactText>
            <br />
            <ContactText>NIP: 7952257951</ContactText>
            <br />
            <ContactText>Zapraszamy od poniedziałku do piątku</ContactText>
            <ContactText>
              w godzinach 9.30-17.00
            </ContactText>
            <ImageContainer>
              <Iframe />
              {/* {consentGiven ?
                <Iframe />
                :
                <Image
                  src={imageUrls.mapa}
                  alt={`Mapa Google - ${serwis.name}`}
                  fill
                />} */}
            </ImageContainer>
          </ContactInfo>
        </ContactContainer>
      </ContactSection>
    </>
  );
};

export const getStaticProps = getRatingProps;

export default Contact;