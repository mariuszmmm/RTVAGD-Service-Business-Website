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
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import MetaTags from '../../components/common/MetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';

const WashingMachineService = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_pralek}
        rating={rating}
        ratingsTotal={ratingsTotal}
      />
      <Container>
        <Title>
          Naprawa pralek
          <Emoticon
            src={imageUrls.emoticon}
            alt="emoticon"
            loading="lazy"
          />
        </Title>

        <main>
          <SubTitle>
            Specjalistyczne usługi naprawy pralek wszystkich marek i&nbsp;modeli
          </SubTitle>
          <Text>
            Zepsuta pralka? Nie pozwól, by awaria utrudniła Twoje codzienne obowiązki. Oferuję kompleksową diagnostykę i naprawę pralek w Przemyślu i okolicach, zapewniając szybkie i trwałe rozwiązanie każdego problemu.
          </Text>

          <ServiceOffer>
            <Photo
              src={"https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/naprawa-pralki.webp"}
              alt="Naprawa pralek - serwis pralki w Przemyślu"
              loading='lazy'
              width={dataForMetaTags.naprawa_pralek.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_pralek.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
            <SubTitle as="h3">
              Najczęstsze problemy z pralkami, które naprawiam:
            </SubTitle>
            <Text as="ul" $cross>
              <li><b>pralka nie pobiera wody</b> -&nbsp;problem z&nbsp;elektrozaworem, zatkany filtr lub uszkodzona pompa wody.</li>
              <li><b>wycieki wody podczas prania</b> -&nbsp;nieszczelne uszczelki, pęknięty wąż odpływowy lub zużycie zbiornika.</li>
              <li><b>pralka hałasuje lub wibruje</b> -&nbsp;uszkodzone łożyska bębna, zużyte amortyzatory lub niewyważony wsad.</li>
              <li><b>problemy z&nbsp;wirowaniem</b> -&nbsp;usterki silnika, modułu sterującego lub paska napędowego.</li>
              <li><b>pralka nie uruchamia się</b> -&nbsp;awarie elektryczne, uszkodzone przyciski lub błędy w&nbsp;oprogramowaniu.</li>
            </Text>
            <Text $subArea>
              Dzięki nowoczesnym narzędziom diagnostycznym oraz dostępowi do oryginalnych części zamiennych naprawiam pralki szybko i skutecznie, przywracając ich pełną funkcjonalność.
            </Text>
          </ServiceOffer>

          <SubTitle as="h3">
            Dlaczego warto wybrać moje usługi?
          </SubTitle>
          <Text as="ul" $check>
            <li><h3>Szybka i&nbsp;trafna diagnoza</h3>Wykrywam przyczyny problemu już podczas pierwszej wizyty, co&nbsp;pozwala skrócić czas naprawy do&nbsp;minimum.</li>
            <li><h3>Gwarancja trwałości napraw</h3>Stosuję wyłącznie sprawdzone i&nbsp;oryginalne części, co&nbsp;zapewnia niezawodność urządzenia na&nbsp;długie lata.</li>
            <li><h3>Wieloletnie doświadczenie</h3>Od ponad 20 lat zajmuję się naprawą pralek – to wiedza, której możesz zaufać.</li>
            <li><h3>Elastyczność i&nbsp;wygoda</h3>Naprawy wykonuję na&nbsp;miejscu u klienta lub w&nbsp;warsztacie, dostosowując się do&nbsp;Twojego harmonogramu.</li>
          </Text>
          <Text>
            <b>Nie trać czasu na pranie ręczne! </b>
            Zadzwoń lub napisz już teraz, a szybko i skutecznie rozwiążę problem z Twoją pralką. Profesjonalizm, uczciwość i rzetelność – to moje priorytety.
          </Text>
          <ButtonLink href={`tel:${serwis.phone}`} >
            Zadzwoń teraz
          </ButtonLink>
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getRatingProps;

export default WashingMachineService;