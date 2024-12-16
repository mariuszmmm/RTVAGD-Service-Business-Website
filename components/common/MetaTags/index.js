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
  const { organization, breadcrumbList } = page.schema;

  const getAggregateRating = () => {
    return {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": ratingsTotal,
        "bestRating": "5",
        "worstRating": "1",
      }
    }
  };

  const getReviews = () => {
    if (!["/opinie/"].includes(path)) return null;

    const reviewsArray = reviews.map((review, index) => (
      {
        "@type": "Review",
        "@id": `https://naprawaprzemysl.pl/opinie#review${index + 1}`,
        "url": `https://naprawaprzemysl.pl/opinie#review${index + 1}`,
        "author": {
          "@type": "Person",
          "name": review.author_name,
        },
        "publisher": {
          "@type": "Organization",
          "name": "Google"
        },
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
        }
      }
    ))

    return { "review": reviewsArray }
  };

  const organizationSchema = {
    ...organization,
    ...getAggregateRating(),
    ...getReviews(),
  }

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

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbList)
        }}
      />
    </Head>
  );
};

export default MetaTags;