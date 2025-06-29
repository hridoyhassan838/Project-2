import Head from 'next/head';

export default function SeoHead({ title }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <title>{title}</title>

      {/* SEO Meta Tags */}
      <meta
        name="description"
        content="Latest global news from One New World. Stay informed with world headlines and insights."
      />
      <meta
        name="keywords"
        content="news, global news, world news, politics, climate, lifestyle"
      />
      <meta name="author" content="One New World" />
      <meta name="robots" content="index, follow" />

      {/* Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      {/* Custom CSS */}
      <link rel="stylesheet" href="/assets/css/style.css" />
    </Head>
  );
}