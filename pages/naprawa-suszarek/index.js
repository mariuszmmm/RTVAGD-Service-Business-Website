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
import { HeroText } from '../../styles/home/HomeStyled';
import { StyledLink } from '../../components/common/StyledLink';

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
              title="Suszarka"
              src={imageUrls.suszarka}
              alt="suszarka"
              // loading='lazy'
              fill
              // srcSet={`${imageUrls.suszarka_300} 500w,
              // ${imageUrls.suszarka} 1000w`}
              sizes="(max-width: 500px) 500px, 1000px"
            />
          </StyledPhoto>

          <SubTitle>
            Szybka i skuteczna naprawa suszarek wszystkich marek w Przemyślu i okolicach
          </SubTitle>
          <StyledText>
            Awaria suszarki może znacząco utrudnić codzienne prace domowe, zwłaszcza gdy zależy nam na szybkim wysuszeniu ubrań w sezonie jesienno-zimowym. Dlatego oferuję <strong>kompleksową diagnostykę</strong> i&nbsp;fachową naprawę suszarek wszystkich typów i&nbsp;marek w Przemyślu oraz pobliskich miejscowościach. Korzystam z&nbsp;profesjonalnych narzędzi diagnostycznych oraz oryginalnych części zamiennych, aby już podczas pierwszej wizyty przywrócić pełną funkcjonalność Twojego sprzętu. Zapewniam gwarancję na wykonaną usługę, co daje pewność satysfakcji i&nbsp;nieprzerwanej eksploatacji urządzenia. Specjalizuję się w naprawie suszarek marek takich jak: Bosch, Siemens, Electrolux, Whirlpool, Samsung, Beko, Amica, AEG, Candy, Miele, Hotpoint-Ariston, LG, Indesit, Zanussi.
            Dzięki ponad 20-letniemu doświadczeniu w serwisowaniu sprzętu AGD, nawet najbardziej skomplikowane usterki nie stanowią dla mnie wyzwania.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>
            Najczęstsze problemy z suszarkami
          </SubTitle>
          <StyledText as="ul" $cross>
            <li><b>Suszarka nie obraca bębna</b> -&nbsp;może być spowodowane zerwanym paskiem napędowym, uszkodzonym silnikiem lub zużytymi łożyskami.</li>
            <li><b>Suszarka wyłącza się przed zakończeniem cyklu</b> -&nbsp;przyczyną może być uszkodzony czujnik wilgotności, przegrzewanie lub usterka modułu elektronicznego.</li>
            <li><b>Niewystarczające suszenie</b> -&nbsp;zatkany filtr kłaczków lub przewód wentylacyjny (w suszarkach kondensacyjnych –&nbsp;zatkany skraplacz).</li>
            <li><b>Przecieki wody pod suszarką</b> -&nbsp;nieszczelny wąż spustowy, przepełniony pojemnik na wodę lub uszkodzony zbiornik kondensatora. Zalecane jest czyszczenie układu kondensacyjnego co najmniej raz na sezon.</li>
            <li><b>Wyświetlanie kodów błędów</b> -&nbsp;problemy z&nbsp;elektroniką, modułem sterującym lub czujnikami.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>
            Proces naprawy suszarki krok po kroku
          </SubTitle>
          <StyledText as="ol" >
            <li><strong>Kontakt i konsultacja:</strong> Krótki opis usterki przez telefon lub e-mail. Ustalenie dogodnego terminu i miejsca wizyty serwisowej.</li>
            <li><strong>Diagnostyka na miejscu:</strong> Dokładne sprawdzenie urządzenia przy użyciu profesjonalnych narzędzi pomiarowych. Wstępna diagnoza często jest gotowa podczas pierwszej wizyty.</li>
            <li><strong>Naprawa lub wymiana części:</strong> Usuwam usterkę od razu, jeśli to możliwe. W razie konieczności montuję wyłącznie oryginalne lub wysokiej jakości części zamienne.</li>
            <li><strong>Testy końcowe:</strong> Po naprawie przeprowadzam kilkuminutowy cykl suszenia testowego, aby upewnić się, że suszarka działa w pełni sprawnie. Sprawdzam odprowadzanie skroplin i poprawność temperatury.</li>
            <li><strong>Gwarancja i porady eksploatacyjne:</strong> Na każdą naprawę udzielam gwarancji. Udzielam praktycznych wskazówek, jak dbać o suszarkę, aby uniknąć podobnych awarii w przyszłości.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>
            Dlaczego warto skorzystać z moich usług
          </SubTitle>
          <StyledText as="ul" $check>
            <li><strong>Szybka reakcja i krótkie terminy realizacji:</strong> Często mogę pojawić się u Ciebie jeszcze tego samego dnia, w jakim otrzymam zgłoszenie.</li>
            <li><strong>Doświadczenie i&nbsp;wiedza:</strong> Ponad 20 lat praktyki w serwisowaniu średniej i dużej klasy urządzeń AGD. Znajomość specyfiki suszarek kondensacyjnych, z pompą ciepła, elektrycznych.</li>
            <li><strong>Obsługa wszystkich marek i modeli:</strong> Serwisuję suszarki marek: Bosch, Siemens, Electrolux, Whirlpool, Samsung, Beko, Amica, AEG, Candy, Miele, Hotpoint-Ariston, LG, Indesit, Zanussi i inne.</li>
            <li><strong>Gwarancja na wykonaną usługę:</strong> Gwarancja na wszystkie wykonane czynności serwisowe oraz wymienione części. Pracuję wyłącznie na sprawdzonych komponentach, co minimalizuje ryzyko ponownej awarii w krótkim czasie.</li>
          </StyledText>
        </Section>

        <Section>
          <SubTitle>FAQ – najczęściej zadawane pytania</SubTitle>
          <StyledText as="ul" $list>
            {dataForMetaTags.naprawa_suszarek.schema.faqPage.mainEntity.map((item, index) => (
              <li key={index}>
                <h3>{item.name}</h3>
                <StyledText>{item.acceptedAnswer.text}</StyledText>
              </li>
            ))}
          </StyledText >
        </Section>

        <Section>
          <HeroText>
            <b>Zadzwoń teraz, aby szybko umówić wizytę i&nbsp;przywrócić pełną sprawność swojej suszarce!</b>
          </HeroText>
          <ButtonLink href={`tel:${serwis.phone.number}`} title='Naprawa suszarek w Przemyślu' >
            Zleć naprawę suszarki
          </ButtonLink>
        </Section>

        <Section>
          <SubTitle>Naprawiam suszarki w Przemyślu i okolicach</SubTitle>
          <StyledText>
            Oferuję serwis suszarek w Przemyślu oraz dojeżdżamy do sąsiednich miejscowości: Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce,Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica. Jeśli potrzebujesz szybkiej i fachowej naprawy suszarki, wystarczy jeden telefon, a przyjadę do Ciebie w dogodnym terminie.
          </StyledText>
        </Section>

        <Section>
          <SubTitle>Inne usługi</SubTitle>
          <StyledText>Oprócz naprawy suszarek oferuję profesjonalny serwis innych urządzeń.<br />
            Zajmuję się także naprawą
            <StyledLink
              href="/naprawa-pralek/" title='Naprawa pralek' $standardText> pralek</StyledLink>,
            <StyledLink href="/naprawa-zmywarek/" title='Naprawa zmywarek' $standardText> zmywarek</StyledLink>,
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

export default DryerService;