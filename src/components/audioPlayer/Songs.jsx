export const Songs = [...Array(2).keys()].map((n) => ({
  title: "Biisi numero " + Number(n + 1),
  src: `/song-${Number(n + 1)}.mp3`,
}));
