import {
  ContactSection, ContactContainer, ContactInfo,
  ContactText, StyledLink, ImageContainer
} from "../../styles/kontakt/KontaktStyled";
import { SubTitle } from "../../components/common/SubTitle";
import { Title } from "../../components/common/Title";
import { serwis } from "../../utils/serwis";
import ContactForm from "./ContactForm";
import HelmetForContact from "./HelmetForContact"
import React, { Suspense } from "react";
const Iframe = React.lazy(() => import("./Iframe"));

const Contact = () => (
  <ContactSection>
    <HelmetForContact />
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
          <Suspense fallback={<div>Ładowanie...</div>}>
            <Iframe />
          </Suspense>
        </ImageContainer>
      </ContactInfo>
    </ContactContainer>
  </ContactSection>
);

export default Contact;