import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaMusic,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import PlayerWrapper from "../audioPlayer/PlayerWrapper";

export default function Hero({ heroData, portfolioData, songs }) {
  return (
    <section
      className="relative flex h-screen w-screen items-center justify-center bg-black font-mona-expanded"
      id="home"
    >
      <div className="z-10 mb-20  flex flex-col text-center sm:mt-20">
        <h1 className="text-2xl font-black uppercase text-white sm:text-7xl">
          {heroData[0].heroTitle}
        </h1>

        <p className="mt-5 text-base font-black uppercase text-white sm:text-5xl">
          {heroData[0].heroSubtitle}
        </p>

        {/* <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" /> */}
        <div className="z-10 flex items-center justify-center">
          <div className="mt-8 flex flex-col items-center justify-center sm:mt-16">
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
      <Link
        href="#home"
        className="fixed bottom-10 left-1 z-50 flex items-center justify-center gap-2 rounded-full bg-neutral-700/90 px-6 py-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:left-10"
      >
        <FaMusic size={20} />
        <p className="text-base font-semibold text-white sm:text-lg">
          Portfolio
        </p>
      </Link>
      <div className="fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center gap-2 sm:gap-4">
        <a
          href="https://instagram.com/khelmeri"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-neutral-700/90 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-neutral-700/90 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black"
        >
          <FaFacebook size={20} />
        </a>
      </div>
      <Link
        href="https://ig.me/m/khelmeri"
        className="fixed bottom-10 right-1 z-50 flex items-center justify-center gap-2 rounded-full bg-neutral-700/90 px-6 py-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:right-10"
      >
        <p className="text-base font-semibold text-white sm:text-lg">
          Let's talk
        </p>
        <FaInstagram size={20} />
      </Link>
    </section>
  );
}
