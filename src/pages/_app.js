import "../styles/globals.css";
import "../lib/fontawesome/Fontawesome";

import MainLayout from "../layouts/MainLayout";

export default function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}