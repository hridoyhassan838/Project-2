import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // এই লাইনটা থাকা দরকার
import "../components/icons"; // এখানে তোমার icons.js

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}