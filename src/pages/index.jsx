import SeoHead from "../components/seo-head/SeoHead";

import Header from "../components/header/Header";

import LiveNewsBar from "../components/live-news-bar/LiveNewsBar";

import MainContent from "../components/main-content/MainContent";
import PostBlock from "../components/main-content/PostBlock";

import Footer from "../components/footer/Footer";


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
          
          
          <MainContent>
  <PostBlock
    title="Kennedy Names New Members of C.D.C. Vaccine Panel"
    description="President Trump left the G7 summit in Canada after joining other leaders in issuing a joint calling for peace in the region."
    readTime="5 MIN READ"
    imageSrc="/assets/images/1.webp"
    imageAlt="Kennedy names new CDC members"
    imageWidth={979}
    imageHeight={979}
    imageSizes="(max-width: 1024px) 100vw, 50vw"
  />            
</MainContent>
          
              
      <Footer />
          
          
    </>
  );
}