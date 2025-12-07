import Image from "next/image";
import Link from "next/link";
import PlayerWrapper from "../audioPlayer/PlayerWrapper";
import { FaChevronDown } from "react-icons/fa";

export default function ({ portfolioData, songs }) {
  return (
    <section
      className="sticky top-0 z-10 mt-[100vh] flex h-screen w-screen items-center justify-center bg-black"
      id="portfolio"
    >
      <Image
        src={portfolioData[0].portfolioBgUrl}
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50"
        alt="hero"
      />
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black/80 from-10% to-transparent" />
      {/* <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" /> */}
      <div className="z-10 flex items-center justify-center">
        <h1 className="absolute top-16 font-mona-expanded text-5xl font-black uppercase text-white sm:top-20 2xl:text-7xl">
          {portfolioData[0].portfolioTitle}
        </h1>
        <div className="flex flex-col items-center justify-center">
          <PlayerWrapper songs={songs} />
        </div>
      </div>
      <Link
        href="#info"
        className="absolute bottom-[70px] right-5 z-30 flex items-center justify-center rounded-full bg-neutral-700 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:right-10"
      >
        <FaChevronDown size={30} />
      </Link>
    </section>
  );
}
