import {
  // ContactButton,
  // ContactForm,
  // ContactInput,
  // ContactLabel,
  // ContactTextarea,
  ContactContainer,
  ContactInfo,
  ContactSection,
  ContactText,
  ContactTitle,
  // Iframe,
  Image,
  ImageContainer,
  MailLink,
  PhoneLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import map from "../../assets/images/mapa.png";

export const Contact = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <ContactSection $show={show}>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Kontakt | Serwis RTV AGD w Przemyślu</title>
            <meta
              name="description"
              content="Skontaktuj się z nami pod numerem telefonu +48 790 258 612 lub odwiedź nas w Przemyślu przy ulicy Generała Józefa Sowińskiego 2."
            />
            <meta
              name="keywords"
              content="kontakt, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
            />
            <link rel="canonical" href="https://naprawaprzemysl.pl/kontakt" />
            <meta
              property="og:title"
              content="Kontakt | Serwis RTV AGD w Przemyślu"
            />
            <meta
              property="og:description"
              content="Skontaktuj się z nami. Serwis RTV i AGD w Przemyślu. Profesjonalna pomoc i szybka naprawa."
            />
            <meta
              property="og:url"
              content="https://naprawaprzemysl.pl/kontakt"
            />
          </Helmet>
        </div>
      </HelmetProvider>
      <ContactContainer>
        <ContactTitle>Kontakt</ContactTitle>
        {/* <ContactForm>
          <ContactLabel>Imię</ContactLabel>
          <ContactInput type="text" placeholder="Twoje imię" required />
          <ContactLabel>Email</ContactLabel>
          <ContactInput type="email" placeholder="Twój email" required />
          <ContactLabel>Wiadomość</ContactLabel>
          <ContactTextarea
            placeholder="Twoja wiadomość"
            required
          ></ContactTextarea>
          <ContactButton type="submit">Wyślij</ContactButton>
        </ContactForm> */}
        <ContactInfo>
          <ContactText>
            telefon:{" "}
            <PhoneLink href={`tel:${serwis.phone}`}> {serwis.phone}</PhoneLink>
          </ContactText>
          <ContactText>
            e-mail:{" "}
            <MailLink href={`mailto:${serwis.email}}`}>{serwis.email}</MailLink>
          </ContactText>
          {/* <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5152.333915350569!2d22.771064331707773!3d49.78292515912198!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473b7f241be960ad%3A0xfc3cd55238f8f8a6!2sNaprawa%20pralek%20i%20sprz%C4%99tu%20RTV%20-%20naprawa%20ekspres%C3%B3w%20do%20kawy%2C%20naprawa%20telewizor%C3%B3w%2C%20naprawa%20zmywarki%2C%20serwis%20agd%2C!5e0!3m2!1spl!2spl!4v1719589983858!5m2!1spl!2spl"
            alt="mapa"
            loading="lazy"
          ></Iframe> */}
          <ImageContainer>
            <a href={serwis.url.mapaGoogle} target="_blank" rel="noreferrer">
              <Image src={map} alt="mapa" />
            </a>
          </ImageContainer>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};
