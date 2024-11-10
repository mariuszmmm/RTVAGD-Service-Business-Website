import { HemletForTelevisionService } from "./HemletForTelevisionService";
import { Photo, ServiceItem } from "../styled";
import { SubTitle } from "../../../common/SubTitle";
import { Text } from "../../../common/Text";
import { Container } from "../../../common/Container";
import { Section } from "../../../common/Section";
import { Title } from "../../../common/Title";
import { imageUrls } from "../../../utils/urls";

export const TelevisionService = () => (
  <Section>
    <HemletForTelevisionService />
    <Container>
      <Title><span>✔ </span>Naprawa Telewizorów</Title>
      <main>
        <ServiceItem>
          <SubTitle>Fachowa naprawa telewizorów wszystkich typów i&nbsp;marek</SubTitle>
          <Photo src={imageUrls.telewizor} alt="naprawa telewizorow" />
          <Text>
            Czy Twój telewizor przestał działać? Niezależnie od&nbsp;tego, czy&nbsp;to&nbsp;brak&nbsp;obrazu, brak&nbsp;dźwięku, problemy z&nbsp;zasilaniem czy&nbsp;uszkodzone matryca -&nbsp;jestem tutaj, aby&nbsp;przywrócić Twój telewizor do&nbsp;pełnej sprawności.
            Specjalizuję&nbsp;się w&nbsp;naprawach zarówno tradycyjnych, jak i&nbsp;nowoczesnych modeli, oferując szybką i&nbsp;profesjonalną obsługę.
            <br />
            Dzięki dostępowi do&nbsp;oryginalnych części zamiennych oraz&nbsp;nowoczesnemu sprzętowi diagnostycznemu, potrafię szybko zidentyfikować i&nbsp;skutecznie usunąć usterki.
            Moim celem jest, abyś mógł cieszyć się ulubionymi programami bez zakłóceń.
          </Text>
        </ServiceItem>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka diagnoza: </h3>Zidentyfikuję problem w&nbsp;krótkim czasie, abyś jak najszybciej mógł wrócić do oglądania ulubionych filmów i&nbsp;programów.</li>
          <li><h3>Wysoka jakość naprawy: </h3>Używam tylko oryginalnych części, co zapewnia długotrwałą sprawność Twojego telewizora.</li>
          <li><h3>Zadowolenie klientów: </h3>Klienci doceniają moją rzetelność, terminowość i&nbsp;jakość świadczonych usług, co potwierdzają pozytywne opinie.</li>
          <li><h3>Elastyczność: </h3>Oferuję naprawy w warsztacie oraz dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby&nbsp;zepsuty telewizor przeszkodził&nbsp;Ci w&nbsp;oglądaniu ulubionych programów. Skontaktuj&nbsp;się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę Twój telewizor do&nbsp;życia!
        </Text>
      </main>
    </Container>
  </Section>
);