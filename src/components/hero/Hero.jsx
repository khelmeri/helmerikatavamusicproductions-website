import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center bg-black"
      id="home"
    >
      <h1 className="z-10 mb-20 text-center font-mona-expanded text-6xl font-black uppercase text-white sm:text-7xl">
        Heavy Service Music
      </h1>
      <Image
        src="/hero-bg.avif"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black/60 to-transparent" />

      <Link
        href="#portfolio"
        className="absolute bottom-5 right-5 z-10 flex items-center justify-center rounded-full bg-neutral-700 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:right-10"
      >
        <FaChevronDown size={30} />
      </Link>
    </section>
  );
}
