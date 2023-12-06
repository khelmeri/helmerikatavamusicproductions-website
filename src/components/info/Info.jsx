import Image from "next/image";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/client";
import markdownStyles from "./markdown-styles.module.css";

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-16">
          <div className="relative mx-auto">
            <Image
              alt={value.alt || " "}
              loading="lazy"
              src={urlFor(value).url()}
              height={800}
              width={800}
              quality={100}
              className="bg-datablack mx-auto my-0 h-full w-full rounded-xl object-cover transition-opacity duration-300"
            />
          </div>
          <p className="mx-auto text-sm italic text-gray-300">
            {value.caption || ""}
          </p>
        </div>
      );
    },
  },
};

export default function ({ infoData }) {
  return (
    <section
      className="sticky top-0 z-20 flex h-screen w-screen items-center justify-center bg-black"
      id="info"
    >
      <Image
        src={infoData[0].infoBgUrl}
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
        <h1 className="absolute top-16 font-mona-expanded text-5xl font-black uppercase text-white sm:top-20 2xl:text-7xl">
          Info
        </h1>
        <div
          className={`mx-4 flex max-w-[420px] flex-col items-center justify-center font-mona-expanded ${markdownStyles.markdown}`}
        >
          <PortableText
            value={infoData[0].infoContent}
            components={ptComponents}
          />
        </div>
      </div>

      <Link
        href="#contact"
        className="absolute bottom-[70px] right-5 z-30 flex items-center justify-center rounded-full bg-neutral-700 p-3 text-white duration-200 hover:bg-amber-700 hover:text-black sm:bottom-10 sm:right-10"
      >
        <FaChevronDown size={30} />
      </Link>
    </section>
  );
}
