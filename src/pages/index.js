import Hero from "@/components/hero/Hero";
import Portfolio from "@/components/portfolio/Portfolio";
import Info from "@/components/info/Info";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Portfolio />
      <Info />
      <Contact />
    </div>
  );
}
