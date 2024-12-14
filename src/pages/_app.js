import Head from "next/head";
import "@/styles/globals.css";
import localFont from "next/font/local";

const monaSans = localFont({
  src: [
    {
      path: "../fonts/MonaSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },

    {
      path: "../fonts/MonaSans-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MonaSans-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mona",
});

const monaSansExpanded = localFont({
  src: [
    {
      path: "../fonts/MonaSansExpanded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonaSansExpanded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/MonaSansExpanded-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/MonaSansExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/MonaSansExpanded-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/MonaSansExpanded-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mona-expanded",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title key="title">
          Helmeri Katava Music Productions - Mixing Services
        </title>
        <meta
          key="og:title"
          property="og:title"
          content="Helmeri Katava Music Productions"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:image:type"
          property="og:image:type"
          content="image/jpg"
        />
        <meta
          key="og:url"
          property="og:url"
          content={process.env.NEXT_PUBLIC_BASE_URL}
        />
        <meta
          key="twitter:card"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Professional mixing services. For your heavier music."
        />
        <meta
          key="og:site_name"
          property="og:site_name"
          content="Helmeri Katava Music Productions - Professional Mixing Services"
        />
        <meta
          key="twitter:image:alt"
          name="twitter:image:alt"
          content="Helmeri Katava Music Productions Logo"
        />
      </Head>
      <main
        className={`${monaSansExpanded.variable} ${monaSans.variable} font-mona`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
