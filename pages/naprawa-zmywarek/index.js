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

const DishwasherService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <Section id="product">
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_zmywarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>
        <Title>
          Naprawa zmywarek w&nbsp;Przemyślu
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt="Serwis RTV i AGD logo"
              loading="lazy"
              fill
            />
          </Emoticon>
        </Title>

        <div>
          <SubTitle>
            Szybka i&nbsp;niezawodna naprawa zmywarek wszystkich modeli w&nbsp;Przemyślu i&nbsp;okolicach.
          </SubTitle>
          <Text>
            Awaria zmywarki potrafi skutecznie zakłócić codzienny rytm życia w domu. Rozumiem, jak ważne jest szybkie i skuteczne rozwiązanie problemu, dlatego oferuję kompleksowe usługi diagnostyki i naprawy zmywarek w Przemyślu i okolicach.
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
              Najczęstsze problemy ze zmywarkami, które naprawiam:
            </SubTitle>
            <Text as="ul" $cross>
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
            <b>Nie pozwól, aby awaria zmywarki zabierała Ci cenny czas i komfort życia. </b>
            Skontaktuj się ze mną, a Twój sprzęt odzyska pełną sprawność – szybko, profesjonalnie i w przystępnej cenie.
          </Text>
          <ButtonLink href={`tel:${serwis.phone.number}`} >
            Zadzwoń teraz
          </ButtonLink>
        </div>
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