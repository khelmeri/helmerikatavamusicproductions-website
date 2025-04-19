import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (containerRef.current && isMobile) {
      const slideWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: slideWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide, isMobile]);

  const handleScroll = () => {
    if (containerRef.current) {
      // Clear the previous timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Set a new timeout to update the slide after scrolling stops
      scrollTimeout.current = setTimeout(() => {
        const slideWidth = containerRef.current.offsetWidth;
        const scrollPosition = containerRef.current.scrollLeft;
        const newSlide = Math.round(scrollPosition / slideWidth);
        if (newSlide !== currentSlide) {
          setCurrentSlide(newSlide);
        }
      }, 50);
    }
  };

  const packages = [
    {
      title: "Basic Mix",
      description: "Perfect for demos and pre-production",
      price: "€150",
      features: [
        "Basic leveling and panning",
        "Simple EQ and compression",
        "Basic reverb and delay",
        "One revision included",
      ],
    },
    {
      title: "Professional Mix",
      description: "Ideal for serious releases",
      price: "€250",
      isPopular: true,
      features: [
        "Advanced mixing techniques",
        "Detailed EQ and compression",
        "Creative effects and automation",
        "Two revisions included",
      ],
    },
    {
      title: "Premium Mix",
      description: "For the most demanding projects",
      price: "€350",
      features: [
        "Full production mixing",
        "Advanced sound design",
        "Stem mixing available",
        "Unlimited revisions",
      ],
    },
  ];

  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center bg-black"
      id="services"
    >
      <Image
        src="/hero-bg.avif"
        sizes=""
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0 brightness-50 grayscale"
        alt="services background"
      />
      <div className="absolute top-0 z-0 h-full w-full bg-gradient-to-b from-black to-transparent sm:from-20%" />

      <div className="relative z-20 w-full">
        <h1 className="mb-16 text-center text-4xl font-black uppercase text-white sm:text-5xl 2xl:text-7xl">
          Services
        </h1>

        {isMobile ? (
          <div className="relative px-6">
            <div
              ref={containerRef}
              className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto"
              style={{
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                scrollBehavior: "smooth",
              }}
              onScroll={handleScroll}
            >
              {packages.map((pkg, index) => (
                <div
                  key={pkg.title}
                  className="relative min-w-[calc(100%-1.5rem)] flex-shrink-0 snap-center pt-6"
                  style={{
                    scrollSnapAlign: "center",
                  }}
                >
                  <div
                    className={`relative mx-auto max-w-sm rounded-3xl bg-black p-8 ${
                      pkg.isPopular ? "border border-amber-500" : ""
                    }`}
                  >
                    {pkg.isPopular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform">
                        <span className="inline-block rounded-full bg-amber-500 px-6 py-1.5 text-base font-semibold text-black">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <h2 className="mb-2 text-3xl font-bold text-amber-500">
                      {pkg.title}
                    </h2>
                    <p className="mb-6 text-lg text-gray-400">
                      {pkg.description}
                    </p>
                    <ul className="mb-8 space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center text-lg text-gray-300"
                        >
                          <span className="mr-3 text-amber-500">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mb-8">
                      <span className="text-5xl font-bold text-white">
                        {pkg.price}
                      </span>
                      <span className="text-xl text-gray-400"> / song</span>
                    </div>
                    <Link
                      href="#contact"
                      className="block w-full rounded-full bg-amber-500 px-6 py-4 text-center text-xl font-semibold text-black transition-colors hover:bg-amber-600"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-center space-x-3">
              {packages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentSlide ? "bg-amber-500" : "bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid gap-8 sm:grid-cols-3 lg:gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.title}
                  className={`relative rounded-lg bg-black/80 p-8 backdrop-blur-sm ${
                    pkg.isPopular
                      ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-black"
                      : ""
                  }`}
                >
                  {pkg.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                      <span className="inline-block rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-black">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h2 className="mb-4 text-2xl font-bold text-amber-600">
                    {pkg.title}
                  </h2>
                  <p className="mb-6 text-gray-300">{pkg.description}</p>
                  <ul className="mb-8 space-y-4 text-gray-300">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-3 text-amber-600">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-gray-400"> / song</span>
                  </div>
                  <Link
                    href="#contact"
                    className={`block w-full rounded-full px-6 py-4 text-center font-semibold transition-colors ${
                      pkg.isPopular
                        ? "bg-amber-500 text-black hover:bg-amber-600"
                        : "bg-amber-600 text-black hover:bg-amber-700"
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
