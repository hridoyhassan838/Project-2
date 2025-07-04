import SeoHead from "../components/SeoHead";
import Header from "../components/Header";
import LiveNewsBar from "../components/LiveNewsBar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <SeoHead
        title="One New World - Latest Global News"
        description="Stay informed with the latest global headlines and insights."
        keywords="news, global, headlines"
      />
      <Header />
      <LiveNewsBar />
      <main
        className="max-w-7xl mx-auto w-full bg-white px-4"
        role="main"
        aria-label="Main content"
      >
        {/* Repeatable Post Block */}
        <section className="flex flex-col lg:flex-row items-start border-t-2 border-black pt-4">
          <article className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-black pb-2">
              Kennedy Names New Members of C.D.C. Vaccine Panel
            </h2>
            <p className="text-2xl text-black font-[Merriweather]">
              President Trump left the G7 summit in Canada after joining other
              leaders in issuing a joint statement calling for peace in the
              region.
            </p>
            <time className="block text-xs text-gray-500 py-2">5 MIN READ</time>
          </article>
          
          
          
          <div className="w-full lg:w-1/2 lg:pl-4">
  <Image
    src="/assets/images/1.webp"
    alt="Kennedy names new CDC members"
    width={979}
    height={979}
    sizes="(max-width: 1024px) 100vw, 50vw"
    className="rounded shadow-md"
    priority
  />
  <p className="text-right text-xs text-black py-2">
    From One New World
  </p>
</div>
          
          
          
        </section>
      </main>
      <Footer />
    </>
  );
}
