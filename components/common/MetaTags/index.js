import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { getCurrentDateTimeISOWithOffset } from '../../../utils/formatDateToISOWithOffset';
import { useState } from 'react';
import { appUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { localBusiness, siteNavigationElements } from '../../../utils/dataForMetaTags';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews }) => {
  const [ogTime, setOgTime] = useState(getCurrentDateTimeISOWithOffset());
  const {
    title,
    canonical,
    description,
    siteName,
    keywords,
    appleMobileWebAppTitle,
  } = page.metaTags;
  const {
    localBusiness,
    organization,
    service,
    product,
    faqPage,
    place,
    webpage,
    website,
    imageObject,
    breadcrumbList,
  } = page.schema;

  // const selectedReviews = reviews?.filter((review, index) => index < 2);
  const getReviews = (selectedReviewNumber) => {
    if (!reviews) return null;

    const selectedReviews = !!selectedReviewNumber ? [reviews[selectedReviewNumber - 1]] : reviews;
    const reviewsArray = selectedReviews.map((review) => (
      {
        "@type": "Review",
        "name": "Polecam serwis RTV AGD w Przemyślu",
        "author": {
          "@type": "Person",
          "name": review.author_name,
        },
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1",
        },
        "itemReviewed": {
          "@type": "Service",
          "name": "Naprawa sprzętu RTV i AGD",
          // "serviceType": "Naprawa sprzętu RTV i AGD",
          // "address": {
          //   "@type": "PostalAddress",
          //   "addressLocality": "Przemyśl",
          //   "addressCountry": "PL",
          // },

        },
      }
    ))

    return {
      "review": reviewsArray,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (rating || serwis.rating).toString(),
        "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      },

    }
  };

  const getReview = (reveiwFor) => {
    const rewiwes = serwis.reviews
    if (!rewiwes) return null;

    const reviewSelected = () => {
      switch (reveiwFor) {
        case "telewizor":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa telewizora"));
        case "ekspres":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa ekspresu"));
        case "pralka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa pralki"));
        case "suszarka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa suszarki"));
        case "zmywarka":
          return rewiwes.find((review) => review.reveiwFor.includes("naprawa zmywarki"));
        default:
          return rewiwes[5];
      }
    }

    const review = reveiwFor ? reviewSelected(reveiwFor) : rewiwes[5];

    const reviewsArray = [
      {
        "@type": "Review",
        "name": "Polecam serwis RTV AGD w Przemyślu",
        "author": {
          "@type": "Person",
          "name": review.author_name,
        },
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1",
        },
        "itemReviewed": {
          // "@type": "Service",
          "name": "Serwis RTV i AGD" + (reveiwFor ? ` - ${reveiwFor}` : ""),
          // "serviceType": "Naprawa sprzętu RTV i AGD",
          // "address": {
          //   "@type": "PostalAddress",
          //   "addressLocality": "Przemyśl",
          //   "addressCountry": "PL",
          // },

        },
      }
    ]

    return {
      "review": reviewsArray,
      // "aggregateRating": {
      //   "@type": "AggregateRating",
      //   "ratingValue": (rating || serwis.rating).toString(),
      //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      //   "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      //   "itemReviewed": {
      //     // "@type": "Service",
      //     "name": "Serwis RTV i AGD" + (reveiwFor ? ` - ${reveiwFor}` : ""),
      //   },
      // },

    }
  };

  const productSchema = {
    ...product,
    // ...(path === "/naprawa-telewizorow/" && getReview("naprawa telewizora")),
    // ...(path === "/naprawa-ekspresow/" && getReview("naprawa ekspresu")),
    // ...(path === "/naprawa-pralek/" && getReview("naprawa pralki")),
    // ...(path === "/naprawa-suszarek/" && getReview("naprawa suszarki")),
    // ...(path === "/naprawa-zmywarek/" && getReview("naprawa zmywarki")),
    // ...(path === "/" && getReview()),

    // ...(path === "/naprawa-telewizorow/" && getReviews()),
    // ...(path === "/naprawa-ekspresow/" && getReviews()),
    // ...(path === "/naprawa-pralek/" && getReviews()),
    // ...(path === "/naprawa-suszarek/" && getReviews()),
    // ...(path === "/naprawa-zmywarek/" && getReviews()),
    // ...(path === "/" && getReviews()),


    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": (rating || serwis.rating).toString(),
      "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      "bestRating": "5",
      "worstRating": "1",
      // "itemReviewed": {
      //   // "@type": "Service",
      //   "name": "Serwis RTV i AGD Przemyśl",
      // },
    },


    // "aggregateRating": {
    //   ...(product?.["aggregateRating"]),
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   // ...(path === "/" && { "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString() }),
    // }

    // test
  };

  const serviceSchema = {
    ...service,
    // "aggregateRating": {
    //   // ...(service?.["aggregateRating"]),
    //   "@type": "AggregateRating",
    //   "ratingValue": (rating || serwis.rating).toString(),
    //   "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
    //   // ...(path === "/" && { "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString() }),
    // }
  };

  const localBusinessSchema = {
    ...localBusiness,
    // ...getReviews(1),

  };

  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:updated_time" content={ogTime} />
      <meta property="og:image" content={`${appUrls.home}images/share_1.webp`} />
      <meta property="og:image:secure_url" content={`${appUrls.home}images/share_1.webp`} />
      <meta property="og:image:width" content="931" />
      <meta property="og:image:height" content="497" />
      <meta property="og:image:alt" content="Serwis RTV i AGD Przemyśl" />
      <meta property="og:image:type" content="image/webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${appUrls.home}images/share_1.webp`} />
      <meta name="keywords" content={keywords} />
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />


      {(path === "/naprawa-pralek/" || path === "/naprawa-zmywarek/") && (
        <>
          {/* <script type="application/ld+json"           // wyłączone 15.05.2025      // dodane 14.05.2025
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(service)
              }}
            /> */}
          {/* <script type="application/ld+json"    // wyłączone 16.05.2025  // dodane 15.05.2025    
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(webpage)
              }}
            /> */}

          {/* <script type="application/ld+json"   // dodane 16.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          /> */}


          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusiness)
            }}
          /> */}
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage, productSchema, faqPage
                  // breadcrumbList,  
                ]
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
        </>
      )}

      {(path === "/naprawa-suszarek/" || path === "/naprawa-ekspresow/" || path === "/naprawa-telewizorow/") && (
        <>
          {/* <script type="application/ld+json"           // wyłączone 15.05.2025      // dodane 14.05.2025
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(service)
              }}
            /> */}
          {/* <script type="application/ld+json"    // wyłączone 16.05.2025  // dodane 15.05.2025    
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(webpage)
              }}
            /> */}

          {/* <script type="application/ld+json"   // dodane 16.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          /> */}


          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusiness)
            }}
          /> */}
          <script type="application/ld+json"    // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  // breadcrumbList, 
                  productSchema]
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{ 
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
        </>
      )}


      {path === "/" && (
        <>
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(website)
            }}
          /> */}
          <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [webpage
                  // breadcrumbList, localBusinessSchema, productSchema
                ]
              })
            }}
          />
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 14.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organization)
            }}
          /> */}
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(place)
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 16.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(webpage)
            }}
          /> */}
          {/* <script type="application/ld+json"   // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          /> */}
          {/* <script type="application/ld+json"     // wyłączone 15.05.2025
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema)
            }}
          /> */}
          {/* <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbList)
            }}
          /> */}
        </>
      )}
      {/* {(path === "/o-mnie/" || path === "/opinie/" || path === "/kontakt/") && (
        <script type="application/ld+json"    // wyłączone 16.05.2025   // dodane 14.05.2025
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [breadcrumbList]
            })
          }}
        />
      )} */}
    </Head>
  );
};

export default MetaTags; 