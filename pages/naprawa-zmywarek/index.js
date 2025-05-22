import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { StyledPhoto } from '../../components/common/StyledPhoto';
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
import { HeroText } from '../../styles/home/HomeStyled';

const DishwasherService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_zmywarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />

      <Container>
        <Title>
          Naprawa zmywarek w&nbsp;Przemyślu&nbsp;
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt="Serwis RTV i AGD logo"
              loading="lazy"
              fill
            />
          </Emoticon>
        </Title>

        <SubTitle>
          Szybka i&nbsp;rzetelna naprawa zmywarek wszystkich marek -&nbsp;Przemyśl i&nbsp;okolice.
        </SubTitle>
        <Text>
          Awaria zmywarki potrafi zaburzyć codzienny porządek w domu. Doskonale rozumiem, jak ważna jest sprawna kuchnia, dlatego oferuję szybką diagnostykę i&nbsp;fachową naprawę u&nbsp;źródła problemu.<br />
          Korzystam z&nbsp;profesjonalnych narzędzi i&nbsp;oryginalnych części zamiennych, by&nbsp;przywrócić Twojej zmywarce pełną funkcjonalność już przy pierwszej wizycie. Niezależnie od modelu czy stopnia skomplikowania usterki —&nbsp;działam z&nbsp;dbałością o&nbsp;detale oraz gwarancją na&nbsp;wykonaną usługę.  <br />
          Zaufaj lokalnemu specjaliście —&nbsp;zadzwoń, umów dogodny termin i&nbsp;ciesz się sprawnym sprzętem bez zbędnych opóźnień.
        </Text>

        <ServiceOffer>
          <StyledPhoto>
            <Image
              title="Naprawa zmywarek Przemyśl"
              src={imageUrls.zmywarka}
              alt="Naprawa zmywarek - serwis zmywarek w Przemyślu"
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.zmywarka_300} 500w,
              // ${imageUrls.zmywarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>

          <SubTitle as="h3">
            Najczęstsze usterki zmywarek, które naprawiam:
          </SubTitle>
          <Text as="ul" $cross>
            <li><b>Brak podgrzewania wody</b> -&nbsp;zużyta grzałka, uszkodzony czujnik temperatury lub moduł sterujący.</li>
            <li><b>Wycieki wody</b> -&nbsp;nieszczelne uszczelki drzwi, pęknięte przewody doprowadzające lub awaria pompy odpływowej.</li>
            <li><b>Niepełne suszenie naczyń</b> -&nbsp;problemy z&nbsp;wentylatorem, elementem grzejnym lub elektronicznym modułem suszenia.</li>
            <li><b>Zmywarka nie uruchamia cyklu</b> -&nbsp;uszkodzenia w układzie zasilania, przyciskach lub elektronice.</li>
            <li><b>Brudne naczynia po zakończeniu pracy</b> -&nbsp;zatkane dysze spryskujące, zanieczyszczony filtr wody lub zużyte ramię natryskowe.</li>
          </Text>
        </ServiceOffer>

        <SubTitle as="h3">
          Proces naprawy zmywarki krok po kroku:
        </SubTitle>
        <Text as="ol" >
          <li><h3>Kontakt i wstępna konsultacja</h3>Krótka rozmowa telefoniczna: opis usterki, umówienie dogodnego terminu.</li>
          <li><h3>Diagnostyka na miejscu</h3>Analiza problemu przy użyciu mierników i testerów – w 90 % przypadków diagnoza następuje od ręki.</li>
          <li><h3>Naprawa lub wymiana części</h3>Usuwam usterkę na miejscu albo zabieram urządzenie do warsztatu, gdy naprawa wymaga więcej czasu.</li>
          <li><h3>Testy końcowe</h3>Sprawdzam, czy zmywarka działa zgodnie z parametrami producenta.</li>
          <li><h3>Gwarancja i porady eksploatacyjne</h3>Przekazuję wskazówki, jak dbać o urządzenie, by uniknąć powtórnych awarii.</li>
        </Text>

        <br />

        <SubTitle as="h3">
          Dlaczego warto wybrać mój serwis?
        </SubTitle>
        <Text as="ul" $check>
          <li><h3>Szybka reakcja na&nbsp;zgłoszenia</h3>Działam sprawnie –&nbsp;zwykle tego samego dnia ustalam termin wizyty.</li>
          <li><h3>Doświadczenie i&nbsp;fachowa wiedza</h3>Ponad 20&nbsp;lat praktyki w&nbsp;serwisowaniu sprzętu AGD pozwala mi naprawiać urządzenia wszystkich marek i&nbsp;modeli.</li>
          <li><h3>Elastyczność usług</h3>Usuwam usterki zarówno w&nbsp;Państwa domu, jak i&nbsp;w moim warsztacie –&nbsp;wybór należy do&nbsp;Ciebie.</li>
          <li><h3>Gwarancja na wykonaną pracę</h3>Na każdą naprawę udzielam gwarancji, a&nbsp;stosowane części pochodzą od certyfikowanych producentów.</li>
        </Text>

        <br />

        <HeroText>
          <b>Nie pozwól, aby awaria zmywarki zabierała Ci cenny czas i&nbsp;komfort życia. <br />
            Skontaktuj się ze&nbsp;mną, a&nbsp;Twój sprzęt odzyska pełną sprawność.<br /></b>
        </HeroText>

        <ButtonLink href={`tel:${serwis.phone.number}`} >
          Zadzwoń teraz
        </ButtonLink>

      </Container>
    </Section>
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

export default DishwasherService;