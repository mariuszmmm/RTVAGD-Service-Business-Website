import { serwis } from './serwis';

const shortName = "Serwis RTV i AGD";

const urls = {
  home: "https://naprawaprzemysl.pl/",
  kontakt: "https://naprawaprzemysl.pl/kontakt/",
  o_mnie: "https://naprawaprzemysl.pl/o-mnie/",
  opinie: "https://naprawaprzemysl.pl/opinie/",
  naprawa_pralek: "https://naprawaprzemysl.pl/naprawa-pralek/",
  naprawa_suszarek: "https://naprawaprzemysl.pl/naprawa-suszarek/",
  naprawa_zmywarek: "https://naprawaprzemysl.pl/naprawa-zmywarek/",
  naprawa_ekspresow: "https://naprawaprzemysl.pl/naprawa-ekspresow/",
  naprawa_telewizorow: "https://naprawaprzemysl.pl/naprawa-telewizorow/",
};

const address = {
  "@type": "PostalAddress",
  "streetAddress": "Generała Józefa Sowińskiego 2",
  "addressLocality": "Przemyśl",
  "addressRegion": "Podkarpackie",
  "postalCode": "37-700",
  "addressCountry": "PL"
};

const geo = {
  "@type": "GeoCoordinates",
  "latitude": 49.7827725,
  "longitude": 22.7760291
};

const openingHoursSpecification = [
  {
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
  }
];

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
      "item": urls.home
    }
  ]
};

export const dataForMetaTags = {
  home: {
    metaTags: {
      title: "Naprawa telewizorów, pralek, szuszarek, zmywarek i ekspresów",
      canonical: urls.home,
      description: "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
      siteName: shortName,
      image: `${urls.home}share.png`,
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
        "@type": "LocalBusiness",
        "name": serwis.name,
        "@id": urls.home,
        "url": urls.home,
        "telephone": serwis.phone,
        "email": serwis.email,
        "address": address,
        "geo": geo,
        "hasMap": serwis.url.mapaGoogle,
        "openingHoursSpecification": openingHoursSpecification,
        "sameAs": [serwis.url.facebook],
        "image": {
          "@type": "ImageObject",
          "url": `${urls.home}share.png`,
          "width": 931,
          "height": 497
        },
        "serviceType": "Naprawa sprzętu RTV i AGD",
        "priceRange": "$$$",
        "description": "Kompleksowy serwis telewizorów, pralek, suszarek, zmywarek i ekspresów do kawy w Przemyślu. Szybka pomoc, fachowa obsługa, niezawodne naprawy.",
        "paymentAccepted": "Cash",
      },
      breadcrumbList,
    }
  },
  kontakt: {
    metaTags: {
      title: "Kontakt ✔️ Serwis RTV AGD w Przemyślu ☎️ 790-258-612",
      canonical: urls.kontakt,
      description: "Skontaktuj się pod numerem 790-258-612 lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.",
      siteName: `${shortName} - kontakt`,
      image: `${urls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
      keywords: "kontakt naprawa AGD, kontakt serwis Przemyśl, naprawa sprzętu AGD kontakt, naprawa pralek kontakt, naprawa RTV kontakt, naprawa ekspresów kontakt, kontakt serwis RTV AGD",
      appleMobileWebAppTitle: `${shortName} - kontakt`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": `Kontakt - ${serwis.name}`,
        "url": urls.kontakt,
        "description": "Skontaktuj się pod numerem 790-258-612 lub odwiedź nas w Przemyślu, ul. Generała Sowińskiego 2. Szybkie, fachowe usługi naprawy sprzętu RTV i AGD.",
        "telephone": serwis.phone,
  "email": serwis.email
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Kontakt",
            "item": urls.kontakt
          }
        ]
      },
    }
  },
  o_mnie: {
    metaTags: {
      title: "Informacje o serwisie RTV i AGD w Przemyślu, ul.Sowińskiego 2.",
      canonical: urls.o_mnie,
      description: "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
      siteName: `${shortName} - o mnie`,
      image: `${urls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
      keywords: "naprawa AGD Przemyśl, serwis sprzętu RTV, doświadczenie w naprawie AGD, profesjonalna naprawa pralek, naprawa suszarek, naprawa urządzeń domowych, naprawa sprzętu RTV, serwis pralek Przemyśl, naprawa telewizorów Przemyśl, serwis ekspresów do kawy",
      appleMobileWebAppTitle: `${shortName} - o mnie`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": `O mnie - ${serwis.name}`,
        "url": urls.o_mnie,
        "description": "Dowiedz się o moim doświadczeniu w naprawie sprzętu RTV i AGD oraz zaangażowaniu w najwyższej jakości usługi serwisowe w Przemyślu.",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "O mnie",
            "item": urls.o_mnie
          }
        ]
      },
    }
  },
  opinie: {
    path: "/opinie/",
    metaTags: {
      title: "Poznaj opinie klientów ✔️ Serwis RTV AGD w Przemyślu",
      canonical: urls.opinie,
      description: "Sprawdź opinie klientów o naprawach sprzętu RTV i AGD w Przemyślu. Dowiedz się, dlaczego tak wielu poleca moje usługi.",
      siteName: `${shortName} - opinie`,
      image: `${urls.home}share.png`,
      imageWidth: "931",
      imageHeight: "497",
      imageAlt: shortName,
      imageType: "image/png",
      keywords: "opinie naprawa AGD, opinie serwis RTV, recenzje naprawy pralek, opinie naprawa zmywarek, opinie naprawa ekspresów, doświadczenia z naprawą AGD, opinie naprawa telewizorów",
      appleMobileWebAppTitle: `${shortName} - opinie`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://naprawaprzemysl.pl#business",
        "name": serwis.name,
        "url": urls.home,
        "description": "Sprawdź opinie klientów o naprawach sprzętu RTV i AGD w Przemyślu. Dowiedz się, dlaczego tak wielu poleca moje usługi.",
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "O mnie",
            "item": urls.opinie
          }
        ]
      },
    }
  },
  naprawa_pralek: {
    metaTags: {
      title: "Naprawa pralek ✔️ Serwis Przemyśl ☎️ 790-258-612",
      canonical: urls.naprawa_pralek,
      description: "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
      siteName: `${shortName} - naprawa pralek`,
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/naprawa-pralki.webp",
      imageWidth: "599",
      imageHeight: "729",
      imageAlt: "naprawa pralek",
      imageType: "image/webp",
      keywords: "naprawa pralek, serwis pralek Przemyśl, naprawa pralek AGD, naprawa pralek w Przemyślu, naprawa pralki Przemyśl, naprawa pralek Przemyśl, awaria pralki, naprawa sprzętu AGD",
      appleMobileWebAppTitle: `${shortName} - naprawa pralek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Naprawa Pralek - ${serwis.name}`,
        "url": urls.naprawa_pralek,
        "serviceType": "Naprawa pralek",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "provider": provider,
        "image": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/naprawa-pralki.webp",
          "width": 599,
          "height": 729
        }
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa pralek",
            "item": urls.naprawa_pralek
          }
        ]
      },
    }
  },
  naprawa_suszarek: {
    metaTags: {
      title: "Naprawa suszarek ✔️ Serwis Przemyśl ☎️ 790-258-612",
      canonical: urls.naprawa_suszarek,
      description: "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
      siteName: `${shortName} - naprawa suszarek`,
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1733118542/Serwis/naprawa-suszarki.webp",
      imageWidth: "700",
      imageHeight: "865",
      imageAlt: "naprawa suszarek",
      imageType: "image/webp",
      keywords: "naprawa suszarek, serwis suszarek Przemyśl, naprawa suszarek AGD, naprawa suszarek w Przemyślu, naprawa pralki Przemyśl, naprawa suszarek Przemyśl, awaria pralki, naprawa sprzętu AGD",
      appleMobileWebAppTitle: `${shortName} - naprawa suszarek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Naprawa Suszarek - ${serwis.name}`,
        "url": urls.naprawa_suszarek,
        "serviceType": "Naprawa suszarek",
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "provider": provider,
        "image": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/difc0i71u/image/upload/v1733118542/Serwis/naprawa-suszarki.webp",
          "width": 700,
          "height": 865
        }
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa suszarek",
            "item": urls.naprawa_suszarek,
          }
        ]
      },
    }
  },
  naprawa_zmywarek: {
    metaTags: {
      title: "Naprawa zmywarek ✔️ Serwis Przemyśl ☎️ 790-258-612",
      canonical: urls.naprawa_zmywarek,
      description: "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
      siteName: `${shortName} - naprawa zmywarek`,
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/serwis-zmywarek.webp",
      imageWidth: "538",
      imageHeight: "706",
      imageAlt: "naprawa zmywarek",
      imageType: "image/webp",
      keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarek AGD, naprawa zmywarki Przemyśl, naprawa sprzętu AGD, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      appleMobileWebAppTitle: `${shortName} - naprawa zmywarek`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Naprawa Zmywarek - ${serwis.name}`,
        "url": urls.naprawa_zmywarek,
        "serviceType": "Naprawa zmywarek",
        "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części. Skontaktuj się już dziś!",
        "provider": provider,
        "image": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/serwis-zmywarek.webp",
          "width": 538,
          "height": 706
        }
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa zmywarek",
            "item": urls.naprawa_zmywarek,
          }
        ]
      },
    }
  },
  naprawa_ekspresow: {
    metaTags: {
      title: "Naprawa ekspresów ✔️ Serwis Przemyśl ☎️ 790-258-612",
      canonical: urls.naprawa_ekspresow,
      description: "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
      siteName: `${shortName} - naprawa ekspresów`,
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/naprawa-ekspresow.webp",
      imageWidth: "700",
      imageHeight: "700",
      imageAlt: "naprawa ekspresów",
      imageType: "image/webp",
      keywords: "naprawa ekspresów do kawy, serwis ekspresów Przemyśl, naprawa ekspresów AGD, naprawa ekspresu do kawy Przemyśl, naprawa ekspresów w Przemyślu, naprawa ekspresu Przemyśl, awaria ekspresu do kawy",
      appleMobileWebAppTitle: `${shortName} - naprawa ekspresów`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Naprawa Ekspresów - ${serwis.name}`,
        "url": urls.naprawa_ekspresow,
        "serviceType": "Naprawa ekspresów",
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "provider": provider,
        "image": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/difc0i71u/image/upload/v1731168333/Serwis/naprawa-ekspresow.webp",
          "width": 700,
          "height": 700
        }
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa ekspresów do kawy",
            "item": urls.naprawa_ekspresow,
          }
        ]
      },
    }
  },
  naprawa_telewizorow: {
    metaTags: {
      title: "Naprawa telewizorów ✔️ Serwis Przemyśl ☎️ 790-258-612",
      canonical: urls.naprawa_telewizorow,
      description: "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
      siteName: `${shortName} - naprawa telewizorów`,
      image: "https://res.cloudinary.com/difc0i71u/image/upload/v1731168332/Serwis/serwis-telewizorow.webp",
      imageWidth: "918",
      imageHeight: "743",
      imageAlt: "naprawa telewizorów",
      imageType: "image/webp",
      keywords: "naprawa telewizorów, serwis telewizorów Przemyśl, naprawa telewizora AGD, naprawa telewizora w Przemyślu, naprawa telewizorów LCD, naprawa telewizorów LED, serwis telewizora Przemyśl",
      appleMobileWebAppTitle: `${shortName} - naprawa telewizorów`,
    },
    schema: {
      organization: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Naprawa Telewizorów - ${serwis.name}`,
        "url": urls.naprawa_telewizorow,
        "serviceType": "Naprawa telewizorów",
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "provider": provider,
        "image": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/difc0i71u/image/upload/v1731168332/Serwis/serwis-telewizorow.webp",
          "width": 918,
          "height": 743
        }
      },
      breadcrumbList: {
        ...breadcrumbList,
        "itemListElement": [
          ...breadcrumbList["itemListElement"],
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Naprawa telewizorów",
            "item": urls.naprawa_telewizorow,
          }
        ]
      },
    }
  },
};