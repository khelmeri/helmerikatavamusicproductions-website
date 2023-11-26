import Image from "next/image";
import PlayerWrapper from "../audioPlayer/PlayerWrapper";

export default function () {
  return (
    <div
      className="sticky top-0 z-10 mt-[100vh] flex h-screen w-screen items-center justify-center bg-black"
      id="portfolio"
    >
      <Image
        src="/portfolio-bg.jpg"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black to-transparent sm:from-20%" />
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" />
      <div className="z-10 flex items-center justify-center">
        <h1 className="font-mona-expanded absolute top-16 text-5xl font-black uppercase text-white sm:top-20">
          Portfolio
        </h1>
        <div className="flex flex-col items-center justify-center">
          <PlayerWrapper />
        </div>
      </div>
    </div>
  );
}
