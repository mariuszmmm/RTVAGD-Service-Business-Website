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
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import MetaTags from '../../components/common/MetaTags';

const WashingMachineService = () => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_pralek}
      />
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
            <Photo
              src={imageUrls.pralka}
              alt="naprawa pralek"
              loading='lazy'
              width={dataForMetaTags.naprawa_pralek.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_pralek.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
            <SubTitle>Specjalistyczne usługi naprawy pralek wszystkich marek i modeli</SubTitle>
            <Text>
              Zepsuta pralka? Nie pozwól, by awaria utrudniła Twoje codzienne obowiązki. Oferuję kompleksową diagnostykę i naprawę pralek w Przemyślu i okolicach, zapewniając szybkie i trwałe rozwiązanie każdego problemu.
<h3>Najczęstsze problemy z pralkami, które naprawiam:</h3>
             
<b>Pralka nie pobiera wody</b> – problem z elektrozaworem, zatkany filtr lub uszkodzona pompa wody.

<b>Wycieki wody podczas prania</b> – nieszczelne uszczelki, pęknięty wąż odpływowy lub zużycie zbiornika.

<b>Pralka hałasuje lub wibruje</b> – uszkodzone łożyska bębna, zużyte amortyzatory lub niewyważony wsad.

<b>Problemy z wirowaniem</b> – usterki silnika, modułu sterującego lub paska napędowego.

<b>Pralka nie uruchamia się</b> – awarie elektryczne, uszkodzone przyciski lub błędy w oprogramowaniu.
              <br />
              Dzięki nowoczesnym narzędziom diagnostycznym oraz dostępowi do oryginalnych części zamiennych naprawiam pralki szybko i skutecznie, przywracając ich pełną funkcjonalność.
            </Text>
          </ServiceOffer>
          <SubTitle as="h3">Dlaczego warto wybrać moje usługi?</SubTitle>
          <Text as="ul">
            <li><h3>Szybka i trafna diagnoza: </h3>Wykrywam przyczyny problemu już podczas pierwszej wizyty, co pozwala skrócić czas naprawy do minimum.</li>
            <li><h3>Gwarancja trwałości napraw: </h3>Stosuję wyłącznie sprawdzone i oryginalne części, co zapewnia niezawodność urządzenia na długie lata.</li>
            <li><h3>Wieloletnie doświadczenie: </h3>Od ponad 20 lat zajmuję się naprawą pralek – to wiedza, której możesz zaufać.</li>
            <li><h3>Elastyczność i wygoda: </h3>Naprawy wykonuję na miejscu u klienta lub w warsztacie, dostosowując się do Twojego harmonogramu.</li>
          </Text>
          <Text>
            <b>Nie trać czasu na pranie ręczne!</b>
Zadzwoń lub napisz już teraz, a szybko i skutecznie rozwiążę problem z Twoją pralką. Profesjonalizm, uczciwość i rzetelność – to moje priorytety.
          </Text>
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default WashingMachineService;