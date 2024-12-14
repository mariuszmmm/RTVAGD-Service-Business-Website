import Link from "next/link";
import { imageUrls } from "../../../utils/urls";
import { ImageWrapper } from "../../../components/common/ImageWrapper";

import Image from "next/image";
import { dataForMetaTags } from "../../../utils/dataForMetaTags";

const WashingMachine = ({ show, left, setHold }) => {
  return (
    <ImageWrapper
      $show={show}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      $left={left}
    >
      <Link href="/naprawa-pralek">
        <Image
          src={imageUrls.pralka}
          alt="naprawa pralek"
          loading='lazy'
          fill
        />
      </Link>
    </ImageWrapper>
  );
};
export default WashingMachine