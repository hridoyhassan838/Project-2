// pages/_app.js
import "../styles/globals.css";
import "../lib/fontawesome/Fontawesome";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}