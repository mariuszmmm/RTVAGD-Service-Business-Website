import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import { getRatingProps } from '../../utils/getRatingProps';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';

const DryerService = ({ rating, ratingsTotal }) => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_suszarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
      />
      <Container>
        <Title>
          Naprawa suszarek
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt="Serwis RTV i AGD NaprawaPrzemyśl, naprawa suszarek"
              loading="lazy"
              fill
            />
          </Emoticon>
        </Title>

        <div>
          <SubTitle>
            Szybka i&nbsp;skuteczna naprawa suszarek wszystkich marek w&nbsp;Przemyślu i&nbsp;okolicach.
          </SubTitle>
          <Text>
            Twoja suszarka do prania odmówiła posłuszeństwa? A może działa, ale nie suszy tak dobrze, jak powinna? Niezależnie od rodzaju usterki – od awarii grzałki po błędy elektroniczne – jestem tutaj, aby pomóc! Oferuję kompleksowe usługi naprawcze dla suszarek kondensacyjnych, wentylacyjnych oraz modeli z pompą ciepła.
          </Text>

          <ServiceOffer>
            <StyledPhoto>
              <Image
                title="Naprawa szuszarek w Przemyślu"
                src={imageUrls.suszarka}
                alt="Naprawa szuszarek - serwis suszarek w Przemyślu"
                loading='lazy'
                fill
                // srcSet={`${imageUrls.suszarka_300} 500w,
                // ${imageUrls.suszarka} 1000w`}
                sizes="(max-width: 500px) 500px, 1000px"
              />
            </StyledPhoto>
            <SubTitle as="h3">
              Najczęstsze problemy z suszarkami, które naprawiam:
            </SubTitle>
            <Text as="ul" $cross>
              <li><b>suszarka nie nagrzewa powietrza</b> -&nbsp;uszkodzona grzałka, czujnik temperatury lub termostat.</li>
              <li><b>problemy z&nbsp;wentylacją</b> -&nbsp;zatkane filtry, awarie wentylatora lub drożności przewodów.</li>
              <li><b>ubrania nadal mokre po&nbsp;zakończeniu cyklu</b> -&nbsp;usterki w&nbsp;układzie kondensacyjnym lub nieprawidłowa praca pompy ciepła.</li>
              <li><b>niepokojące dźwięki podczas pracy</b> -&nbsp;uszkodzone łożyska, pasek napędowy lub mechanizm bębna.</li>
              <li><b>wyświetlanie kodów błędów</b> -&nbsp;problemy z&nbsp;elektroniką, modułem sterującym lub czujnikami.</li>
            </Text>
            <Text $subArea>
              Dzięki nowoczesnym narzędziom diagnostycznym szybko i precyzyjnie identyfikuję przyczynę awarii, a następnie usuwam ją, korzystając z wysokiej jakości części zamiennych.
            </Text>
          </ServiceOffer>

          <SubTitle as="h3">
            Dlaczego warto skorzystać z&nbsp;moich usług?
          </SubTitle>
          <Text as="ul" $check>
            <li><h3>Szybka diagnoza i&nbsp;naprawa</h3>Cenię Twój czas –&nbsp;dokładnie diagnozuję problem już podczas pierwszej wizyty, a&nbsp;naprawy wykonuję w&nbsp;możliwie najkrótszym czasie.</li>
            <li><h3>Trwałe efekty naprawy</h3>Stosuję tylko sprawdzone i&nbsp;oryginalne części zamienne, co&nbsp;zapewnia długotrwałą sprawność Twojej suszarki.</li>
            <li><h3>Ponad 20 lat doświadczenia</h3>Moja wiedza i&nbsp;umiejętności to efekt wieloletniej pracy z urządzeniami AGD różnych marek i&nbsp;technologii.</li>
            <li><h3>Indywidualne podejście</h3>Oferuję naprawy zarówno w warsztacie, jak i&nbsp;z&nbsp;dojazdem do klienta, dostosowując się do Twojego harmonogramu.</li>
          </Text>
          <Text>
            <b>Nie pozwól, aby awaria suszarki wpłynęła na Twoją codzienność! </b>
            Zadzwoń lub napisz już dziś, a szybko przywrócę Twoje urządzenie do pełnej sprawności. Gwarantuję rzetelność, profesjonalizm i satysfakcję z wykonanej usługi.
          </Text>
          <ButtonLink href={`tel:${serwis.phone.number}`} >
            Zadzwoń teraz
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
};

export const getStaticProps = getRatingProps;

export default DryerService;