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
      className="sticky z-20 flex h-screen w-screen items-center justify-center bg-black"
      id="portfolio"
    >
      <Image
        src={infoData[0].infoBgUrl}
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-25 grayscale"
        alt="hero"
      />

      <div className="absolute top-0 z-0 h-screen w-screen bg-gradient-to-b from-black to-transparent sm:from-20%" />
      {/* <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20 brightness-100 contrast-150" /> */}
      <div className="z-20 flex items-center justify-center">
        <h1 className="absolute top-10 font-mona-expanded text-3xl font-black uppercase text-white sm:top-20 sm:text-5xl 2xl:text-7xl">
          Info
        </h1>
        <div className="mt-28 grid gap-x-12 px-4 sm:mt-16 sm:grid-cols-2 sm:px-0">
          <div
            className={`mx-4 mt-2 flex max-w-[420px] flex-col font-mona-expanded sm:mt-12 ${markdownStyles.markdown}`}
          >
            <PortableText
              value={infoData[0].infoContent}
              components={ptComponents}
            />
          </div>
          <div>
            <div className="flex justify-center py-8 sm:py-16">
              <Image
                src="/profiilikuva.jpeg"
                alt="Description of image"
                width={300}
                height={300}
                className="pointer-events-none w-3/4 rounded-3xl shadow-md sm:w-5/6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
