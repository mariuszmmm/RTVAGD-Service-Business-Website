import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { ServiceOffer } from '../../components/common/ServiceOffer';
import { imageUrls } from '../../utils/urls';
import { getRatingProps } from '../../utils/getRatingProps';
import { getReviewsProps } from '../../utils/getReviewsProps';
import { Emoticon } from '../../components/common/Emoticon';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { StyledText } from '../../components/common/Text/styled';

const DryerService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_suszarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />

      <Container>
        <Title>
          Naprawa suszarek Przemyśl
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt=""
              loading="lazy"
              fill
            />
          </Emoticon>
        </Title>

        <Section>
          <StyledPhoto>
            <Image
              title="Naprawa suszarek Przemyśl"
              src={imageUrls.suszarka}
              alt="naprawa suszarek"
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.suszarka_300} 500w,
              // ${imageUrls.suszarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>

          <SubTitle>
            Szybka i&nbsp;rzetelna naprawa oraz serwis suszarek wszystkich marek w&nbsp;Przemyślu i&nbsp;okolicach
          </SubTitle>
          <StyledText>
            Awaria suszarki może znacząco utrudnić codzienne prace domowe, zwłaszcza gdy zależy nam na szybkim wysuszeniu ubrań w sezonie jesienno-zimowym. Dlatego oferuję <strong>kompleksową diagnostykę</strong> i&nbsp;fachową naprawę suszarek wszystkich typów i&nbsp;marek w Przemyślu oraz pobliskich miejscowościach. Korzystam z&nbsp;profesjonalnych narzędzi diagnostycznych oraz oryginalnych części zamiennych, aby już podczas pierwszej wizyty przywrócić pełną funkcjonalność Twojego sprzętu. Zapewniam gwarancję na wykonaną usługę, co daje pewność satysfakcji i&nbsp;nieprzerwanej eksploatacji urządzenia. Specjalizuję się w naprawie suszarek marek takich jak: Bosch, Siemens, Electrolux, Whirlpool, Samsung, Beko, Amica, AEG, Candy, Miele, Hotpoint-Ariston, LG, Indesit, Zanussi.
            Dzięki ponad 20-letniemu doświadczeniu w serwisowaniu sprzętu AGD, nawet najbardziej skomplikowane usterki nie stanowią dla mnie wyzwania.
          </StyledText>
        </Section>




        <Section>
          <SubTitle>
            Najczęstsze problemy z suszarkami, które naprawiam:
          </SubTitle>
          <StyledText as="ul" $cross>
            <li><b>suszarka nie nagrzewa powietrza</b> -&nbsp;uszkodzona grzałka, czujnik temperatury lub termostat.</li>
            <li><b>problemy z&nbsp;wentylacją</b> -&nbsp;zatkane filtry, awarie wentylatora lub drożności przewodów.</li>
            <li><b>ubrania nadal mokre po&nbsp;zakończeniu cyklu</b> -&nbsp;usterki w&nbsp;układzie kondensacyjnym lub nieprawidłowa praca pompy ciepła.</li>
            <li><b>niepokojące dźwięki podczas pracy</b> -&nbsp;uszkodzone łożyska, pasek napędowy lub mechanizm bębna.</li>
            <li><b>wyświetlanie kodów błędów</b> -&nbsp;problemy z&nbsp;elektroniką, modułem sterującym lub czujnikami.</li>
          </StyledText>
          <Text $subArea>
            Dzięki nowoczesnym narzędziom diagnostycznym szybko i precyzyjnie identyfikuję przyczynę awarii, a następnie usuwam ją, korzystając z wysokiej jakości części zamiennych.
          </Text>

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
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa suszarek Przemyśl' >
            Zadzwoń teraz
          </ButtonLink>
        </Section>
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const [ratingProps, reviewsProps] = await Promise.all([
    getRatingProps(),
    getReviewsProps(),
  ]);

  return {
    props: {
      ...ratingProps.props,
      ...reviewsProps.props,
    },
  };
};

export default DryerService;