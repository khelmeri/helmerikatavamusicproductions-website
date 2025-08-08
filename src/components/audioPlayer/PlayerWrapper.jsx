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
    artistUrl: n.artistUrl,
  }));

  const currentSong = Songs[currentSongIndex];
  return (
    <div className="mx-2 flex h-full max-w-md flex-col rounded-xl bg-black/40 text-slate-300">
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
      <div className="container mx-auto flex flex-1 flex-col px-6 py-8">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <ul>
            {Songs.map((song, index) => (
              <li key={song.title} className="mb-1">
                <button
                  onClick={() => setCurrentSongIndex(index)}
                  className={`flex w-full items-center justify-between rounded px-3 py-2 text-sm md:text-sm ${
                    currentSongIndex === index
                      ? "bg-black text-white"
                      : "duration-200 hover:bg-black/70 hover:text-white"
                  }`}
                >
                  <h3 className="text-left text-sm font-semibold">
                    {song.artist} - {song.title}
                  </h3>
                  <span className="flex-shrink-0">
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

        {currentSong && (
          <div className="mt-2 flex-shrink-0 rounded border border-white/5 bg-black/20 px-2 py-2">
            <p className="text-start text-[8px] text-gray-400">
              <span className="font-light">{currentSong.artistUrl}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
