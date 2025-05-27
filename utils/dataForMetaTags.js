import { serwis } from './serwis';
import { appUrls, imageUrls } from './urls';

const shortName = "Serwis RTV i AGD Przemyśl";

export const address = {
  "@type": "PostalAddress",
  "streetAddress": "ul. Generała Józefa Sowińskiego 2",
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
  // wyłączone 15.05.2025
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Strona Główna",
      "item": appUrls.home,
    }
  ]
};

export const localBusiness = {

  "@type": "LocalBusiness",
  "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
  "logo": imageUrls.logo,

  "image": [imageUrls.logo, imageUrls.serwis],  // "image": imageUrls.logo,
  "@id": "https://naprawaprzemysl.pl/#localbusiness",  // dodane 17.05.2025
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
  "sameAs": [serwis.url.mapaGoogle, serwis.url.facebook],    // dodane 17.05.2025
  // "openingHours": openingHours,
  "hasMap": "https://maps.google.com/?q=49.7827725,22.7760291",

  // "description": "Naprawa sprzętu AGD i RTV w Przemyślu. Serwis pogwarancyjny. Naprawa pralek, zmywarek, suszarek, ekspresów, telewizorów.",
  "description": "Serwis RTV i AGD w Przemyślu zajmuje się naprawą pralek, zmywarek, telewizorów i innego sprzętu domowego. Szybka diagnoza, oryginalne części, gwarancja jakości."

  // "email": serwis.email,
  // "hasMap": serwis.url.mapaGoogle,
  // "contactPoint": {
  //   "@type": "ContactPoint",
  //   "telephone": serwis.phone.formatted,
  //   "contactType": "office"
  // }
};

export const siteNavigationElements = [
  {
    "@type": "SiteNavigationElement",
    "name": "Strona główna",
    "url": "https://naprawaprzemysl.pl/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "O mnie",
    "url": "https://naprawaprzemysl.pl/o-mnie/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa pralek",
    "url": "https://naprawaprzemysl.pl/naprawa-pralek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa suszarek",
    "url": "https://naprawaprzemysl.pl/naprawa-suszarek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa zmywarek",
    "url": "https://naprawaprzemysl.pl/naprawa-zmywarek/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa ekspresów",
    "url": "https://naprawaprzemysl.pl/naprawa-ekspresow/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Naprawa telewizorów",
    "url": "https://naprawaprzemysl.pl/naprawa-telewizorow/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Opinie",
    "url": "https://naprawaprzemysl.pl/opinie/"
  },
  {
    "@type": "SiteNavigationElement",
    "name": "Kontakt",
    "url": "https://naprawaprzemysl.pl/kontakt/"
  },
]

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

        "@type": "Organization",
        "name": serwis.name,   //  "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      product: {

        "@type": "Product",
        "@id": appUrls.home + "#product",
        "name": shortName,
        "image": [imageUrls.serwis],
        "description": "Profesjonalny serwis i naprawa sprzętu RTV i AGD w Przemyślu. Szybka diagnoza, oryginalne części, gwarancja jakości.",
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
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
          // "seller": {
          //   "@type": "LocalBusiness",  // "@type": "Organization",
          //   "name": "NaprawaPrzemyśl",
          // },
        },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-rtv-i-agd-naprawa-przemysl.webp",
          "datePublished": "2025-05-16",
          "description": "Serwis RTV i AGD w Przemyślu",
          "name": "Strona główna – " + shortName,   //  "name": "Serwis RTV i AGD",
        },
        // " breadcrumb": breadcrumbList,
      },
      website: {

        "@type": "WebSite",
        "name": serwis.name,  //   "name": "Serwis RTV i AGD NaprawaPrzemyśl",
        "alternateName": "Serwis RTV i AGD w Przemyślu",
        "url": appUrls.home,
      },
      imageObject: {

        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",   // "@type": "Organization",
          "name": serwis.name,  //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-rtv-i-agd-naprawa-przemysl.webp",
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

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

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

        "@type": "Product",
        "@id": appUrls.naprawa_pralek + "#product",
        "name": "Naprawa pralek Przemyśl - " + shortName,
        "image": "https://naprawaprzemysl.pl/images/serwis-pralek-przemysl-naprawa-pralki.png",
        "description": "Profesjonalna naprawa pralek automatycznych w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "url": appUrls.naprawa_pralek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_pralek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      faqPage: {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Dlaczego pralka nie pobiera wody?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej uszkodzony jest elektrozawór lub zatkany filtr. Dokładnie diagnozuję usterkę i wymieniam potrzebne elementy."
            }
          },
          {
            "@type": "Question",
            "name": "Czy naprawiacie pralki wszystkich marek, np. Bosch, Electrolux, Samsung?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak – mam doświadczenie w serwisowaniu pralek wszystkich popularnych producentów i modeli."
            }
          },
          {
            "@type": "Question",
            "name": "Czy otrzymam gwarancję po naprawie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oczywiście – na wszystkie wykonane usługi udzielam gwarancji, a używane części pochodzą od renomowanych dostawców."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          // 
          "@type": "ImageObject",
          // "author": {
          //   "@type": "LocalBusiness",  // "@type": "Organization",
          //   "name": serwis.name,   // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
          //   address,
          //   "image": imageUrls.serwis,
          //   "telephone": serwis.phone.formatted,
          //   "priceRange": "$$",
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
            "item": appUrls.naprawa_pralek,
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

        "@type": "Organization",
        "name": "Naprawa Suszarek - " + serwis.name,  // "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

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

        "@type": "Product",
        "@id": appUrls.naprawa_suszarek + "#product",
        "name": "Naprawa suszarek Przemyśl - " + shortName,
        "image": ["https://naprawaprzemysl.pl/images/serwis-suszarek-przemysl-naprawa-suszarki.png"],
        "description": "Profesjonalna naprawa suszarek do ubrań w Przemyślu. Szybka diagnoza, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś.",
        "url": appUrls.naprawa_suszarek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_suszarek,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,  // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          // 
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,  // "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "$$",
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
            "item": appUrls.naprawa_suszarek
          }
        ]
      },
    },
  },
  naprawa_zmywarek: {
    metaTags: {
      title: "Naprawa zmywarek Przemyśl ✔️ Serwis RTV i AGD | Szybka diagnoza i gwarancja",
      canonical: appUrls.naprawa_zmywarek,
      description: "Profesjonalny serwis i naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
      siteName: `${shortName} - naprawa zmywarek`,
      keywords: "naprawa zmywarek, serwis zmywarek Przemyśl, naprawa zmywarki Przemyśl, naprawa zmywarki w Przemyślu, naprawa zmywarek Przemyśl, awaria zmywarki",
      appleMobileWebAppTitle: `${shortName} - naprawa zmywarek`,
    },
    schema: {
      organization: {

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

        "@type": "Service",
        "name": "Naprawa Zmywarek - " + serwis.name,  //   "name": "Naprawa Zmywarek",
        "description": "Profesjonalny serwis i naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
        "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
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
          //  "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
        },
      },
      product: {
        "@type": "Product",
        "@id": appUrls.naprawa_zmywarek + "#product",
        "name": "Naprawa zmywarek Przemyśl - " + shortName,  // "name": "Naprawa zmywarek Przemyśl",
        "image": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
        "description": "Profesjonalny serwis i naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
        "url": appUrls.naprawa_zmywarek,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_zmywarek,
          "priceCurrency": "PLN",
          "price": "130",
          "priceValidUntil": "2026-05-16",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      faqPage: {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Co może być przyczyną problemu, gdy zmywarka nie pobiera wody?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Najczęściej jest to uszkodzenie zaworu dopływu wody, zatkany filtr lub awaria czujnika. Serwis diagnozuje przyczynę usterki i wymienia uszkodzone elementy szybko i profesjonalnie."
            }
          },
          {
            "@type": "Question",
            "name": "Czy serwis naprawia zmywarki wszystkich marek, np. Bosch, Electrolux, Beko?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, posiadam duże doświadczenie w serwisowaniu zmywarek popularnych marek takich jak Bosch, Electrolux, Beko oraz innych. Gwarantuję fachową naprawę niezależnie od modelu urządzenia."
            }
          },
          {
            "@type": "Question",
            "name": "Czy seriws udziela gwarancji na naprawę zmywarki?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Na każdą wykonaną naprawę udzielana jest gwarancja. Używam oryginalnych lub wysokiej jakości zamienników części, dzięki czemu usługi są niezawodne i objęte gwarancją."
            }
          }]
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,   // "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          // 
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,   //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "$$",
          },
          "contentLocation": {
            "@type": "Place",
            "name": "Przemyśl"
          },
          "contentUrl": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
          "datePublished": "2025-05-16",
          "description": "Profesjonalna naprawa zmywarek w Przemyślu. Szybka pomoc, nowoczesne technologie, oryginalne części.",
          "name": "Naprawa Zmywarek - " + shortName,  //   "name": "Naprawa zmywarek w Przemyślu",
        },
        "mainEntity": {
          "@type": "Service",
          "name": "Naprawa zmywarek",
          "description": "Profesjonalny serwis i naprawa zmywarek w Przemyślu i okolicach. Szybka diagnostyka, naprawa z dojazdem, gwarancja. Bosch, Electrolux, Beko. ☎ 790 258 612",
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

        "@type": "ImageObject",
        "author": {
          "@type": "LocalBusiness",  // "@type": "Organization",
          "name": serwis.name,   //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
        },
        "contentLocation": {
          "@type": "Place",
          "name": "Przemyśl"
        },
        "contentUrl": "https://naprawaprzemysl.pl/images/serwis-zmywarek-przemysl-naprawa-zmywarki.webp",
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

        "@type": "Organization",
        "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

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

        "@type": "Product",
        "@id": appUrls.naprawa_ekspresow + "#product",
        "name": "Naprawa ekspresów Przemyśl - " + shortName,
        "image": ["https://naprawaprzemysl.pl/images/serwis-ekspresow-przemysl-naprawa-ekspresu.png"],
        "description": "Profesjonalna naprawa ekspresów do kawy w Przemyślu. Szybka pomoc, najnowsze technologie i oryginalne części. Skontaktuj się ze mną już dziś.",
        "url": appUrls.naprawa_ekspresow,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_ekspresow,
          "priceCurrency": "PLN",
          "price": "120",
          "priceValidUntil": "2026-05-16",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          // 
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,    //  "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "$$",
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
            "name": "Naprawa ekspresów",
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

        "@type": "Organization",
        "name": "Naprawa Telewizorów - " + serwis.name,    //   "name": ".Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
        "logo": imageUrls.logo,
        "url": appUrls.home,
        "address": address,
        "sameAs": [],
      },
      service: {

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
          "@id": "https://naprawaprzemysl.pl/#service",
          "name": shortName,  // "name": serwis.name,  // "name": "Naprawa Przemyśl",
          "image": [imageUrls.serwis],  // "image": imageUrls.logo,
          "telephone": serwis.phone.formatted,
          "priceRange": "$$",
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

        "@type": "Product",
        "@id": appUrls.naprawa_telewizorow + "#product",
        "name": "Naprawa telewizorów Przemyśl - " + shortName,
        "image": ["https://naprawaprzemysl.pl/images/serwis-telewizorow-przemysl-naprawa-telewizora.png"],
        "description": "Profesjonalna naprawa telewizorów w Przemyślu. Szybka pomoc, nowoczesne technologie i oryginalne części. Skontaktuj się już dziś!",
        "url": appUrls.naprawa_telewizorow,
        "offers": {
          "@type": "Offer",
          "url": appUrls.naprawa_telewizorow,
          "priceCurrency": "PLN",
          "price": "150",
          "priceValidUntil": "2026-05-16",
          "itemCondition": "https://schema.org/NewCondition",
          "availability": "https://schema.org/InStock",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingRate": {
              "@type": "MonetaryAmount",
              "value": "0",
              "currency": "PLN"
            },
            "shippingDestination": [
              {
                "@type": "DefinedRegion",
                "addressCountry": "PL",
                "addressRegion": ["Podkarpackie"],
                "name": "Przemyśl"
              }
            ],
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
              "transitTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 1,
                "unitCode": "DAY"
              },
            }

          },
          "hasMerchantReturnPolicy": {
            "@type": "MerchantReturnPolicy",
            "applicableCountry": "PL",
            "returnPolicyCountry": "PL",
            "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
            "merchantReturnDays": 14,
            "returnMethod": "https://schema.org/ReturnInStore",
            "returnFees": "https://schema.org/FreeReturn"
          },
          // "businessFunction": "http://purl.org/goodrelations/v1#Repair",
        },
      },
      place: {

        "@type": "Place",
        "geo": geo,
        "name": serwis.name,    //  "name": "Naprawa sprzętu RTV i AGD NaprawaPrzemyśl",
      },
      webpage: {

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
          // 
          "@type": "ImageObject",
          "author": {
            "@type": "LocalBusiness",  // "@type": "Organization",
            "name": serwis.name,    //   "name": "Serwis RTV i AGD NaprawaPrzemyśl"
            address,
            "image": imageUrls.serwis,
            "telephone": serwis.phone.formatted,
            "priceRange": "$$",
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