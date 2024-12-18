import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";
import { Image } from "../../../components/common/Image";

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
      <Image
        src={imageUrls.ekspres_2}
        alt="Naprawa ekspresów do kawy - profesjonalny serwis ekspresu w Przemyślu"
        loading="lazy"
        width="276"
        height="350"
        crop={{
          type: 'auto',
          source: true
        }}
      />
    </Link>
  </ImageWrapper>
);

export default CoffeeMachine_2;