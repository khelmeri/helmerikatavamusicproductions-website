import Image from "next/image";

export default function () {
  return (
    <div className="sticky top-0 z-20 flex h-screen w-screen items-center justify-center bg-black">
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
      <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" />
      <div className="z-20 flex items-center justify-center">
        <h1 className="font-mona-expanded absolute top-16 text-5xl font-black uppercase text-white sm:top-20">
          Info
        </h1>
        <div className="font-mona-expanded mx-4 flex max-w-[420px] flex-col items-center justify-center text-2xl text-white sm:text-3xl">
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
    </div>
  );
}
