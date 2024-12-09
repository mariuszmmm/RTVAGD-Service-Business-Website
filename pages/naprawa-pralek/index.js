import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { Photo } from '../../components/common/Photo';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import WashingMachineServiceMetaTags from "./WashingMachineServiceMetaTags"
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';
import { Emoticon } from '../../components/common/Emoticon';

const WashingMachineService = () => (
  <Section>
    <WashingMachineServiceMetaTags />
    <Container>
      <Title>
        <span>✔ </span>Naprawa pralek
        <Emoticon
          src={imageUrls.emoticon}
          alt="emoticon"
          loading="lazy"
        />
      </Title>
      <main>
        <ServiceOffer>
          <Photo src={imageUrls.pralka} alt="naprawa pralek" loading='lazy' />
          <SubTitle>Kompleksowe usługi naprawy pralek wszystkich marek.</SubTitle>
          <Text>
            Zepsuta pralka? Nie&nbsp;martw&nbsp;się! Oferuję fachową diagnostykę i&nbsp;naprawę pralek, które przestały działać.
            Niezależnie od&nbsp;problemu problem - czy to brak poboru wody, wycieki, usterki bębna czy niepokojące dźwięki - szybko zidentyfikuję i&nbsp;naprawię usterkę.
            <br />
            Dzięki nowoczesnym narzędziom diagnostycznym oraz&nbsp;oryginalnym częściom zamiennym zapewniam trwałość i&nbsp;niezawodność każdej naprawy.
            Moje doświadczenie oraz zaawansowane techniki naprawcze pozwalają&nbsp;mi przywrócić pełną funkcjonalność Twojej pralki w&nbsp;możliwie najkrótszym czasie.
          </Text>
        </ServiceOffer>
        <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
        <Text as="ul">
          <li><h3>Szybka diagnoza: </h3>Zgłoś problem, a&nbsp;natychmiast zidentyfikuję przyczynę awarii, abyś mógł szybko wrócić do&nbsp;swoich codziennych obowiązków.</li>
          <li><h3>Wysoka jakość naprawy: </h3>Używam tylko oryginalnych części, co&nbsp;zapewnia długotrwałą sprawność i&nbsp;niezawodność Twojego urządzenia.</li>
          <li><h3>Zadowolenie klientów: </h3> Rzetelność i&nbsp;terminowość to&nbsp;moje priorytety, co&nbsp;przekłada&nbsp;się na&nbsp;pozytywne opinie oraz&nbsp;zaufanie moich klientów.</li>
          <li><h3>Elastyczność: </h3>Oferuję zarówno naprawy w&nbsp;warsztacie, jak&nbsp;i&nbsp;dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
        </Text>
        <Text>
          Nie pozwól, aby&nbsp;awaria pralki zakłóciła Twój dzień. Skontaktuj się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę pełną sprawność Twojego urządzenia!
        </Text>
      </main>
    </Container>
  </Section>
);

export const getStaticProps = getSharedStaticProps;

export default WashingMachineService;