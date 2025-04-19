import * as React from "react";
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeUp,
  MdVolumeOff,
} from "react-icons/md";
import { CgSpinner } from "react-icons/cg";
import IconButton from "./IconButton";
import AudioProgressBar from "./ProgressBar";
import VolumeInput from "./VolumeInput";

function formatDurationDisplay(duration) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":");

  return formatted;
}

export default function AudioPlayer({
  currentSong,
  songCount,
  songIndex,
  onNext,
  onPrev,
  initPlay,
}) {
  const audioRef = React.useRef(null);

  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState(0);
  const [currrentProgress, setCurrrentProgress] = React.useState(0);
  const [buffered, setBuffered] = React.useState(0);
  const [volume, setVolume] = React.useState(0.2);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currrentProgress);

  React.useEffect(() => {
    audioRef.current?.pause();

    const timeout = setTimeout(() => {
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [songIndex]);

  const handleNext = () => {
    onNext();
  };

  const handlePrev = () => {
    onPrev();
  };

  const togglePlayPause = () => {
    if (typeof currentSong === "undefined") {
      initPlay();
    }
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress = (e) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i,
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  const handleMuteUnmute = () => {
    if (!audioRef.current) return;

    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  };

  const handleVolumeChange = (volumeValue) => {
    if (!audioRef.current) return;
    audioRef.current.volume = volumeValue;
    setVolume(volumeValue);
  };

  return (
    <div className="relative rounded-t-xl bg-black/60 p-3 font-mona-expanded text-slate-400">
      {currentSong && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleNext}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onTimeUpdate={(e) => {
            setCurrrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        >
          <source type="audio/mpeg" src={currentSong.src} />
        </audio>
      )}

      <div className="flex flex-col items-center justify-center">
        <div className="text-center sm:my-2">
          <p className="text-lg font-semibold text-white sm:text-xl lg:text-2xl">
            {currentSong?.title ?? "Press play"}
          </p>
          <p className="text-sm sm:text-base">{currentSong?.artist ?? ""}</p>
        </div>
      </div>
      <div className="mt-4 grid items-center gap-2 sm:grid-cols-3 sm:gap-0">
        <span className="text-xs sm:block">
          {elapsedDisplay} / {durationDisplay}
        </span>
        <div className="z-10 flex cursor-pointer items-center gap-2 justify-self-center sm:gap-4">
          <IconButton
            onClick={handlePrev}
            disabled={songIndex === 0}
            aria-label="go to previous"
            intent="secondary"
            size="sm"
          >
            <MdSkipPrevious size={20} />
          </IconButton>
          <div className="relative z-20" onClick={togglePlayPause}>
            <IconButton aria-label={isPlaying ? "Pause" : "Play"} size="lg">
              {!isReady && currentSong ? (
                <CgSpinner size={20} className="animate-spin" />
              ) : isPlaying ? (
                <MdPause size={24} className="text-black" />
              ) : (
                <MdPlayArrow size={24} />
              )}
            </IconButton>
            {!isReady && (
              <div className="absolute left-2 top-[8px] animate-ping rounded-full bg-amber-600 p-4" />
            )}
          </div>
          <IconButton
            onClick={handleNext}
            disabled={songIndex === songCount - 1}
            aria-label="go to next"
            intent="secondary"
            size="sm"
          >
            <MdSkipNext size={20} />
          </IconButton>
        </div>
        <div className="hidden items-center gap-3 justify-self-end sm:flex">
          <IconButton
            intent="secondary"
            size="sm"
            onClick={handleMuteUnmute}
            aria-label={volume === 0 ? "unmute" : "mute"}
          >
            {volume === 0 ? (
              <MdVolumeOff size={20} />
            ) : (
              <MdVolumeUp size={20} />
            )}
          </IconButton>
          <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
        </div>
      </div>
      <span className="text-xs sm:hidden">
        {elapsedDisplay} / {durationDisplay}
      </span>
      <AudioProgressBar
        duration={duration}
        currentProgress={currrentProgress}
        buffered={buffered}
        onChange={(e) => {
          if (!audioRef.current) return;

          audioRef.current.currentTime = e.currentTarget.valueAsNumber;

          setCurrrentProgress(e.currentTarget.valueAsNumber);
        }}
      />
    </div>
  );
}
