import { HemletForCoffeeMachineService } from "./HemletForCoffeeMachineService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { imageUrls } from "../../../utils/urls";

export const CoffeeMachineService = () => (
  <Section>
    <HemletForCoffeeMachineService />
    <Container>
      <Title><span>✔ </span>Naprawa Ekspresów do Kawy</Title>
      <main>
        <ServiceItem>
          <SubTitle>Profesjonalna naprawa ekspresów do&nbsp;kawy,<br />niezależnie od&nbsp;marki i&nbsp;modelu.</SubTitle>
          <Photo src={imageUrls.ekspres} alt="naprawa ekspresow" />
          <Text>
            Czy Twój ekspres do&nbsp;kawy przestał działać? A&nbsp;może nie&nbsp;zaparza kawy tak, jak&nbsp;dawniej, wyświetla błędy lub&nbsp;ma&nbsp;inne&nbsp;problemy? Jestem tutaj, aby&nbsp;Ci&nbsp;pomóc.
            Specjalizuję się w&nbsp;naprawie zarówno domowych, jak&nbsp;i&nbsp;profesjonalnych ekspresów do&nbsp;kawy, oferując precyzyjną diagnostykę oraz&nbsp;szybkie i&nbsp;skuteczne naprawy.
            <br />
            Moim celem jest umożliwienie&nbsp;Ci cieszenia&nbsp;się ulubioną kawą bez&nbsp;przerw.
            Dzięki wieloletniemu doświadczeniu oraz&nbsp;dostępowi do&nbsp;oryginalnych części zamiennych, oferuję kompleksową obsługę, dbając o&nbsp;każdy detal.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka diagnostyka: </h3>Zidentyfikuję problem w&nbsp;krótkim czasie, abyś mógł jak&nbsp;najszybciej cieszyć&nbsp;się swoją kawą.</li>
          <li><h3>Wysoka jakość naprawy: </h3>Pracuję na&nbsp;oryginalnych częściach oraz sprawdzonych rozwiązaniach, co&nbsp;zapewnia długotrwałe efekty.</li>
          <li><h3>Zadowolenie klientów: </h3>Moje usługi są&nbsp;rekomendowane przez wielu zadowolonych klientów, którzy wracają z&nbsp;kolejnymi zleceniami.</li>
          <li><h3>Elastyczność: </h3>Oferuję naprawy zarówno w warsztacie, jak&nbsp;i&nbsp;dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby&nbsp;uszkodzony ekspres zepsuł Twój poranek. Skontaktuj&nbsp;się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę pełną funkcjonalność Twojego ekspresu do&nbsp;kawy!
        </Text>
      </main>
    </Container>
  </Section>
);