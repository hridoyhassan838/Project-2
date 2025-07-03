// components/SeoHead.js


import Head from 'next/head';

export default function SeoHead({
  title = "One New World - Global News",
  description = "Latest global news from One New World. Stay informed with world headlines and insights.",
  keywords = "news, global news, world news, politics, climate, lifestyle",
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <title>{title}</title>

      {/* SEO Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="One New World" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
