import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

export default function () {
  return (
    <section
      className="sticky top-0 z-20 flex h-screen w-screen items-center justify-center bg-black"
      id="info"
    >
      <Image
        src="/info-bg.jpg"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />

      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black to-transparent sm:from-20%" />
      {/* <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" /> */}
      <div className="z-20 flex items-center justify-center">
        <h1 className="absolute top-16 font-mona-expanded text-5xl font-black uppercase text-white sm:top-20">
          Info
        </h1>
        <div className="mx-4 flex max-w-[420px] flex-col items-center justify-center font-mona-expanded text-2xl text-white sm:text-3xl">
          <p className="">
            Did you write a massive hit but don't have a drummer to record with?
            Or are you looking for a mixing engineer to bring your music to
            life?
          </p>
          <p className="mt-4">
            How about we discuss your visions and make your tracks sound like
            they've been Heavy Serviced. Feel free to ask me anything using the
            contact form below or send an email at ----
          </p>
        </div>
      </div>

      <Link
        href="#contact"
        className="absolute bottom-14 right-5 z-30 flex items-center justify-center rounded-full bg-neutral-700 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:right-10"
      >
        <FaChevronDown size={30} />
      </Link>
    </section>
  );
}
