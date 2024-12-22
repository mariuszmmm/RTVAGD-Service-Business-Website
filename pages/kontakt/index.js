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

const Contact = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <>
      < ContactSection >
        <MetaTags
          path={path}
          page={dataForMetaTags.kontakt}
          rating={rating}
          ratingsTotal={ratingsTotal}
        />
        <ContactContainer>
          <Title>Kontakt</Title>
          <ContactForm />
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
              <Iframe />
            </ImageContainer>
          </ContactInfo>
        </ContactContainer>
      </ContactSection >
      {/* <Script
        id="google-maps"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set, e = new URLSearchParams, u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = \`https://maps.\${c}apis.com/maps/api/js?\` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a) })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)) })({ key: "AIzaSyBdnXnOIJ1jabs-RVE4M2IbwJQ04Ym3xKM", v: "weekly" });`,
        }}
      /> */}
    </>
  );
};

export const getStaticProps = getRatingProps;

export default Contact;