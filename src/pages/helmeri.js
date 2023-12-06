import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";
import Head from "next/head";

export default function AdminPage() {
  return (
    <>
      <Head>
        <title key="title">Heavy Service Music Admin</title>
        <meta name="robots" content="noindex" />
      </Head>
      <NextStudio config={config} />
    </>
  );
}
