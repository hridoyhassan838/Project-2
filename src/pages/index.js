import SeoHead from "../components/seo-head/SeoHead";

import MainLayout from "../layouts/MainLayout";

import MainContent from "../components/main-content/MainContent";
import PostBlock from "../components/main-content/PostBlock";

function HomePage() {
  return (
    <>
      <SeoHead />

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
    </>
  );
}

// Layout apply
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// export default
export default HomePage;