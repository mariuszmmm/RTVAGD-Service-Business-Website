import { CoffeeMachineWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
import { imageUrls } from "../../../utils/urls";

const CoffeeMachine = ({ show, center, reset, setHold }) => (
  <CoffeeMachineWrapper
    $show={show}
    $center={center}
    $noDisplay={reset}
    onMouseEnter={() => setHold(true)}
    onMouseLeave={() => setHold(false)}
  >
    <Link to="/naprawa-ekspresow">
      <Image
        src={imageUrls.ekspres}
        alt="Naprawa ekspresów do kawy w Przemyślu"
        $center={center}
      />
    </Link>
  </CoffeeMachineWrapper>
);

export default CoffeeMachine;