import Image from "next/image";
import Form from "./Form";
import { FaInstagram, FaFacebook, FaSoundcloud } from "react-icons/fa";

export default function ({ contactData }) {
  return (
    <section
      className="sticky top-0 z-20 flex h-screen w-screen items-center justify-center bg-black"
      id="info"
    >
      <Image
        src={contactData[0].contactBgUrl}
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness0 filter: grayscale(100%)"
        alt="hero"
      />

      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black to-transparent sm:from-20%" />
      <div className="z-20 flex w-full flex-col items-center justify-center font-mona-expanded">
        <h1 className="absolute top-16 text-3xl font-black uppercase text-white sm:top-20 sm:text-5xl 2xl:text-7xl">
          {contactData[0].contactTitle}
        </h1>
        <Form contactData={contactData[0]} />
      </div>
    </section>
  );
}
