import { BackgroundWrapper, Circle, Rotating, ImageContainer } from "./styled.js";
import { imageUrls } from "../../utils/urls.js";
import Image from "next/image.js";

const Background = () => {
  return (
    <BackgroundWrapper>
   //   <ImageContainer>
   //     <Image
   //       src={imageUrls.serwis}
   //       alt="Background image"
   //       loading="lazy"
   //       fill
   //     />
   //   </ImageContainer>
      <Rotating>
        <Circle $top={"0"} $left={"0"}></Circle>
        <Circle $top={"-80%"} $left={"30%"}></Circle>
        <Circle $top={"-20%"} $left={"70%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};

export default Background;