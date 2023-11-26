export default function AudioProgressBar(props) {
  const { duration, currentProgress, buffered, ...rest } = props;

  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
  };

  return (
    <div className="group absolute -bottom-1 left-0 right-0 z-20 h-1">
      <input
        type="range"
        name="progress"
        className={`progress-bar absolute inset-0 m-0 h-full w-full cursor-pointer appearance-none bg-gray-700 accent-amber-600 transition-all before:absolute before:inset-0 before:h-full before:w-full before:origin-left before:bg-amber-600 after:absolute after:h-full after:w-full after:bg-amber-600/50 hover:accent-amber-600 group-hover:h-2`}
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  );
}
