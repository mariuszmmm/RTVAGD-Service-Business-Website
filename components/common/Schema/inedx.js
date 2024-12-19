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
    "image": imageUrls.logo,
    "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
    "telephone": serwis.phone,
    "email": serwis.email,
    "priceRange": "PLN",
    "address": address,
    "geo": geo,
    "hasMap": serwis.url.mapaGoogle,
    "openingHours": openingHours,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": serwis.phone,
      "contactType": "office"
    }
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Naprawa Przemyśl",
        "item": appUrls.home
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `☎ ${serwis.phone}`,
        "item": `${appUrls.home}#`
      }
    ]
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusiness)
      }}
    />
  )
};
