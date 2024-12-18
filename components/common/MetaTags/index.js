import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';
import { getCurrentDateTimeISOWithOffset } from '../../../utils/formatDateToISOWithOffset';
import { useState } from 'react';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews }) => {
  const [ogTime, setOgTime] = useState(getCurrentDateTimeISOWithOffset());
  const {
    title,
    canonical,
    description,
    siteName,
    image,
    imageWidth,
    imageHeight,
    imageAlt,
    imageType,
    keywords,
    appleMobileWebAppTitle,
  } = page.metaTags;
  const { organization, product, place, webpage, website, imageObject, breadcrumbList } = page.schema;

  const getReviews = () => {
    const reviewsArray = reviews.map((review) => (
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
    ...(path === "/" ?
      { ...getReviews() }
      :
      {
        "review": {
          ...(product?.["review"]),
          "reviewRating": {
            ...(product?.["review"]?.["reviewRating"]),
            "ratingValue": rating?.toString(),
          }
        }
      }),
    "aggregateRating": {
      ...(product?.["aggregateRating"]),
      "ratingValue": rating?.toString(),
      "reviewCount": ratingsTotal?.toString(),
      ...(path === "/" && { "ratingCount": ratingsTotal?.toString() }),
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
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:image:type" content={imageType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="keywords" content={keywords} />
      <meta name="apple-mobile-web-app-title" content={appleMobileWebAppTitle} />
      <meta http-equiv="Content-Language" content="pl" />

      {(path === "/" || path === "/naprawa-pralek/" || path === "/naprawa-suszarek/" || path === "/naprawa-zmywarek/" || path === "/naprawa-ekspresow/" || path === "/naprawa-telewizorow/") && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema)
          }}
        />
      )}

      {path === "/" && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organization)
          }}
        />
      )}

      {path === "/" && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(place)
          }}
        />
      )}

      {path === "/" && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpage)
          }}
        />
      )}

      {path === "/" && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(website)
          }}
        />
      )}

      {path === "/" && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(imageObject)
          }}
        />
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