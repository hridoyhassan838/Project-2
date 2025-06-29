import SeoHead from "../components/SeoHead";

export default function MainLayout({ children }) {
  return (
    <>
      <SeoHead
        title="One New World"
        description="Latest global news from One New World."
        keywords="news, global news, world news"
      />
      <header>{/* হেডার */}</header>
      <main>{children}</main>
      <footer>{/* ফুটার */}</footer>
    </>
  );
}