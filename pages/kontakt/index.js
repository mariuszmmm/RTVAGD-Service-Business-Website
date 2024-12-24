import {
  ContactSection, ContactContainer, ContactInfo,
  ContactText, StyledLink
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

const Contact = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <ContactSection>
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
            w godzinach 9.30-17.00
          </ContactText>
          <Iframe />
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export const getStaticProps = getRatingProps;

export default Contact;