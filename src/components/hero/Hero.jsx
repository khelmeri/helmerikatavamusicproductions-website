import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center bg-black font-mona-expanded"
      id="home"
    >
      <div className="z-10 mb-20 flex flex-col text-center ">
        <h1 className="text-6xl font-black uppercase text-white sm:text-7xl">
          Heavy Service Music
        </h1>
        <p className="mt-5 text-sm font-[500] uppercase text-white">
          Recording / Production / Mixing
        </p>
      </div>
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
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black/40 to-transparent" />
      <Link
        href="#portfolio"
        className="absolute bottom-20 left-1/2 z-10 flex w-[280px] -translate-x-1/2 transform items-center justify-center gap-4 rounded-full bg-neutral-700 py-2 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:w-fit sm:px-3"
      >
        <p className="text-sm font-semibold text-white sm:text-lg">
          Do you want to sound like this?
        </p>
        <FaChevronDown size={20} />
      </Link>
    </section>
  );
}
