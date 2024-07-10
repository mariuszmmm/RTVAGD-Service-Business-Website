import {
  PricingContainer,
  PricingSection,
  PricingTable,
  PricingTh,
  PricingTitle,
} from "./styled";
import { PricingRow } from "./PricingRow";
import { serwis } from "../../utils/serwis";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
export const Pricing = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <PricingSection $show={show}>
      <HelmetProvider>
        <div>
          <Helmet>
            <title>Cennik | Serwis RTV AGD w Przemyślu</title>
            <meta
              name="description"
              content="Sprawdź mój cennik usług naprawy pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
            />
            <meta
              name="keywords"
              content="cennik, usługi, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
            />
            <link rel="canonical" href="https://naprawaprzemysl.pl/cennik" />
            <meta
              property="og:title"
              content="Cennik | Serwis RTV AGD w Przemyślu"
            />
            <meta
              property="og:description"
              content="Sprawdź nasz cennik usług serwisu RTV i AGD w Przemyślu."
            />
            <meta
              property="og:url"
              content="https://naprawaprzemysl.pl/cennik"
            />
          </Helmet>
        </div>
      </HelmetProvider>
      <PricingContainer>
        <PricingTitle>Cennik</PricingTitle>
        <PricingTable>
          <thead>
            <tr>
              <PricingTh>Usługa</PricingTh>
              <PricingTh>Cena</PricingTh>
            </tr>
          </thead>
          <tbody>
            {serwis.pricing.map((pri, index) => (
              <PricingRow item={pri} key={index} />
            ))}
          </tbody>
        </PricingTable>
      </PricingContainer>
    </PricingSection>
  );
};
