import { AboutContainer, AboutSection, AboutText, AboutTitle } from "./styled";
import { TeamImage } from "../../common/TeamImage";
import team from "../../assets/images/serwis.jpg";
import LazyLoad from "react-lazyload";
import { Helmet, HelmetProvider } from "react-helmet-async";

export const About = () => {
  return (
    <AboutSection>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>O mnie | Serwis RTV AGD w Przemyślu</title>
            <meta
              name="description"
              content="Dowiedz się więcej o mnie i moim doświadczeniu w naprawie pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
            />
            <meta
              name="keywords"
              content="o mnie, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
            />
          </Helmet>
        </div>
      </HelmetProvider>
      <AboutContainer>
        <AboutTitle>Kim jestem</AboutTitle>
        <main>
          <AboutText>
            Jestem specjalistą z&nbsp;wieloletnim doświadczeniem w&nbsp;naprawie
            pralek automatycznych, zmywarek, telewizorów i&nbsp;ekspresów
            do&nbsp;kawy. Podchodzę do&nbsp;każdej naprawy z&nbsp;pełnym
            zaangażowaniem i&nbsp;pasją. Moim celem jest zapewnienie najwyższej
            jakości usług oraz&nbsp;pełnej satysfakcji klientów. Dzięki
            indywidualnemu podejściu do&nbsp;każdego zlecenia, mogę skupić się
            na&nbsp;szczegółach i&nbsp;dostarczać rozwiązania dopasowane
            do&nbsp;specyficznych potrzeb każdego klienta. Wierzę, że&nbsp;każda
            naprawa to&nbsp;nie tylko techniczne wyzwanie, ale&nbsp;również
            szansa na&nbsp;budowanie trwałych relacji z&nbsp;klientami, którzy
            mogą liczyć na&nbsp;rzetelność, terminowość i&nbsp;uczciwość.
            Zachęcam do&nbsp;skorzystania z&nbsp;moich
            usług&nbsp;–&nbsp;gwarantuję, że&nbsp;Twoja pralka lub&nbsp;ekspres
            do&nbsp;kawy będzie działać jak&nbsp;nowy!
          </AboutText>
          <LazyLoad>
            <TeamImage src={team} alt="serwis" />
          </LazyLoad>
        </main>
      </AboutContainer>
    </AboutSection>
  );
};
