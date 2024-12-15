import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { Photo } from '../../components/common/Photo';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';

const TelevisionService = () => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_telewizorow}
      />    <Container>
        <Title>
          Naprawa telewizorów
          <Emoticon
            src={imageUrls.emoticon}
            alt="emoticon"
            loading="lazy"
          />
        </Title>

        <main>
          <SubTitle>
            Fachowa naprawa telewizorów wszystkich typów i marek
          </SubTitle>
          <Text>
            Zepsuty telewizor to problem, który może zakłócić Twoją rozrywkę i dostęp do informacji. Niezależnie od tego, czy Twój sprzęt to starszy model LCD, nowoczesny OLED, czy zaawansowany telewizor Smart TV, jestem tutaj, aby pomóc. Oferuję profesjonalną naprawę telewizorów, niezależnie od marki i typu urządzenia, zapewniając szybką i skuteczną obsługę.
          </Text>

          <ServiceOffer>
            <Photo
              src={imageUrls.telewizor}
              alt="naprawa telewizorów"
              loading='lazy'
              width={dataForMetaTags.naprawa_telewizorow.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_telewizorow.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
            <SubTitle as="h3">
              Najczęstsze problemy z telewizorami, które naprawiam:
            </SubTitle>
            <Text as="ul">
              <li><b>brak obrazu lub problemy z jakością wyświetlania</b> - usterki matrycy, uszkodzenia podświetlenia LED, błędy w układzie sterowania.</li>
              <li><b>brak dźwięku</b> - awarie układów audio, problemy z głośnikami lub oprogramowaniem.</li>
              <li><b>problemy z zasilaniem</b> -  telewizor nie włącza się, wyłącza samoczynnie lub występują nieregularności w działaniu zasilacza.</li>
              <li><b>uszkodzona matryca</b> - pęknięcia, przebarwienia lub martwe piksele.</li>
              <li><b>awaria funkcji Smart TV</b> - problemy z połączeniem internetowym, aplikacjami lub oprogramowaniem.</li>
              <li><b>zakłócenia obrazu lub dźwięku</b> - linie na ekranie, zniekształcony obraz, trzaski w dźwięku.</li>
            </Text>
            <Text $subArea>
              Dzięki nowoczesnym narzędziom diagnostycznym i dostępowi do oryginalnych części zamiennych gwarantuję trwałość i niezawodność każdej naprawy.
            </Text>
          </ServiceOffer>

          <SubTitle as="h3">
            Dlaczego warto wybrać moje usługi?
          </SubTitle>
          <Text as="ul" $check>
            <li><h3>Szybka i trafna diagnostyka</h3>Zidentyfikuję przyczynę usterki w krótkim czasie, dzięki czemu Twój telewizor szybko wróci do pełnej sprawności.</li>
            <li><h3>Profesjonalna jakość naprawy</h3>Korzystam wyłącznie z oryginalnych części zamiennych oraz zaawansowanych technik naprawczych, co zapewnia długotrwałą niezawodność urządzenia.</li>
            <li><h3>20 lat doświadczenia</h3>Specjalizuję się w naprawach telewizorów od ponad dwóch dekad, zdobywając zaufanie wielu klientów.</li>
            <li><h3>Wygoda i elastyczność</h3>Oferuję zarówno naprawy w warsztacie, jak i dojazd do klienta. Dopasowuję terminy do Twoich potrzeb.</li>
          </Text>
          <Text>
            <b>Nie pozwól, aby usterka telewizora popsuła Twój czas wolny! </b>
            Skontaktuj się ze mną już dziś, a sprawnie przywrócę Twój telewizor do pełnej funkcjonalności, byś mógł znów cieszyć się ulubionymi programami i filmami.
          </Text>
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default TelevisionService;