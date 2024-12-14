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

const CoffeeMachineService = () => {
  const path = useRouter().asPath;

  return (
    <Section>
      <MetaTags
        path={path}
        page={dataForMetaTags.naprawa_ekspresow}
      />
      <Container>
        <Title>
          <span>✔ </span>Naprawa ekspresów do&nbsp;kawy
          <Emoticon
            src={imageUrls.emoticon}
            alt="emoticon"
            loading="lazy"
          />
        </Title>
        <main>
          <ServiceOffer>
            <SubTitle>Profesjonalna naprawa ekspresów do&nbsp;kawy, niezależnie od&nbsp;marki i&nbsp;modelu.</SubTitle>
            <Photo
              src={imageUrls.ekspres}
              alt="naprawa ekspresow"
              loading='lazy'
              width={dataForMetaTags.naprawa_ekspresow.metaTags.imageWidth}
              height={dataForMetaTags.naprawa_ekspresow.metaTags.imageHeight}
              crop={{
                type: 'auto',
                source: true
              }}
            />
            <Text>
              Czy Twój ekspres do&nbsp;kawy przestał działać? A&nbsp;może nie&nbsp;zaparza kawy tak, jak&nbsp;dawniej, wyświetla błędy lub&nbsp;ma&nbsp;inne&nbsp;problemy? Jestem tutaj, aby&nbsp;Ci&nbsp;pomóc.
              Specjalizuję się w&nbsp;naprawie zarówno domowych, jak&nbsp;i&nbsp;profesjonalnych ekspresów do&nbsp;kawy, oferując precyzyjną diagnostykę oraz&nbsp;szybkie i&nbsp;skuteczne naprawy.
              <br />
              Moim celem jest umożliwienie&nbsp;Ci cieszenia&nbsp;się ulubioną kawą bez&nbsp;przerw.
              Dzięki wieloletniemu doświadczeniu oraz&nbsp;dostępowi do&nbsp;oryginalnych części zamiennych, oferuję kompleksową obsługę, dbając o&nbsp;każdy detal.
            </Text>
          </ServiceOffer>
          <SubTitle as="h3">Dlaczego warto skorzystać z&nbsp;moich usług?</SubTitle>
          <Text as="ul">
            <li><h3>Szybka diagnostyka: </h3>Zidentyfikuję problem w&nbsp;krótkim czasie, abyś mógł jak&nbsp;najszybciej cieszyć&nbsp;się swoją kawą.</li>
            <li><h3>Wysoka jakość naprawy: </h3>Pracuję na&nbsp;oryginalnych częściach oraz sprawdzonych rozwiązaniach, co&nbsp;zapewnia długotrwałe efekty.</li>
            <li><h3>Zadowolenie klientów: </h3>Moje usługi są&nbsp;rekomendowane przez wielu zadowolonych klientów, którzy wracają z&nbsp;kolejnymi zleceniami.</li>
            <li><h3>Elastyczność: </h3>Oferuję naprawy zarówno w warsztacie, jak&nbsp;i&nbsp;dojazd do&nbsp;klienta w&nbsp;dogodnych godzinach.</li>
          </Text>
          <Text>
            Nie pozwól, aby&nbsp;uszkodzony ekspres zepsuł Twój poranek. Skontaktuj&nbsp;się ze&nbsp;mną już&nbsp;dziś, a&nbsp;szybko przywrócę pełną funkcjonalność Twojego ekspresu do&nbsp;kawy!
          </Text>
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default CoffeeMachineService;