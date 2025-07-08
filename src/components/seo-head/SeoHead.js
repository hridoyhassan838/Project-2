import Head from "next/head";

export default function SeoHead({
  title = "One New World - Global News",
  description = "Latest global news from One New World. Stay informed with world headlines and insights.",
  keywords = "news, global news, world news, politics, climate, lifestyle",
  url = "https://project-2-five-olive.vercel.app",
  image = "https://www.onenewworld.com/assets/images/seo-banner.jpg", // Share Image
  type = "website",
  locale = "en_US",
  twitterHandle = "@onenewworld", // Edit this
}) {
  return (
    <Head>
      {/* Basic Meta */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="One New World" />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="One New World" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />

      {/* Favicon & Theme */}
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}