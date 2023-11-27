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
        <h1 className="absolute top-16 font-mona-expanded text-5xl font-black uppercase text-white sm:top-20">
          Contact
        </h1>
        <div className="mx-4 flex max-w-[420px] flex-col items-center justify-center font-mona-expanded text-2xl text-white sm:text-3xl">
          <p className="">Formi ja linkit/somet tulleepi sitte tähä</p>
        </div>
      </div>
    </div>
  );
}
