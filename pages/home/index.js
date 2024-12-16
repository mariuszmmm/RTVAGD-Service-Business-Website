import { Hero, HeroContainer, HeroText, HeroTitle, } from '../../styles/home/HomeStyled';
import { ButtonLink } from '../../components/common/ButtonLink';
import { Container } from '../../components/common/Container';
import { SubTitle } from '../../components/common/SubTitle';
import { Text } from '../../components/common/Text';
import { serwis } from '../../utils/serwis';
import WashingMachine from './WashingMachine';
import CoffeeMachine from './CoffeeMachine';
import Television from './Television';
import Dishwasher from './Dishwasher';
import Dryer from './Dryer';
import CoffeeMachine_2 from './CoffeeMachine_2';
import { StyledLink } from '../../components/common/StyledLink';
import { useState, useEffect, useRef } from 'react';
import { mobileScene, scene } from "../../utils/scenes";
import MetaTags from '../../components/common/MetaTags';
import { dataForMetaTags } from '../../utils/dataForMetaTags';
import { useRouter } from 'next/router';

const Home = ({ rating, ratingsTotal, reviews }) => {
  const path = useRouter().asPath;
  const [isPortrait, setIsPortrait] = useState(
    typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : true
  );
  const [activeScene, setActiveScene] = useState({
    reset: true,
    number: 0,
    content: mobileScene[0],
  });
  const [hold, setHold] = useState(false);

  useEffect(() => {
    const initialIsPortrait = window.innerHeight > window.innerWidth;
    setIsPortrait(initialIsPortrait);
    setActiveScene({
      reset: false,
      number: 0,
      content: initialIsPortrait ? mobileScene[0] : scene[0],
    });

    const handleResize = () => {
      const actualState = window.innerHeight > window.innerWidth;
      if (isPortrait === actualState) return;
      setActiveScene({
        ...activeScene,
        reset: true,
        number: 0,
        content: actualState ? mobileScene[0] : scene[0],
      });
      setIsPortrait(actualState);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

    // eslint-disable-next-line
  }, [isPortrait]);

  const sceneNumberRef = useRef(activeScene.number);

  useEffect(() => {
    if (hold) return;

    const updateScene = () => {
      let sceneNumber = sceneNumberRef.current >= 12 ? 1 : sceneNumberRef.current + 1;
      setActiveScene({
        reset: false,
        number: sceneNumber,
        content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
      });
      sceneNumberRef.current = sceneNumber;

      const intervalDuration = sceneNumber % 2 !== 0 ? 3000 : 800;
      clearInterval(interval);
      interval = setInterval(updateScene, intervalDuration);
    };

    let interval = setInterval(updateScene, 300);

    return () => clearInterval(interval);
  }, [hold, isPortrait]);

  return (
    <Hero>
      <MetaTags
        path={path}
        page={dataForMetaTags.home}
        rating={rating}
        ratingsTotal={ratingsTotal}
        reviews={reviews}
      />
      <HeroContainer id="business">
        <HeroTitle>
          Profesjonalna naprawa<br />
          pralek, suszarek, zmywarek,<br />
          telewizorów i&nbsp;ekspresów do&nbsp;kawy<br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i&nbsp;skutecznie!</HeroText>
        <ButtonLink href={`tel:${serwis.phone}`}        >
          Zadzwoń teraz
        </ButtonLink>
      </HeroContainer>
      {!activeScene.reset && <WashingMachine
        show={activeScene.content[0]}
        setHold={setHold}
        left
      />}
      {!activeScene.reset && <Television
        show={activeScene.content[1]}
        setHold={setHold}
        left
      />}
      {!activeScene.reset && <Dryer
        show={activeScene.content[2]}
        setHold={setHold}
        left
      />}
      {!activeScene.reset && <CoffeeMachine
        show={activeScene.content[3]}
        setHold={setHold}
      />}
      {!activeScene.reset && <Dishwasher
        show={activeScene.content[4]}
        setHold={setHold}
      />}
      {!activeScene.reset && <CoffeeMachine_2
        show={activeScene.content[5]}
        setHold={setHold}
      />}
      <Container>
        <SubTitle>
          Serwisuję wszystkie marki telewizorów, pralek, suszarek, zmywarek i&nbsp;ekspresów&nbsp;do&nbsp;kawy
        </SubTitle>
        <Text>
          Specjalizuję się w naprawie urządzeń RTV i AGD różnych marek, oferując profesjonalną obsługę zarówno dla popularnych, jak i mniej znanych producentów.<br />
          Naprawiam urządzenia marek takich jak:
        </Text>
        <Text as="ul">
          <li>
            <StyledLink href="/naprawa-pralek">
              <h3>Pralki: </h3>
            </StyledLink>
            Bosch, Siemens, LG, Samsung, Whirlpool, Electrolux, Miele, Beko, AEG, Candy
          </li>
          <li>
            <StyledLink href="/naprawa-suszarek">
              <h3>Suszarki: </h3>
            </StyledLink>
            Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, AEG, Candy, Amica
          </li>
          <li>
            <StyledLink href="/naprawa-zmywarek">
              <h3>Zmywarki: </h3>
            </StyledLink>
            Bosch, Siemens, Whirlpool, Electrolux, Beko, Miele, Samsung, AEG, Candy, Amica
          </li>
          <li>
            <StyledLink href="/naprawa-telewizorow">
              <h3>Telewizory: </h3>
            </StyledLink>
            LG, Samsung, Sony, Philips, Panasonic, TCL, Sharp, Hisense, Grundig, JVC
          </li>
          <li>
            <StyledLink href="/naprawa-ekspresow">
              <h3>Ekspresy do kawy: </h3>
            </StyledLink>De’Longhi, Jura, Siemens, Bosch, Philips, Nivona, Krups, Melitta, Smeg, Miele
          </li>
        </Text>
        <Text>
          Dzięki doświadczeniu oraz dostępowi do oryginalnych części zamiennych, możesz mieć pewność, że Twoje urządzenie zostanie naprawione szybko i solidnie.
        </Text>
        <br />
        <br />
        <SubTitle>
          Naprawy realizuję w&nbsp;Przemyślu i&nbsp;okolicach
        </SubTitle>
        <Text>
          Działam na terenie Przemyśla i oferuję usługi również w pobliskich miejscowościach.
          Jeśli mieszkasz w jednym z poniższych miejsc lub w ich sąsiedztwie, chętnie przyjadę do Ciebie i naprawię Twoje urządzenie:
          Przemyśl, Bolestraszyce, Duńkowiczki, Krówniki, Nehrybka, Orzechowce, Ostrów, Pikulice, Prałkowce, Wyszatyce, Żurawica.
        </Text>
        <Text>
          Zaufaj profesjonalnemu serwisowi, który codziennie dba o niezawodność Twoich urządzeń RTV i AGD!
        </Text>
      </Container>
    </Hero>
  );
};

export default Home;