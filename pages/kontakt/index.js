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
import Image from "next/image";
import { imageUrls } from "../../utils/urls";

const Contact = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;
  const [consentGiven, setConsentGiven] = useState(false);
  console.log(consentGiven);

  useEffect(() => {
    // Sprawdzamy, czy kod działa po stronie klienta
    if (typeof window !== "undefined") {
      const checkConsent = () => {
        const consent = window.Cookiebot?.consent?.preferences ||
          window.Cookiebot?.consent?.statistics ||
          window.Cookiebot?.consent?.marketing ||
          window.Cookiebot?.consent?.functional;
        setConsentGiven(consent || false);
      };

      // Nasłuchujemy na zmiany zgody
      window.addEventListener('CookieConsentUpdate', checkConsent);
      checkConsent();  // Wykonaj wstępne sprawdzenie zgody

      // Sprzątanie po sobie
      return () => window.removeEventListener('CookieConsentUpdate', checkConsent);
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
              w godzinach <>9.30-17.00</>
            </ContactText>
            <ImageContainer>
              {consentGiven ?
                <Iframe />
                :
                <Image
                  src={imageUrls.mapa}
                  alt={`Mapa Google - ${serwis.name}`}
                  fill
                />}
            </ImageContainer>
          </ContactInfo>
        </ContactContainer>
      </ContactSection >
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="3b999804-26b5-40e7-93bc-f82624a559cc" type="text/javascript" async></Script>
    </>
  );
};

export const getStaticProps = getRatingProps;

export default Contact;