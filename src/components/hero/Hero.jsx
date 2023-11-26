import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="fixed top-0 z-0 flex h-screen w-screen items-center justify-center bg-black"
      id="hero"
    >
      <h1 className="font-mona-expanded z-10 text-center text-6xl font-black uppercase text-white sm:text-7xl">
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
      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black/80 to-transparent" />
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" />
    </div>
  );
}
