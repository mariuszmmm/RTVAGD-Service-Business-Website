import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { StyledImage } from "../../../components/common/StyledImage";
import Image from "next/image";

const CoffeeMachine_2 = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link
      href="/naprawa-ekspresow"
      title="Naprawa ekspresów do kawy w Przemyślu"
    >
      <StyledImage>
        <Image
          src={imageUrls.ekspres_2}
          alt="Naprawa ekspresów do kawy - profesjonalny serwis ekspresu w Przemyślu"
          loading='lazy'
          fill
        />
      </StyledImage>
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine_2;