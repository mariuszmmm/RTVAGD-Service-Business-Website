import { Container } from '../../components/common/Container';
import { Section } from '../../components/common/Section';
import { Title } from '../../components/common/Title';
import { SubTitle } from '../../components/common/SubTitle';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { Emoticon } from '../../components/common/Emoticon';
import { imageUrls } from '../../utils/urls';
import { getRatingProps } from '../../utils/getRatingProps';
import { getReviewsProps } from '../../utils/getReviewsProps';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { HeroText } from '../../styles/home/HomeStyled';
import { StyledText } from '../../components/common/Text/styled';
import { StyledLink } from '../../components/common/StyledLink';
import { Break } from '../../components/Break';

const DishwasherService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_zmywarek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>
        <Title>
          Naprawa zmywarek Przemyśl
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
              title="Naprawa zmywarek ✔️ Serwis RTV i AGD | Szybka naprawa i gwarancja"
              src={imageUrls.zmywarka}
              alt="Naprawa zmywarek w Przemyślu. Zmywarka do naczyń."
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.zmywarka_300} 500w,
              // ${imageUrls.zmywarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>
          <SubTitle>
            Szybka i&nbsp;rzetelna naprawa oraz serwis zmywarek wszystkich marek w&nbsp;Przemyślu i&nbsp;okolicach
          </SubTitle>
          <StyledText>
            Awaria zmywarki może całkowicie zaburzyć porządek w&nbsp;kuchni. Dlatego mój <strong>serwis&nbsp;zmywarek</strong> w Przemyślu oferuje szybką diagnostykę oraz fachową naprawę urządzeń wszystkich marek.<br />
            Korzystam z&nbsp;profesjonalnych narzędzi i&nbsp;oryginalnych części zamiennych, aby&nbsp;przywrócić pełną funkcjonalność Twojej zmywarki już podczas pierwszej wizyty. Zapewniam gwarancję na wykonaną naprawę, dzięki czemu masz pewność satysfakcji i&nbsp;bezproblemowego użytkowania sprzętu. Specjalizuję się w&nbsp;serwisie i&nbsp;naprawie zmywarek marek Bosch, Electrolux, Beko oraz wielu innych, zawsze gwarantując najwyższą jakość usług i&nbsp;szybkie terminy realizacji.
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Najczęstsze usterki zmywarek
          </SubTitle>
          <StyledText as="ul" $cross>
            <li><b>Zmywarka nie pobiera wody</b> –&nbsp;przyczyną może być uszkodzony zawór dopływu, zatkany filtr lub problem z&nbsp;dopływem wody.</li>
            <li><b>Brak podgrzewania wody</b> –&nbsp;zwykle wywołany uszkodzoną grzałką, czujnikiem temperatury lub modułem sterującym.</li>
            <li><b>Wycieki wody</b> –&nbsp;najczęściej spowodowane nieszczelnymi uszczelkami drzwi, pękniętym wężem lub wadliwą pompą odpływową.</li>
            <li><b>Niepełne suszenie naczyń</b> –&nbsp;problemy z&nbsp;wentylatorem, elementem grzejnym lub elektronicznym modułem suszenia.</li>
            <li><b>Zmywarka nie uruchamia się</b> –&nbsp;możliwa awaria układu zasilania, uszkodzone przyciski sterujące lub usterka elektroniki.</li>
            <li><b>Brudne naczynia po zakończeniu cyklu</b> –&nbsp;efekt zatkanych dysz spryskujących, zabrudzonego filtra lub zużytych ramion spryskujących.</li>
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Proces naprawy zmywarki krok po kroku
          </SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i konsultacja:</strong> Opis usterki przez telefon i&nbsp;umówienie dogodnego terminu wizyty serwisowej.</li>
            <li><strong>Diagnostyka na miejscu:</strong> Dokładne sprawdzenie urządzenia przy użyciu profesjonalnych narzędzi – często wstępna diagnoza jest gotowa podczas pierwszej wizyty.</li>
            <li><strong>Naprawa lub wymiana części:</strong> Usuwam usterkę od razu, a&nbsp;jeśli konieczna jest wymiana elementów, instaluję oryginalne części zamienne.</li>
            <li><strong>Testy końcowe:</strong> Po naprawie przeprowadzam testy działania zmywarki, aby upewnić się, że działa zgodnie z zaleceniami producenta.</li>
            <li><strong>Gwarancja i porady:</strong> Udzielam gwarancji na wykonaną usługę i&nbsp;przekazuję wskazówki eksploatacyjne, by uniknąć podobnych usterek w przyszłości.</li>
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Dlaczego warto wybrać mój serwis?
          </SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka reakcja:</strong> Zwykle ustalam termin wizyty jeszcze tego samego dnia, abyś mógł szybko odzyskać sprawność swojego sprzętu.</li>
            <li><strong>Doświadczenie i&nbsp;wiedza:</strong> Ponad 20&nbsp;lat praktyki w&nbsp;serwisowaniu sprzętu AGD pozwala mi naprawiać urządzenia wszystkich marek i&nbsp;modeli, nawet te najbardziej skomplikowane.</li>
            <li><strong>Elastyczność usług:</strong> Naprawiam zmywarki zarówno w Twoim domu, jak i w moim warsztacie – możesz wybrać dogodną dla siebie opcję.</li>
            <li><strong>Gwarancja na usługę:</strong> Na każdą naprawę udzielam gwarancji, a stosowane części pochodzą od sprawdzonych producentów, co zapewnia niezawodność naprawy.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_zmywarek.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <b>Nie pozwól, aby awaria zmywarki zabierała Ci cenny czas. <Break />
              Skontaktuj się ze&nbsp;mną, a&nbsp;Twój sprzęt odzyska pełną sprawność.</b>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa zmywarek w Przemyślu' >
            Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Świadczę usługi naprawy zmywarek w&nbsp;Przemyślu oraz pobliskich miejscowościach.</SubTitle>
          <StyledText>
            Naprawiam zmywarki w Przemyślu i&nbsp;okolicach. Jeśli jesteś z&nbsp;miejscowości takich jak Przemyśl, Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce czy Żurawica – chętnie do Ciebie przyjadę i&nbsp;usunę usterkę szybko i&nbsp;skutecznie.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Inne usługi</SubTitle>
          <StyledText>Oprócz naprawy zmywarek oferuję profesjonalny serwis innych urządzeń.<br />
            Zajmuję się także naprawą
            <StyledLink
              href="/naprawa-pralek/" title='Naprawa pralek' $standardText> pralek</StyledLink>,
            <StyledLink href="/naprawa-suszarek/" title='Naprawa suszarek' $standardText> suszarek</StyledLink>,
            <StyledLink
              href="/naprawa-ekspresow/" title='Naprawa ekspresów do kawy' $standardText> ekspresów do kawy</StyledLink> oraz
            <StyledLink href="/naprawa-telewizorow/" title='Naprawa telewizorów' $standardText> telewizorów</StyledLink>.</StyledText>
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

export default DishwasherService;