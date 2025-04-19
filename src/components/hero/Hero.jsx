import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import PlayerWrapper from "../audioPlayer/PlayerWrapper";

export default function Hero({ heroData, portfolioData, songs }) {
  return (
    <section
      className=" flex h-screen w-screen items-center justify-center bg-black font-mona-expanded"
      id="home"
    >
      <div className="z-10 mb-20 mt-80 flex flex-col text-center sm:mt-20 ">
        <h1 className="text-3xl font-black uppercase text-white sm:text-7xl">
          {heroData[0].heroTitle}
        </h1>

        <p className="mt-5 text-2xl font-black uppercase text-white sm:text-5xl">
          {heroData[0].heroSubtitle}
        </p>

        {/* <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" /> */}
        <div className="z-10 flex items-center justify-center">
          <div className="mt-16 flex flex-col items-center justify-center">
            <PlayerWrapper songs={songs} />
          </div>
        </div>
      </div>
      <Image
        src={heroData[0].heroBgUrl}
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black/30 from-5% to-transparent" />
      {/* <Link
        href="#info"
        className="absolute bottom-20 left-1/2 z-10 flex w-[280px] -translate-x-1/2 transform items-center justify-center gap-4 rounded-full bg-neutral-700 py-2 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:w-fit sm:px-3 md:px-4"
      >
        <p className="text-sm font-semibold text-white sm:text-lg xl:text-2xl">
          Let's talk
        </p>

        <FaChevronDown size={20} />
      </Link> */}
    </section>
  );
}
