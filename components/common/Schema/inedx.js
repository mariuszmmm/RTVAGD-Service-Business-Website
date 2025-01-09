import { appUrls, imageUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { address, geo, openingHours } from '../../../utils/dataForMetaTags';

export const Schema = () => {
  const localBusiness = {
    "@context": "http://www.schema.org",
    "@type": "LocalBusiness",
    "name": "Naprawa Przemyśl",
    "url": appUrls.home,
    "logo": imageUrls.logo,
    "image": imageUrls.serwis,
    "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
    "telephone": serwis.phone.formatted,
    "email": serwis.email,
    "priceRange": "PLN",
    "address": address,
    "geo": geo,
    "hasMap": serwis.url.mapaGoogle,
    "openingHours": openingHours,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": serwis.phone.formatted,
      "contactType": "office"
    }
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness)
      }}
    />
  )
};
