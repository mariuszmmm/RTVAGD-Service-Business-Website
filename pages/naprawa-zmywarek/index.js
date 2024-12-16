import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { Photo } from '../../components/common/Photo';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import { getRatingProps } from '../../utils/getRatingProps';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';

const DishwasherService = () => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_zmywarek}
        reviews={reviews}
      />
      <Container>
        <Title>
          Naprawa zmywarek
          <Emoticon
            src={imageUrls.emoticon}
            alt="emoticon"
            loading="lazy"
          />
        </Title>

        <main>
          <SubTitle>
            Fachowe usługi naprawy zmywarek wszystkich marek i&nbsp;modeli
          </SubTitle>
          <Text>
            Awaria zmywarki potrafi skutecznie zakłócić codzienny rytm życia w domu. Rozumiem, jak ważne jest szybkie i skuteczne rozwiązanie problemu, dlatego oferuję kompleksowe usługi diagnostyki i naprawy zmywarek w Przemyślu i okolicach.
          </Text>

          <ServiceOffer>
            <Photo
              src={imageUrls.zmywarka}
              alt="naprawa zmywarek"
              loading='lazy'
              width={dataForMetaTags.naprawa_zmywarek.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_zmywarek.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
            <SubTitle as="h3">
              Najczęstsze problemy z zmywarkami, które naprawiam:
            </SubTitle>
            <Text as="ul">
              <li><b>zmywarka nie podgrzewa wody</b> -&nbsp;problem z&nbsp;grzałką, czujnikiem temperatury lub modułem sterującym.</li>
              <li><b>wycieki wody podczas pracy</b> -&nbsp;uszkodzone uszczelki drzwi, pęknięte węże doprowadzające wodę lub problemy z &nbsp;pompą odpływową.</li>
              <li><b>naczynia pozostają mokre po cyklu suszenia</b> -&nbsp;awaria wentylatora, grzałki suszącej lub uszkodzenie modułu sterującego.</li>
              <li><b>zmywarka nie uruchamia się</b> -&nbsp;problemy z&nbsp;zasilaniem, uszkodzone przyciski lub awaria elektroniki sterującej.</li>
              <li><b>niedokładne mycie naczyń</b> -&nbsp;zapchane dysze spryskujące, zatkany filtr wody lub zużyte ramię natryskowe.</li>
            </Text>
            <Text $subArea>
              Dzięki wykorzystaniu zaawansowanych narzędzi diagnostycznych oraz dostępowi do oryginalnych części zamiennych każda naprawa przebiega sprawnie, a jej efekty są trwałe i niezawodne.
            </Text>
          </ServiceOffer>

          <SubTitle as="h3">
            Dlaczego warto wybrać moje usługi?
          </SubTitle>
          <Text as="ul" $check>
            <li><h3>Szybka reakcja na&nbsp;zgłoszenia</h3>Zdaję sobie sprawę, jak kłopotliwe są awarie zmywarki, dlatego oferuję krótkie terminy realizacji napraw.</li>
            <li><h3>Gwarancja wysokiej jakości napraw</h3>Stosuję wyłącznie sprawdzone, oryginalne części zamienne, co&nbsp;zapewnia długotrwałą sprawność Twojej zmywarki.</li>
            <li><h3>Wieloletnie doświadczenie</h3>Od&nbsp;ponad 20 lat zajmuję się naprawą zmywarek, rozwiązując problemy niezależnie od&nbsp;marki czy modelu urządzenia.</li>
            <li><h3>Elastyczność i&nbsp;wygoda</h3>Naprawy realizuję zarówno w&nbsp;warsztacie, jak i&nbsp;na miejscu u&nbsp;klienta, dostosowując się do Twoich potrzeb i&nbsp;harmonogramu.</li>
          </Text>
          <Text>
            <b>Nie pozwól, aby zepsuta zmywarka psuła Twój dzień! </b>
            Skontaktuj się ze mną, a przywrócę pełną funkcjonalność Twojego urządzenia szybko, profesjonalnie i watrakcyjnej cenie.
          </Text>
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getRatingProps;

export default DishwasherService;