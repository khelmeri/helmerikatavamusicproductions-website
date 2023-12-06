import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Info from "@/components/info/Info";
import Contact from "@/components/contact/Contact";
import { loadData } from "./api/auth/siteData";

export default function Home({
  heroData,
  portfolioData,
  infoData,
  contactData,
  songs,
}) {
  return (
    <div className="relative">
      <Hero heroData={heroData} />
      <Portfolio portfolioData={portfolioData} songs={songs} />
      <Info infoData={infoData} />
      <Contact contactData={contactData} />
    </div>
  );
}

export async function getServerSideProps() {
  const { heroData, portfolioData, infoData, contactData, songs } =
    await loadData();

  return {
    props: {
      heroData,
      portfolioData,
      infoData,
      contactData,
      songs,
    },
  };
}
