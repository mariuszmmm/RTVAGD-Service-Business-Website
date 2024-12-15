import { Section } from '../../components/common/Section';
import { Container } from '../../components/common/Container';
import { Title } from '../../components/common/Title';
import { Text } from '../../components/common/Text';
import { TeamImage } from '../../components/common/TeamImage';
import { imageUrls } from '../../utils/urls';
import { getSharedStaticProps } from '../../utils/getSharedStaticProps';
import MetaTags from '../../components/common/MetaTags';
import { useRouter } from 'next/router';
import { dataForMetaTags } from '../../utils/dataForMetaTags';

const About = () => {
  const path = useRouter().asPath;

  return (
    <Section >
      <MetaTags
        path={path}
        page={dataForMetaTags.o_mnie}
      />
      <Container>
        <Title>Kim jestem</Title>
        <main>
          <Text>
            Jestem specjalistą z wieloletnim doświadczeniem w naprawie pralek, suszarek, zmywarek, telewizorów oraz ekspresów do kawy.
            Każda naprawa to dla mnie nie tylko techniczne zadanie, ale również okazja do budowanie zaufania i dobrych relacji z klientami.
            Wykonuję swoją pracę z pełnym zaangażowaniem i pasją, dążąc do tego, aby każdy klient był w pełni zadowolony z jakości usług.
          </Text>
          <Text>
            Stawiam na indywidualne podejście, co pozwala mi dostosować naprawę do specyficznych potrzeb każdego urządzenia oraz oczekiwań klienta.
            W mojej pracy gwarantuję rzetelność, terminowość oraz uczciwość.
          </Text>
          <Text>
            Skorzystaj z moich usług, a Twoje urządzenia odzyskają swoją sprawność!
          </Text>
          <TeamImage src={imageUrls.serwis} alt="serwis" loading='lazy' />
        </main>
      </Container>
    </Section>
  );
};

export const getStaticProps = getSharedStaticProps;

export default About;