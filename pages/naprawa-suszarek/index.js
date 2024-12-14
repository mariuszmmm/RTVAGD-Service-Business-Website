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

const DryerService = () => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_suszarek}
      />
      <Container>
        <Title>
          <span>✔ </span>Naprawa suszarek
          <Emoticon
            src={imageUrls.emoticon}
            alt="emoticon"
            loading="lazy"
          />
        </Title>
      <main>
            <SubTitle>Profesjonalna naprawa suszarek wszystkich marek i modeli – szybko i skutecznie</SubTitle>
            <Text>
              Twoja suszarka do prania odmówiła posłuszeństwa? A może działa, ale nie suszy tak dobrze, jak powinna? Niezależnie od rodzaju usterki – od awarii grzałki po błędy elektroniczne – jestem tutaj, aby pomóc! Oferuję kompleksowe usługi naprawcze dla suszarek kondensacyjnych, wentylacyjnych oraz modeli z pompą ciepła.
</Text> 

 <ServiceOffer>
             <Photo
              src={imageUrls.suszarka}
              alt="naprawa suszarek"
              loading='lazy'
              width={dataForMetaTags.naprawa_suszarek.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_suszarek.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
<SubTitle as="h3">Najczęstsze problemy z suszarkami, które naprawiam: </SubTitle>
<Text as="ul">
<li><b>Suszarka nie nagrzewa powietrza</b> - uszkodzona grzałka, czujnik temperatury lub termostat.</li>

<li><b>Problemy z wentylacją</b> - zatkane filtry, awarie wentylatora lub drożności przewodów.</li>

<li><b>Ubrania nadal mokre po zakończeniu cyklu</b> - usterki w układzie kondensacyjnym lub nieprawidłowa praca pompy ciepła.</li>

<li><b>Niepokojące dźwięki podczas pracy</b> - uszkodzone łożyska, pasek napędowy lub mechanizm bębna.</li>

<li><b>Wyświetlanie kodów błędów</b> - problemy z elektroniką, modułem sterującym lub czujnikami.</li>
              </Text>

<Text $subArea>
Dzięki nowoczesnym narzędziom diagnostycznym szybko i precyzyjnie identyfikuję przyczynę awarii, a następnie usuwam ją, korzystając z wysokiej jakości części zamiennych.
</Text>
</ServiceOffer>

          <SubTitle as="h3">Dlaczego warto skorzystać z moich usług?</SubTitle>
          <Text as="ul">
            <li><h3>Szybka diagnoza i naprawa: </h3>Cenię Twój czas – dokładnie diagnozuję problem już podczas pierwszej wizyty, a naprawy wykonuję w możliwie najkrótszym czasie.</li>
            <li><h3>Trwałe efekty naprawy: </h3>Stosuję tylko sprawdzone i oryginalne części zamienne, co zapewnia długotrwałą sprawność Twojej suszarki.</li>
            <li><h3>Ponad 20 lat doświadczenia: </h3>Moja wiedza i umiejętności to efekt wieloletniej pracy z urządzeniami AGD różnych marek i technologii.</li>
            <li><h3>Indywidualne podejście: </h3>Oferuję naprawy zarówno w warsztacie, jak i z dojazdem do klienta, dostosowując się do Twojego harmonogramu.</li>
          </Text>
          <Text>
            <b>Nie pozwól, aby awaria suszarki wpłynęła na Twoją codzienność! </b>
Zadzwoń lub napisz już dziś, a szybko przywrócę Twoje urządzenie do pełnej sprawności. Gwarantuję rzetelność, profesjonalizm i satysfakcję z wykonanej usługi.
          </Text>
        </main>

      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default DryerService;