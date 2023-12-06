import { client } from "@/sanity/lib/client";

export async function loadData() {
  const query = `{
    "heroData":*[_type == "site"] {
      heroTitle,
      heroSubtitle,
      heroButtonText,
      "heroBgUrl": heroBg.asset->url,
    },
    "portfolioData":*[_type == "site"] {
      portfolioTitle,
      "portfolioBgUrl": portfolioBg.asset->url,
    },
    "infoData":*[_type == "site"] {
      infoTitle,
      infoContent,
      "infoBgUrl": infoBg.asset->url,
    },
    "contactData":*[_type == "site"] {
      contactTitle,
      contactSubtitle,
      "contactBgUrl": contactBg.asset->url,
    },
    "songs":*[_type == "song"] {
      songArtist,
      songTitle,
      "songUrl": portfolioSong.asset->url
    },
  }`;

  const { heroData, portfolioData, infoData, contactData, songs } =
    await client.fetch(query);

  return {
    heroData,
    portfolioData,
    infoData,
    contactData,
    songs,
  };
}
