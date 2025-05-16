import { imageUrls } from "../../utils/urls.js";
import { BackgroundWrapper, Circle, Rotating, StyledImage } from "./styled.js";
import Image from "next/image";

const Background = () => {
  return (
    <BackgroundWrapper>
      {/* <StyledImage>
        <Image src={imageUrls.serwis} alt="Serwis RTV i AGD" fill />
      </StyledImage> */}
      <Rotating>
        <Circle $top={"0"} $left={"0"}></Circle>
        <Circle $top={"-80%"} $left={"30%"}></Circle>
        <Circle $top={"-20%"} $left={"70%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;