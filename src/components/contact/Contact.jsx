import Image from "next/image";
import Form from "./Form";
export default function () {
  return (
    <section
      className="sticky top-0 z-30 flex h-screen w-screen items-center justify-center bg-gray-950"
      id="contact"
    >
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
      <div className="z-20 flex w-full flex-col items-center justify-center font-mona-expanded">
        <h1 className="absolute top-16  text-5xl font-black uppercase text-white sm:top-20">
          Contact
        </h1>
        <Form />
      </div>
    </section>
  );
}
