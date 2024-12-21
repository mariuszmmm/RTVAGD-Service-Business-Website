import { BackgroundWrapper, Circle, Rotating } from "./styled.js";

const Background = () => {
  return (
    <BackgroundWrapper>
      <Rotating>
        <Circle $top={"0"} $left={"0"}></Circle>
        <Circle $top={"-80%"} $left={"30%"}></Circle>
        <Circle $top={"-20%"} $left={"70%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;