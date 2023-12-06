export const song = {
  name: "song",
  title: "Portfolio songs",
  type: "document",
  fields: [
    {
      name: "songArtist",
      title: "Song artist",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "songTitle",
      title: "Song title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "artistUrl",
      title: "Link to artists page",
      type: "string",
    },
    {
      name: "portfolioSong",
      title: "Song file",
      type: "file",
    },
  ],
};
