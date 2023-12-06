import Image from "next/image";
import Form from "./Form";
export default function ({ contactData }) {
  return (
    <section
      className="sticky top-0 z-30 flex h-screen w-screen items-center justify-center bg-gray-950"
      id="contact"
    >
      <Image
        src={contactData[0].contactBgUrl}
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
        <h1 className="absolute top-16  text-5xl font-black uppercase text-white sm:top-20 2xl:text-7xl">
          {contactData[0].contactTitle}
        </h1>
        <Form contactData={contactData[0]} />
      </div>
    </section>
  );
}
