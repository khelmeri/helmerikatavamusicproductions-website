import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import { MdPlayArrow, MdPause } from "react-icons/md";
import { useState } from "react";

import { Songs } from "@/components/audioPlayer/Songs";

export default function PlayerWrapper() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const initPlay = () => {
    setCurrentSongIndex(0);
  };
  const currentSong = Songs[currentSongIndex];
  return (
    <div className="mx-2 flex h-full flex-col rounded-xl bg-black/50 text-slate-300">
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
        <ul>
          {Songs.map((song, index) => (
            <li key={song.title} className="mb-1">
              <button
                onClick={() => setCurrentSongIndex(index)}
                className={`flex w-full items-center justify-between  rounded px-3 py-4 ${
                  currentSongIndex === index
                    ? "bg-black text-white"
                    : " duration-200 hover:bg-black/70 hover:text-white"
                }`}
              >
                <h2 className="font-semibold">Artisti - {song.title}</h2>
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

        <p className="mt-4 text-center text-sm text-white">
          These songs are only mixed by me, not recorded
        </p>
      </div>
    </div>
  );
}
