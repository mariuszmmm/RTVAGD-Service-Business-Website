import { Helmet } from "react-helmet-async";

export const HemletForReviews = () => (
  <>
    <Helmet>
      <title>Opinie klientów | Serwis RTV AGD w Przemyślu</title>
      <meta
        name="description"
        content="Przeczytaj opinie moich zadowolonych klientów o moim serwisie pralek, zmywarek, ekspresów do kawy oraz telewizorów w Przemyślu."
      />
      <meta
        name="keywords"
        content="opinie, recenzje, serwis, RTV, AGD, Przemyśl, pralki, zmywarki, ekspresy do kawy, telewizory"
      />
      <link rel="canonical" href="https://naprawaprzemysl.pl/opinie" />
      <meta
        property="og:title"
        content="Opinie klientów | Serwis RTV AGD w Przemyślu"
      />
      <meta
        property="og:description"
        content="Sprawdź opinie naszych klientów na temat serwisu RTV i AGD w Przemyślu."
      />
      <meta property="og:url" content="https://naprawaprzemysl.pl/opinie" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Serwis RTV i AGD",
          "alternateName": "Naprawa pralek i sprzętu RTV - naprawa ekspresów do kawy, naprawa telewizorów, naprawa zmywarki, serwis agd,",
          "@id": "https://naprawaprzemysl.pl",
          "url": "https://naprawaprzemysl.pl",
          "telephone": "+48 790 258 612",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Generała Józefa Sowińskiego 2",
            "addressLocality": "Przemyśl",
            "postalCode": "37-700",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 49.782778,
            "longitude": 22.776028
          },
          "openingHoursSpecification": [
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
          ],
          "sameAs": [
            "https://www.facebook.com/profile.php?id=100063811592941"
          ],
          "logo": "https://naprawaprzemysl.pl/static/media/serwis.1b7b2504558771c986cc.webp",
          "description": "Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa.",
          "offers": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Naprawa pralek"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "100",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "100",
                "priceCurrency": "PLN",
                "priceType": "Starting from",
                "priceRange": "100-*"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Naprawa zmywarek"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "100",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "100",
                "priceCurrency": "PLN",
                "priceType": "Starting from",
                "priceRange": "100-*"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Naprawa ekspresów do kawy"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "120",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "120",
                "priceCurrency": "PLN",
                "priceType": "Starting from",
                "priceRange": "120-*"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "serviceType": "Naprawa telewizorów"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Przemyśl"
              },
              "priceCurrency": "PLN",
              "price": "150",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "150",
                "priceCurrency": "PLN",
                "priceType": "Starting from",
                "priceRange": "150-*"
              }
            }
          ],
          "paymentAccepted": [
            "Cash"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.6",
            "reviewCount": "47",
            "bestRating": "5",
            "worstRating": "1"
          }
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona Główna",
              "item": "https://naprawaprzemysl.pl"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Opinie",
              "item": "https://naprawaprzemysl.pl/opinie"
            }
          ]
        })}
      </script>
    </Helmet>
  </>
);