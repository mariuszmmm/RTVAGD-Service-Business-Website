import { serwis } from './serwis';
import { appUrls, imageUrls } from './urls';

const shortName = "Serwis RTV i AGD Przemyśl";

export const address = {
  "@type": "PostalAddress",
  "streetAddress": "Generała Józefa Sowińskiego 2",
  "addressLocality": "Przemyśl",
  "addressRegion": "Podkarpackie",
  "postalCode": "37-700",
  "addressCountry": "PL"
};

export const geo = {
  "@type": "GeoCoordinates",
  "latitude": "49.7827725",
  "longitude": "22.7760291"
};

export const openingHours = "Mo, Tu, We, Th, Fr, 09:30-17:00";

const breadcrumbList = {
  // "@context": "https://schema.org",    // wyłączone 15.05.2025
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna – " + shortName,
      "item": {
        "@id": appUrls.home,
        "name": "Strona główna – " + shortName,
      }
    }
  ]
};

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
  "image": [imageUrls.serwis],  // "image": imageUrls.logo,
  "@id": "https://naprawaprzemysl.pl/#business",  // dodane 17.05.2025
  "url": appUrls.home,
  "telephone": serwis.phone.formatted,
  "priceRange": "PLN",
  "address": address,
  // "review": {                   // dodane 17.05.2025
  //   "@type": "Review",
  //   "reviewRating": {
  //     "@type": "Rating",
  //     "bestRating": "5",
  //   },
  //   "author": {
  //     "@type": "Person",
  //     "name": " NaprawaPrzemyśl",
  //   },
  // },
  "geo": geo,
  "openingHoursSpecification": {    // dodane 17.05.2025
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:30",
    "closes": "17:00"
  },
  "sameAs": ["https://www.facebook.com/100063811592941"],    // dodane 17.05.2025
  // "openingHours": openingHours,
  "logo": imageUrls.logo,
  "hasMap": "https://maps.google.com/?q=49.7827725,22.7760291",

  // "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
  // "email": serwis.email,
  // "hasMap": serwis.url.mapaGoogle,
  // "contactPoint": {
  //   "@type": "ContactPoint",
  //   "telephone": serwis.phone.formatted,
  //   "contactType": "office"
  // }
};

export const dataForMetaTags = {
  home: {
    metaTags: {
      title: "Naprawa RTV i AGD ✔️ Serwis w Przemyślu ☎️ 790-258-612",
      canonical: appUrls.home,
      description: "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
      siteName: shortName,
      keywords: "naprawa AGD, serwis sprzętu RTV, Przemyśl, naprawa sprzętu, serwis Przemyśl, naprawa urządzeń domowych, serwis AGD, serwis RTV, naprawa sprzętu AGD",
      appleMobileWebAppTitle: shortName,
    },
    schema: {
      localBusiness,
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": serwis.name,   //  "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.home + "#service",
        "name": shortName,
        "image": [imageUrls.logo, imageUrls.serwis, "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png", "https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png", "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png", "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png", "https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png"],
        "description": "Naprawa sprzętu AGD i RTV w Przemyślu.",
        "url": appUrls.home,
        // "sku": "SEO",
        // "mpn": "SEO-33",
        // "brand": {
        //   "@type": "Thing",
        //   "name": "NaprawaPrzemyśl",
        // },

        "offers": {
          "@type": "Offer",
          "url": appUrls.home,
          // "url": appUrls.naprawa_telewizorow,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          // "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
          // "seller": {
          //   "@type": "LocalBusiness",  // "@type": "Organization",
          //   "name": "NaprawaPrzemyśl",
          // },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Strona główna – " + shortName,  // "name": "Serwis RTV i AGD",
        "alternateName": "Serwis RTV i AGD w Przemyślu",
        "url": appUrls.home,
        "image": {
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",   // "@type": "Organization",
            "name": serwis.name,  //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "PLN",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis.jpg",
          "datePublished": "2025-05-16",
          "description": "Serwis RTV i AGD w Przemyślu",
          "name": "Strona główna – " + shortName,   //  "name": "Serwis RTV i AGD",
        },
        // " breadcrumb": breadcrumbList,
      },
      website: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": serwis.name,  //   "name": "Serwis RTV i AGD NaprawaPrzemyśl",
        "alternateName": "Serwis RTV i AGD w Przemyślu",
        "url": appUrls.home,
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",   // "@type": "Organization",
          "name": serwis.name,  //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis.jpg",
        "datePublished": "2025-05-16",
        "description": "Serwis RTV i AGD w Przemyślu",
        "name": serwis.name,   //  "name": "Serwis RTV i AGD",
      },
      breadcrumbList,
    }
  },
  kontakt: {
    metaTags: {
      title: "Kontakt ✔️ Serwis RTV AGD w Przemyślu ☎️ 790 258 612",
      canonical: appUrls.kontakt,
      description: "Skontaktuj się pod numerem 790 258 612 lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.",
      siteName: `${shortName} - kontakt`,
      keywords: "kontakt naprawa AGD, kontakt serwis Przemyśl, naprawa sprzętu AGD kontakt, naprawa pralek kontakt, naprawa RTV kontakt, naprawa ekspresów kontakt, kontakt serwis RTV AGD",
      appleMobileWebAppTitle: `${shortName} - kontakt`,
    },
    schema: {
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kontakt",
            "item": appUrls.kontakt
          }
        ]
      },
    }
  },
  o_mnie: {
    metaTags: {
      title: "Informacje o serwisie RTV i AGD w Przemyślu, ul.Sowińskiego 2.",
      canonical: appUrls.o_mnie,
      description: "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
      siteName: `${shortName} - o mnie`,
      keywords: "naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa suszarek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy",
      appleMobileWebAppTitle: `${shortName} - o mnie`,
    },
    schema: {
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "O mnie",
            "item": appUrls.o_mnie
          }
        ]
      },
    }
  },
  opinie: {
    path: "/opinie/",
    metaTags: {
      title: "Poznaj opinie klientów ✔️ Serwis RTV AGD w Przemyślu",
      canonical: appUrls.opinie,
      description: "Sprawdź opinie klientów o naprawach sprzętu RTV i AGD w Przemyślu. Dowiedz się, dlaczego tak wielu poleca moje usługi.",
      siteName: `${shortName} - opinie`,
      keywords: "opinie naprawa AGD, opinie serwis RTV, recenzje naprawy pralek, opinie naprawa zmywarek, opinie naprawa ekspresów, doświadczenia z naprawą AGD, opinie naprawa telewizorów",
      appleMobileWebAppTitle: `${shortName} - opinie`,
    },
    schema: {
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Opinie",
            "item": appUrls.opinie
          }
        ]
      },
    }
  },
  naprawa_pralek: {
    metaTags: {
      title: "Naprawa pralek ✔️ Serwis Przemyśl ☎️ 790 258 612",
      canonical: appUrls.naprawa_pralek,
      description: "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
      siteName: `${shortName} - naprawa pralek`,
      keywords: "naprawa pralek, serwis pralek Przemyśl, naprawa pralek w Przemyślu, naprawa pralki Przemyśl, naprawa pralek Przemyśl, awaria pralki",
      appleMobileWebAppTitle: `${shortName} - naprawa pralek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Naprawa Pralek",  //  "name": "Naprawa Pralek",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        // "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        "areaServed": {
          "@type": "Place",
          // "address": address,
          "name": "Przemyśl",
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "itemReviewed": {
        //     "@type": "Service",
        //     "name": "Naprawa Pralek"
        //   }
        // },
        "provider": {                           // dodane 14.05.2025
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          "address": address,
          //  "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        },
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.naprawa_pralek + "#product",
        "name": "Naprawa pralek Przemyśl",
        "image": ["https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png"],
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "url": appUrls.naprawa_pralek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_pralek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Naprawa Pralek - " + shortName, // "name": "Naprawa Pralek",
        "alternateName": "Naprawa pralek automatycznych w Przemyślu",
        "url": appUrls.naprawa_pralek,
        "@id": appUrls.naprawa_pralek,
        "isPartOf": {
          "@id": "https://naprawaprzemysl.pl/#website"
        },
        "inLanguage": "pl-PL",
        "breadcrumb": {
          ...breadcrumbList,
          "itemListElement": [
            ...breadcrumbList["itemListElement"],
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Naprawa Pralek - " + shortName,
              "item": {
                "@id": appUrls.naprawa_pralek,
                "name": "Naprawa Pralek - " + shortName,
              }
            }
          ]
        },
        "image": {
          // "@context": "https://schema.org",
          "@type": "ImageObject",
          // "author": {
          //   "@type": "LocalBusiness",  // "@type": "Organization",
          //   "name": serwis.name,   // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
          //   address,
          //   "image": imageUrls.serwis,
          //   "telephone": serwis.phone.formatted,
          //   "priceRange": "PLN",
          // },
          // "contentLocation": {
          //   "@type": "Place",
          //   "name": "Przemyśl"
          // },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
          // "name": "Naprawa Pralek - " + shortName,  // "name": "Naprawa pralek w Przemyślu",
        },
        "primaryImageOfPage": {
          "@id": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png"
        }
        // "mainEntity": {
        //   "@type": "Service",
        //   "name": "Naprawa pralek",
        //   "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        //   "provider": {
        //     "@type": "LocalBusiness",
        //     "name": serwis.name,
        //     "url": appUrls.home,
        //     "telephone": serwis.phone.formatted,
        //     address,
        //   }
        // }
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,   // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa Pralek - " + serwis.name,  // "name": "Naprawa pralek w Przemyślu",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa pralek",
            "item": appUrls.naprawa_pralek
          }
        ]
      },
    }
  },
  naprawa_suszarek: {
    metaTags: {
      title: "Naprawa suszarek ✔️ Serwis Przemyśl ☎️ 790 258 612",
      canonical: appUrls.naprawa_suszarek,
      description: "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
      siteName: `${shortName} - naprawa suszarek`,
      keywords: "naprawa suszarek, serwis suszarek Przemyśl, naprawa suszarek w Przemyślu, naprawa suszarki Przemyśl, naprawa suszarek Przemyśl, awaria suszarki",
      appleMobileWebAppTitle: `${shortName} - naprawa suszarek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Naprawa Suszarek - " + serwis.name,  // "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Naprawa Suszarek - " + serwis.name,  // "name": "Naprawa Suszarek",
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "image": "https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png",
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        "aggregateRating": {
          "itemReviewed": {
            "@type": "Service",
            "name": "Naprawa Suszarek"
          }
        },
        "provider": {                           // dodane 14.05.2025
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          "address": address,
          //  "image": "https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png",
        },
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.naprawa_suszarek + "#product",
        "name": "Naprawa suszarek Przemyśl",
        "image": ["https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png"],
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "url": appUrls.naprawa_suszarek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_suszarek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Naprawa Suszarek - " + shortName,  // "name": "Naprawa Suszarek",
        "alternateName": "Naprawa suszarek do ubrań w Przemyślu",
        "url": appUrls.naprawa_suszarek,
        // "breadcrumb": {
        //   ...breadcrumbList,
        //   "itemListElement": [
        //     ...breadcrumbList["itemListElement"],
        //     {
        //       "@type": "ListItem",
        //       "position": 2,
        //       "name": "Naprawa Suszarek - " + shortName,
        //       "item": appUrls.naprawa_suszarek,
        //     }
        //   ]
        // },
        "image": {
          // "@context": "https://schema.org",
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,  // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "PLN",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
          "name": "Naprawa Suszarek - " + shortName, //  "name": "Naprawa suszarek w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa suszarek",
          "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
          "provider": {
            "@type": "LocalBusiness",
            "name": serwis.name,
            "url": appUrls.home,
            "telephone": serwis.phone.formatted,
            address,
          }
        }
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,  // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa Suszarek - " + serwis.name,  //  "name": "Naprawa suszarek w Przemyślu",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa suszarek",
            "item": appUrls.naprawa_suszarek,
          }
        ]
      },
    },
  },
  naprawa_zmywarek: {
    metaTags: {
      title: "Naprawa zmywarek ✔️ Serwis Przemyśl ☎️ 790 258 612",
      canonical: appUrls.naprawa_zmywarek,
      description: "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
      siteName: `${shortName} - naprawa zmywarek`,
      keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarki Przemyśl, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      appleMobileWebAppTitle: `${shortName} - naprawa zmywarek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Naprawa Zmywarek - " + serwis.name,  //   "name": "Naprawa Zmywarek",
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
        "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png",
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Service",
            "name": "Naprawa Zmywarek"
          }
        },
        "provider": {                           // dodane 14.05.2025
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          "address": address,
          //  "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png",
        },
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.naprawa_zmywarek + "#product",
        "name": "Naprawa zmywarek Przemyśl",
        "image": ["https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png"],
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
        "url": appUrls.naprawa_zmywarek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_zmywarek,
          "priceCurrency": "PLN",
          "price": "130",
          "priceValidUntil": "2026-05-16",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Naprawa Zmywarek - " + shortName,   // "name": "Naprawa Zmywarek",
        "alternateName": "Naprawa zmywarek w Przemyślu",
        "url": appUrls.naprawa_zmywarek,
        // "breadcrumb": {
        //   ...breadcrumbList,
        //   "itemListElement": [
        //     ...breadcrumbList["itemListElement"],
        //     {
        //       "@type": "ListItem",
        //       "position": 2,
        //       "name": "Naprawa Zmywarek - " + shortName,
        //       "item": appUrls.naprawa_zmywarek,
        //     }
        //   ]
        // },
        "image": {
          // "@context": "https://schema.org",
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,   //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "PLN",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części.",
          "name": "Naprawa Zmywarek - " + shortName,  //   "name": "Naprawa zmywarek w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa zmywarek",
          "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
          "provider": {
            "@type": "LocalBusiness",
            "name": serwis.name,
            "url": appUrls.home,
            "telephone": serwis.phone.formatted,
            address,
          }
        }
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,   //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części.",
        "name": "Naprawa Zmywarek - " + serwis.name,   //   "name": "Naprawa zmywarek w Przemyślu",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa zmywarek",
            "item": appUrls.naprawa_zmywarek,
          }
        ]
      },
    }
  },
  naprawa_ekspresow: {
    metaTags: {
      title: "Naprawa ekspresów ✔️ Serwis Przemyśl ☎️ 790 258 612",
      canonical: appUrls.naprawa_ekspresow,
      description: "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
      siteName: `${shortName} - naprawa ekspresów`,
      keywords: "naprawa ekspresów do kawy, serwis ekspresów Przemyśl, naprawa ekspresu do kawy Przemyśl, naprawa ekspresów w Przemyślu, naprawa ekspresu Przemyśl, awaria ekspresu do kawy",
      appleMobileWebAppTitle: `${shortName} - naprawa ekspresów`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Naprawa Ekspresów - " + shortName,   //   "name": "Naprawa Ekspresów",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "image": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "itemReviewed": {
            "@type": "Service",
            "name": "Naprawa Ekspresów"
          }
        },
        "provider": {                           // dodane 14.05.2025
          "@type": "LocalBusiness",
          "name": serwis.name,
          "url": appUrls.home,
          "telephone": serwis.phone.formatted,
          "address": address,
          //  "image": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        },
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.naprawa_ekspresow + "#product",
        "name": "Naprawa ekspresów Przemyśl",
        "image": ["https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png"],
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "url": appUrls.naprawa_ekspresow,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_ekspresow,
          "priceCurrency": "PLN",
          "price": "120",
          "priceValidUntil": "2026-05-16",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Naprawa Ekspresów - " + shortName,   // "name": "Naprawa Ekspresów",
        "alternateName": "Naprawa ekspresów do kawy w Przemyślu",
        "url": appUrls.naprawa_ekspresow,
        // "breadcrumb": {
        //   ...breadcrumbList,
        //   "itemListElement": [
        //     ...breadcrumbList["itemListElement"],
        //     {
        //       "@type": "ListItem",
        //       "position": 2,
        //       "name": "Naprawa Ekspresów - " + shortName,
        //       "item": appUrls.naprawa_ekspresow,
        //     }
        //   ]
        // },
        "image": {
          // "@context": "https://schema.org",
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,    //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "PLN",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części.",
          "name": "Naprawa Ekspresów - " + shortName,   //   "name": "Naprawa ekspresów w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa ekspresów",
          "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
          "provider": {
            "@type": "LocalBusiness",
            "name": serwis.name,
            "url": appUrls.home,
            "telephone": serwis.phone.formatted,
            address,
          }
        }
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,    //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części.",
        "name": "Naprawa Ekspresów - " + serwis.name,    //   "name": "Naprawa ekspresów w Przemyślu",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa ekspresów do kawy",
            "item": appUrls.naprawa_ekspresow,
          }
        ]
      },
    },
  },
  naprawa_telewizorow: {
    metaTags: {
      title: "Naprawa telewizorów ✔️ Serwis Przemyśl ☎️ 790 258 612",
      canonical: appUrls.naprawa_telewizorow,
      description: "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
      siteName: `${shortName} - naprawa telewizorów`,
      keywords: "naprawa telewizorów, serwis telewizorów Przemyśl, naprawa telewizora w Przemyślu, naprawa telewizorów LCD, naprawa telewizorów LED, serwis telewizora Przemyśl",
      appleMobileWebAppTitle: `${shortName} - naprawa telewizorów`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Naprawa Telewizorów - " + serwis.name,    //   "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Naprawa Telewizorów",    //   "name": "Naprawa Telewizorów",
        "serviceType": "Naprawa telewizorów wszystkich marek",

        // "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "image": ["https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png"],
        "areaServed": {
          "@type": "Place",
          "address": address,
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "itemReviewed": {
        //     "@type": "Service",
        //     "name": "Naprawa Telewizorów"
        //   }
        // },
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://naprawaprzemysl.pl/#business",
          "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
          "image": [imageUrls.serwis],  // "image": imageUrls.logo,
          "telephone": serwis.phone.formatted,
          "priceRange": "PLN",
          "address": address,
        },
        "areaServed": [
          { "@type": "City", "name": "Przemyśl" },
          { "@type": "City", "name": "Bolestraszyce" },
          { "@type": "City", "name": "Duńkowiczki" },
          { "@type": "City", "name": "Krówniki" },
          { "@type": "City", "name": "Nehrybka" },
          { "@type": "City", "name": "Orzechowce" },
          { "@type": "City", "name": "Ostrów" },
          { "@type": "City", "name": "Pikulice" },
          { "@type": "City", "name": "Prałkowce" },
          { "@type": "City", "name": "Wyszatyce" },
          { "@type": "City", "name": "Żurawica" }
        ],


        "offers": {
          "@type": "Offer",
          "priceCurrency": "PLN",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "od 100",
            "priceCurrency": "PLN"
          },
          "url": "https://naprawaprzemysl.pl/naprawa-telewizorow"
        },
        // "aggregateRating": {
        //   "@type": "AggregateRating",
        //   "ratingValue": "4.6",
        //   "reviewCount": "65"
        // },
        // "review": [
        //   {
        //     "@type": "Review",
        //     "author": { "@type": "Person", "name": "egon920" },
        //     "datePublished": "2025-02-11",
        //     "reviewBody": "Super fachowiec…",
        //     "reviewRating": { "@type": "Rating", "ratingValue": 5, "bestRating": 5 }
        //   }
        // ]
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": appUrls.naprawa_telewizorow + "#product",
        "name": "Naprawa telewizorów Przemyśl",
        "image": ["https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png"],
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "url": appUrls.naprawa_telewizorow,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_telewizorow,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "availability": "https://schema.org/InStock",
          "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Naprawa Telewizorów - " + shortName,    //   "name": "Naprawa Telewizorów",
        "alternateName": "Naprawa telewizorów w Przemyślu",
        "url": appUrls.naprawa_telewizorow,
        // "breadcrumb": {
        //   ...breadcrumbList,
        //   "itemListElement": [
        //     ...breadcrumbList["itemListElement"],
        //     {
        //       "@type": "ListItem",
        //       "position": 2,
        //       "name": "Naprawa Telewizorów - " + shortName,
        //       "item": appUrls.naprawa_telewizorow,
        //     }
        //   ]
        // },
        "image": {
          // "@context": "https://schema.org",
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,    //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "PLN",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części.",
          "name": "Naprawa Telewizorów - " + shortName,    // "name": "Naprawa telewizorów w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa telewizorów",
          "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
          "provider": {
            "@type": "LocalBusiness",
            "name": serwis.name,
            "url": appUrls.home,
            "telephone": serwis.phone.formatted,
            address,
          }
        }
      },
      imageObject: {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,    //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png",
        "datePublished": "2025-05-16",
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa Telewizorów - " + serwis.name,    // "name": "Naprawa telewizorów w Przemyślu",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa telewizorów",
            "item": appUrls.naprawa_telewizorow,
          }
        ]
      },
    }
  },
};