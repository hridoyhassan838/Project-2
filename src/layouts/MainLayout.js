import Header from "../components/header/Header";
import LiveNewsBar from "../components/live-news-bar/LiveNewsBar";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children, showFooter = true }) {
  return (
    <>
      <Header />
      <LiveNewsBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}