import Image from "next/image";
export default function () {
  return (
    <div className="sticky top-0 z-30 flex h-screen w-screen items-center justify-center bg-gray-950">
      <Image
        src="/contact-bg.jpg"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="hero"
      />

      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black to-transparent sm:from-20%" />
      <div className="z-20 flex items-center justify-center">
        <h1 className="font-mona-expanded absolute top-16 text-5xl font-black uppercase text-white sm:top-20">
          Contact Me
        </h1>
        <div className="font-mona-expanded mx-4 flex max-w-[420px] flex-col items-center justify-center text-2xl text-white sm:text-3xl">
          <p className="">Formi ja linkit/somet tulleepi sitte tähä</p>
        </div>
      </div>
    </div>
  );
}
