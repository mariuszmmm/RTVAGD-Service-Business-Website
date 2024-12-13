import Head from 'next/head';
import { formattedDate } from '../../../utils/formattedDate';

const MetaTags = ({ path, page, rating, ratingsTotal, reviews }) => {
  const {
    title,
    canonical,
    description,
    ogSiteName,
    ogImage,
    ogImageWidth,
    ogImageHeight,
    ogImageAlt,
    ogImageType,
    keywords,
    appleMobileWebAppTitle,
  } = page.metaTags;
  const { organization, breadcrumbList } = page.schema;

  const getAggregateRating = () => {
    return ["/", "/opinie/"].includes(path) ? {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": ratingsTotal,
        "bestRating": "5",
        "worstRating": "1"
      }
    } : null
  };

  const getReviews = () => {
    if (!["/opinie/"].includes(path)) return null;

    const reviewsArray = reviews.map((review) => (
      {
        "@type": "Review",
        "author": review.author_name,
        "datePublished": formattedDate(review.time),
        "reviewBody": review.text,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
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
      <meta property="og:site_name" content={ogSiteName} />
      <meta property="og:updated_time" content="2024-11-27T03:38:11+01:00" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content={ogImageWidth} />
      <meta property="og:image:height" content={ogImageHeight} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:type" content={ogImageType} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
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