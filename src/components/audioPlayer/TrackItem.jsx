import { MdPlayArrow, MdPause } from "react-icons/md";
import cn from "classnames";

function TrackItem({ title, trackNumberLabel, selected, onClick }) {
  return (
    <li
      onClick={onClick}
      className={cn(
        "space-evenly mb-1 flex w-full cursor-pointer items-center rounded px-3 py-3",
        { "bg-cyan-600 text-white": selected },
        { "hover:bg-cyan-600 hover:text-white": !selected },
      )}
    >
      <span className="inline-block text-sm">{trackNumberLabel}</span>
      <h2 className="flex-1 text-center text-base">{title}</h2>
      <span>
        {selected ? <MdPause size={20} /> : <MdPlayArrow size={20} />}
      </span>
    </li>
  );
}

export default TrackItem;
