import React from "react";
import cn from "classnames";

const colorMap = {
  primary: "bg-amber-700 text-black",
  secondary: "bg-black text-white",
};

const sizeMap = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

export default function IconButton({
  intent = "primary",
  size = "md",
  className,
  ...props
}) {
  const colorClass = colorMap[intent];
  const sizeClass = sizeMap[size];
  const classes = cn(
    "rounded-full flex items-center justify-center ring-offset-slate-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 disabled:opacity-50",
    colorClass,
    sizeClass,
    className,
  );
  return <button className={classes} {...props} />;
}
