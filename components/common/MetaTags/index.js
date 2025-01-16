import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { getCurrentDateTimeISOWithOffset } from '../../../utils/formatDateToISOWithOffset';
import { useState } from 'react';
import { appUrls } from '../../../utils/urls';
import { serwis } from '../../../utils/serwis';
import { localBusiness } from '../../../utils/dataForMetaTags';

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
    organization,
    product,
    place,
    webpage,
    website,
    imageObject,
    breadcrumbList
  } = page.schema;

  const selectedReviews = reviews?.filter((review, index) => index < 2);

  const getReviews = () => {
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
        },
      }
    ))

    return { "review": reviewsArray }
  };

  const productSchema = {
    ...product,
    ...(path === "/"
      ?
      { ...getReviews() }
      :
      {
        "review": {
          ...(product?.["review"]),
          "reviewRating": {
            ...(product?.["review"]?.["reviewRating"]),
            "ratingValue": (rating || serwis.rating)?.toString(),
          },
        }
      }
    ),
    "aggregateRating": {
      ...(product?.["aggregateRating"]),
      "ratingValue": (rating || serwis.rating).toString(),
      "reviewCount": (ratingsTotal || serwis.ratingsTotal).toString(),
      ...(path === "/" && { "ratingCount": (ratingsTotal || serwis.ratingsTotal).toString() }),
    }
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
      <meta property="og:image" content={`${appUrls.home}share.png`} />
      <meta property="og:image:secure_url" content={`${appUrls.home}share.png`} />
      <meta property="og:image:width" content="931" />
      <meta property="og:image:height" content="497" />
      <meta property="og:image:alt" content="Serwis RTV i AGD" />
      <meta property="og:image:type" content="image/png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${appUrls.home}share.png`} />
      <meta name="keywords" content={keywords} />
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />

      {(path === "/naprawa-pralek/" || path === "/naprawa-suszarek/" || path === "/naprawa-zmywarek/" || path === "/naprawa-ekspresow/" || path === "/naprawa-telewizorow/") && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(localBusiness)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          />
        </>
      )}

      {path === "/" && (
        <>
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(website)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(organization)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(place)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(webpage)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(imageObject)
            }}
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(productSchema)
            }}
          />
        </>
      )}

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList)
        }}
      />
    </Head>
  );
};

export default MetaTags; 