import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { Image } from "../../../components/common/Image";
import { ImageWrapper } from "../../../components/common/ImageWrapper";

const Dishwasher = ({ show, setHold }) => (
  <ImageWrapper
    $show={show}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    {" "}
    <Link href="/naprawa-zmywarek">
      <Image
        src={imageUrls.zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        loading="lazy"
      />
    </Link>
  </ImageWrapper>
);

export default Dishwasher;