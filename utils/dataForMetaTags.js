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

const provider = {
  "@type": "LocalBusiness",
  "name": serwis.name,
  "telephone": serwis.phone,
  "email": serwis.email,
  "address": address,
};

const breadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Naprawa telewizorów, pralek, szuszarek, zmywarek i ekspresów",
      "item": appUrls.home
    }
  ]
};

export const dataForMetaTags = {
  home: {
    metaTags: {
      title: "Naprawa telewizorów, pralek, szuszarek, zmywarek i ekspresów",
      canonical: appUrls.home,
      description: "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
      siteName: shortName,
      image: `${appUrls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
      keywords: "naprawa AGD, serwis sprzętu RTV, naprawa pralek, naprawa suszarek, naprawa zmywarek, naprawa telewizorów, naprawa ekspresów do kawy, Przemyśl, naprawa sprzętu, serwis Przemyśl, naprawa urządzeń domowych, serwis AGD, serwis RTV, naprawa sprzętu AGD",
      appleMobileWebAppTitle: shortName,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemysl",
        "logo": "https://res.cloudinary.com/difc0i71u/image/upload/v1733813310/Serwis/logo.png",
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
          "name": "NaprawaPrzemysl",
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
        "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemysl",
      },
      webpage: {
        "@context": "http://www.schema.org",
        "@type": "WebPage",
        "name": serwis.name,
        "alternateName": serwis.subName,
        "url": appUrls.home,
      },
      website: {
        "@context": "http://www.schema.org",
        "@type": "WebSite",
        "name": "Naprawa pralek, szuszarek, zmywarek, telewizorów, ekspresów",
        "alternateName": "Naprawa pralek, szuszarek, zmywarek, telewizorów i ekspresów do kawy",
        "url": appUrls.home,
      },
      imageObject: {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        "author": "Serwis RTV i AGD NaprawaPrzemysl",
        "contentLocation": "Przemyśl",
        "contentUrl": `${appUrls.home}share.png`,
        "datePublished": "2024-12-18",
        "description": "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
        "name": serwis.name,
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
      image: `${appUrls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
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
      image: `${appUrls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
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
      image: `${appUrls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
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
      image: imageUrls.pralka_auto,
      imageWidth: "599",
      imageHeight: "729",
      imageAlt: "naprawa pralek",
      imageType: "image/webp",
      keywords: "naprawa pralek, serwis pralek Przemyśl, naprawa pralek AGD, naprawa pralek w Przemyślu, naprawa pralki Przemyśl, naprawa pralek Przemyśl, awaria pralki, naprawa sprzętu AGD",
      appleMobileWebAppTitle: `${shortName} - naprawa pralek`,
    },
    schema: {
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Pralek",
        "image": [imageUrls.pralka_auto],
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Thing",
          "name": "NaprawaPrzemysl",
        },
        "review": {
          "type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemysl ",
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
          "priceValidUntil": "2024-12-17",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemysl",
          },
        },
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
      image: imageUrls.suszarka,
      imageWidth: "700",
      imageHeight: "865",
      imageAlt: "naprawa suszarek",
      imageType: "image/webp",
      keywords: "naprawa suszarek, serwis suszarek Przemyśl, naprawa suszarek AGD, naprawa suszarek w Przemyślu, naprawa pralki Przemyśl, naprawa suszarek Przemyśl, awaria pralki, naprawa sprzętu AGD",
      appleMobileWebAppTitle: `${shortName} - naprawa suszarek`,
    },
    schema: {
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Suszarek",
        "image": [imageUrls.suszarka],
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Thing",
          "name": "NaprawaPrzemysl",
        },
        "review": {
          "type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemysl ",
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
          "priceValidUntil": "2024-12-17",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemysl",
          },
        },
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
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki.png",
      imageWidth: "538",
      imageHeight: "706",
      imageAlt: "naprawa zmywarek",
      imageType: "image/png",
      keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarek AGD, naprawa zmywarki Przemyśl, naprawa sprzętu AGD, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      appleMobileWebAppTitle: `${shortName} - naprawa zmywarek`,
    },
    schema: {
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa zmywarek",
        "image": ["https://res.cloudinary.com/difc0i71u/image/upload/v1734715051/Serwis/serwis-zmywarek-przemysl-naprawa-zmywarki.png"],
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Thing",
          "name": "NaprawaPrzemysl",
        },
        "review": {
          "type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemysl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_zmywarek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2024-12-17",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemysl",
          },
        },
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
      image: imageUrls.ekspres,
      imageWidth: "700",
      imageHeight: "700",
      imageAlt: "naprawa ekspresów",
      imageType: "image/webp",
      keywords: "naprawa ekspresów do kawy, serwis ekspresów Przemyśl, naprawa ekspresów AGD, naprawa ekspresu do kawy Przemyśl, naprawa ekspresów w Przemyślu, naprawa ekspresu Przemyśl, awaria ekspresu do kawy",
      appleMobileWebAppTitle: `${shortName} - naprawa ekspresów`,
    },
    schema: {
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Ekspresów",
        "image": [imageUrls.ekspres],
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Thing",
          "name": "NaprawaPrzemysl",
        },
        "review": {
          "type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemysl ",
          },
        },
        "aggregateRating": {
          "@type": "AggregateRating",
        },
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_ekspresow,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2024-12-17",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemysl",
          },
        },
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
      image: imageUrls.telewizor,
      imageWidth: "918",
      imageHeight: "743",
      imageAlt: "naprawa telewizorów",
      imageType: "image/webp",
      keywords: "naprawa telewizorów, serwis telewizorów Przemyśl, naprawa telewizora AGD, naprawa telewizora w Przemyślu, naprawa telewizorów LCD, naprawa telewizorów LED, serwis telewizora Przemyśl",
      appleMobileWebAppTitle: `${shortName} - naprawa telewizorów`,
    },
    schema: {
      product: {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Naprawa Telewizorów",
        "image": [imageUrls.telewizor],
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "sku": "SEO",
        "mpn": "SEO-33",
        "brand": {
          "@type": "Thing",
          "name": "NaprawaPrzemysl",
        },
        "review": {
          "type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "bestRating": "5",
          },
          "author": {
            "@type": "Person",
            "name": " NaprawaPrzemysl ",
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
          "priceValidUntil": "2024-12-17",
          "itemCondition": "https://schema.org/UsedCondition",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "NaprawaPrzemysl",
          },
        },
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