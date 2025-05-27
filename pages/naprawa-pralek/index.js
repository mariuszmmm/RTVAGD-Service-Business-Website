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
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import MetaTags from '../../components/common/MetaTags';
import { ButtonLink } from '../../components/common/ButtonLink';
import { serwis } from '../../utils/serwis';
import Image from 'next/image';
import { StyledPhoto } from '../../components/common/StyledPhoto';
import { StyledText } from '../../components/common/Text/styled';
import { HeroText } from '../../styles/home/HomeStyled';
import { StyledLink } from '../../components/common/StyledLink';

const WashingMachineService = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;

  return (
    <>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_pralek}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <Container>
        <Title>
          Naprawa&nbsp;pralek
          <Emoticon>
            <Image
              src={imageUrls.logo}
              alt="Logo serwisu w Przemyślu"
              loading="lazy"
              fill
            />
          </Emoticon> Przemyśl
        </Title>
        <Section>
          <StyledPhoto>
            <Image
              title="Naprawa pralek Przemyśl ✔️ Serwis RTV i AGD | Szybka naprawa i gwarancja"
              src={imageUrls.pralka}
              alt="Pralka automatyczna. Serwis i naprawa pralek w Przemyślu."
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.pralka_300} 500w,
              // ${imageUrls.pralka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>

          <SubTitle>Szybka i&nbsp;rzetelna naprawa oraz serwis pralek wszystkich marek w Przemyślu i&nbsp;okolicach</SubTitle>
          <StyledText>
            Awaria pralki może utrudnić codzienne obowiązki domowe. Dlatego mój <strong>serwis pralek</strong> w&nbsp;Przemyślu oferuje szybką diagnostykę oraz fachową naprawę urządzeń wszystkich marek.<br />
            Korzystam z&nbsp;profesjonalnych narzędzi i&nbsp;oryginalnych części zamiennych, aby przywrócić pełną funkcjonalność Twojej pralki już podczas pierwszej wizyty. Zapewniam gwarancję na wykonaną naprawę, dzięki czemu masz pewność satysfakcji i&nbsp;bezproblemowego użytkowania sprzętu. Specjalizuję się w serwisie i&nbsp;naprawie pralek marek Bosch, Electrolux, Samsung, Whirlpool oraz wielu innych, zawsze gwarantując najwyższą jakość usług i&nbsp;szybkie terminy realizacji.
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Najczęstsze usterki pralek
          </SubTitle>
          <StyledText as="ul" $cross>
            <li><b>Pralka nie pobiera wody</b> – może to być spowodowane uszkodzonym elektrozaworem, zatkanym filtrem wody, zgiętym wężem doprowadzającym wodę lub awarią hydrostatu, który odpowiada za kontrolę poziomu wody.</li>
            <li><b>Wycieki wody</b> – często wynikają z nieszczelnej uszczelki drzwi, pękniętego węża odpływowego, uszkodzonej pompy odpływowej lub pęknięcia komory szuflady na detergent.</li>
            <li><b>Pralka hałasuje lub nadmiernie wibruje</b> – przyczyną mogą być zużyte łożyska bębna, uszkodzone amortyzatory, poluzowana przeciwwaga bębna, nierównomierne rozłożenie wsadu lub nieprawidłowe wypoziomowanie pralki.</li>
            <li><b>Brak odwirowania</b> – może być spowodowany uszkodzeniem silnika, zużytymi szczotkami, zatkanym filtrem odpływowym, zablokowanym bębnem, uszkodzonym paskiem napędowym lub przeciążeniem pralki. </li>
            <li><b>Pralka nie uruchamia się</b> – przyczyną może być brak zasilania, uszkodzony kabel zasilający, niesprawna blokada drzwi, awaria modułu elektronicznego lub przepalony bezpiecznik.</li>
            <li><b>Nieprawidłowe dozowanie detergentu</b> – najczęściej wynika z nadmiernego użycia środka piorącego, co prowadzi do powstawania nadmiernej piany i niedokładnego wypłukania ubrań.</li>
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Proces naprawy pralki krok po kroku
          </SubTitle>
          <StyledText as="ol" >

            <li><strong>Kontakt i konsultacja:</strong> Opowiedz o usterce przez telefon, ustalimy dogodne terminy i zakres usługi.</li>
            <li><strong>Diagnostyka na miejscu:</strong> Dokonuję precyzyjnej diagnostyki urządzenia przy użyciu profesjonalnych narzędzi pomiarowych, identyfikując przyczynę awarii.</li>
            <li><strong>Naprawa lub wymiana części:</strong> Natychmiast usuwam usterkę; w razie potrzeby montuję oryginalne części zamienne.</li>
            <li><strong>Testy końcowe:</strong> Po naprawie przeprowadzam pełen cykl prania testowego, by potwierdzić, że wszystko działa wzorowo.</li>
            <li><strong>Gwarancja i porady:</strong> Udzielam gwarancji na wykonaną usługę i doradzam, jak dbać o pralkę, by uniknąć podobnych problemów.</li>
          </StyledText>
        </Section>
        <Section>
          <SubTitle>
            Dlaczego warto wybrać mój serwis?
          </SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka reakcja:</strong> Ustalam termin wizyty jeszcze tego samego dnia, abyś mógł szybko odzyskać sprawność swojej pralki.</li>
            <li><strong>Doświadczenie i wiedza:</strong> Ponad 20 lat praktyki w serwisowaniu sprzętu AGD pozwala mi naprawiać pralki wszystkich modeli, nawet te najbardziej skomplikowane.</li>
            <li><strong>Obsługa wszystkich marek:</strong> Specjalizuję się w naprawie pralek różnych producentów, takich jak Bosch, Electrolux, Amica, Samsung, Whirlpool, Beko i wielu innych, co gwarantuje kompleksową obsługę niezależnie od modelu urządzenia.</li>
            <li><strong>Gwarancja na usługę:</strong> Na każdą naprawę udzielam gwarancji, a stosowane części pochodzą od sprawdzonych producentów, co zapewnia niezawodność naprawy </li>
          </StyledText>
        </Section>

        <Section>
          <HeroText>
            <b>Nie trać czasu na pranie ręczne!<br />
              Skontaktuj się ze&nbsp;mną, a&nbsp;Twój sprzęt odzyska pełną sprawność.
            </b>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} >
            Zadzwoń teraz
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_pralek.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>
        <Section>
          <SubTitle>Inne usługi</SubTitle>
          <StyledText>
            Oprócz naprawy pralek oferuję kompleksowy serwis:<br />
            <StyledLink
              href="/naprawa-zmywarek/" $standardText>zmywarek</StyledLink>,
            <StyledLink href="/naprawa-suszarek/" $standardText> suszarek</StyledLink>,
            <StyledLink
              href="/naprawa-ekspresow/" $standardText> ekspresów do kawy</StyledLink> oraz
            <StyledLink href="/naprawa-telewizorow/" $standardText> telewizorów</StyledLink>.
          </StyledText>
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

export default WashingMachineService;