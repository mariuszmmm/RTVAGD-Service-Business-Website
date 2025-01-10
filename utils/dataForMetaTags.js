import { serwis } from './serwis';
import { appUrls, imageUrls } from './urls';

const shortName = "Serwis RTV i AGD";

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
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona główna",
      "item": appUrls.home
    }
  ]
};

export const localBusiness = {
  "@context": "http://www.schema.org",
  "@type": "LocalBusiness",
  "name": "Naprawa Przemyśl",
  "url": appUrls.home,
  "logo": imageUrls.logo,
  "image": imageUrls.logo,
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

export const dataForMetaTags = {
  home: {
    metaTags: {
      title: "Naprawa telewizorów, pralek, szuszarek, zmywarek i ekspresów",
      canonical: appUrls.home,
      description: "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
      siteName: shortName,
      keywords: "naprawa AGD, serwis sprzętu RTV, Przemyśl, naprawa sprzętu, serwis Przemyśl, naprawa urządzeń domowych, serwis AGD, serwis RTV, naprawa sprzętu AGD",
      appleMobileWebAppTitle: shortName,
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
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "NAPRAWA TELEWIZORÓW, PRALEK, SUSZAREK, ZMYWAREK, EKSPRESÓW",
        "image": appUrls.home,
        "description": "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "worstRating": "3",
          "bestRating": "5",
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Serwis RTV i AGD",
        "alternateName": "Serwis RTV i AGD w Przemyślu",
        "url": appUrls.home,
      },
      website: {
        "@context": "http://www.schema.org",
        "@type": "WebSite",
        "name": "Serwis RTV i AGD NaprawaPrzemyśl",
        "alternateName": "Serwis RTV i AGD w Przemyślu, naprawa pralek, naprawa szuszarek, naprawa zmywarek, naprawa telewizorów, naprawa ekspresów.",
        "url": appUrls.home,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.serwis,
        "datePublished": "2025-01-09",
        "description": "Serwis RTV i AGD w Przemyślu, naprawa pralek, naprawa szuszarek, naprawa zmywarek, naprawa telewizorów, naprawa ekspresów.",
        "name": "Serwis RTV i AGD",
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
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Pralek",
        "image": [imageUrls.pralka],
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemyśl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_pralek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2025-01-31",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemyśl",
          },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Naprawa Pralek",
        "alternateName": "Naprawa pralek automatycznych w Przemyślu",
        "url": appUrls.naprawa_pralek,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.pralka,
        "datePublished": "2025-01-09",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa pralek w Przemyślu",
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
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Suszarek",
        "image": [imageUrls.suszarka],
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemyśl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_suszarek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2025-01-31",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemyśl",
          },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Naprawa Suszarek",
        "alternateName": "Naprawa suszarek do ubrań w Przemyślu",
        "url": appUrls.naprawa_suszarek,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.suszarka,
        "datePublished": "2025-01-09",
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa suszarek w Przemyślu",
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
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Zmywarek",
        "image": [imageUrls.zmywarka],
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemyśl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_zmywarek,
          "priceCurrency": "PLN",
          "price": "130",
          "priceValidUntil": "2025-01-31",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemyśl",
          },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Naprawa Zmywarek",
        "alternateName": "Naprawa zmywarek w Przemyślu",
        "url": appUrls.naprawa_zmywarek,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.zmywarka,
        "datePublished": "2025-01-09",
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części.",
        "name": "Naprawa zmywarek w Przemyślu",
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
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Ekspresów",
        "image": [imageUrls.logo],
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemyśl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_ekspresow,
          "priceCurrency": "PLN",
          "price": "120",
          "priceValidUntil": "2025-01-31",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemyśl",
          },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Naprawa Ekspresów",
        "alternateName": "Naprawa ekspresów do kawy w Przemyślu",
        "url": appUrls.naprawa_ekspresow,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.logo,
        "datePublished": "2025-01-09",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części.",
        "name": "Naprawa ekspresów w Przemyślu",
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
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Telewizorów",
        "image": [imageUrls.telewizor],
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Brand",
          "name": "NaprawaPrzemyśl",
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemyśl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_telewizorow,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2025-01-31",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemyśl",
          },
        },
      },
      place: {
        "@context": "https://schema.org",
        "@type": "Place",
        "geo": geo,
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": "Naprawa Telewizorów",
        "alternateName": "Naprawa telewizorów w Przemyślu",
        "url": appUrls.naprawa_telewizorow,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": {
          "@type": "Organization",
          "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": imageUrls.telewizor,
        "datePublished": "2025-01-09",
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części.",
        "name": "Naprawa telewizorów w Przemyślu",
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