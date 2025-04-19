import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { useState } from "react";

export default function PlayerWrapper({ songs }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const initPlay = () => {
    setCurrentSongIndex(0);
  };

  const Songs = songs.map((n) => ({
    artist: n.songArtist,
    title: n.songTitle,
    src: n.songUrl,
  }));

  const currentSong = Songs[currentSongIndex];
  return (
    <div className="mx-2 flex h-full flex-col rounded-xl bg-black/40 text-slate-300">
      <div className="mt-auto">
        <AudioPlayer
          key={currentSongIndex}
          currentSong={currentSong}
          songCount={Songs.length}
          songIndex={currentSongIndex}
          initPlay={initPlay}
          onNext={() => setCurrentSongIndex((i) => i + 1)}
          onPrev={() => setCurrentSongIndex((i) => i - 1)}
        />
      </div>
      <div className="container mx-auto flex-1 px-6 py-8">
        <div className="max-h-64 overflow-y-auto">
          <ul>
            {Songs.map((song, index) => (
              <li key={song.title} className="mb-1">
                <button
                  onClick={() => setCurrentSongIndex(index)}
                  className={`flex w-full items-center justify-between rounded px-3 py-2 md:text-sm ${
                    currentSongIndex === index
                      ? "bg-black text-white"
                      : "duration-200 hover:bg-black/70 hover:text-white"
                  }`}
                >
                  <h3 className="font-semibold ">
                    {song.artist} - {song.title}
                  </h3>
                  <span>
                    {index === currentSongIndex ? (
                      <MdPause size={20} />
                    ) : (
                      <MdPlayArrow size={20} />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-center text-sm text-white">
          These songs are only mixed by me, not recorded
        </p>
      </div>
    </div>
  );
}
