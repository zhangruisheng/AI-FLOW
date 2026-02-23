import React from "react";
import { iconPaths, IconName } from "./paths";

interface IconProps {
  name: IconName;
  size?: number | string;
  className?: string;
  strokeWidth?: number | string;
  fill?: string;
  stroke?: string;
  viewBox?: string;
}

export function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 1.5,
  fill = "none",
  stroke = "currentColor",
  viewBox,
}: IconProps) {
  const path = iconPaths[name];
  
  if (!path) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  const defaultViewBox = (() => {
    switch (name) {
      case "play":
        return "0 0 12 12";
      case "plus":
        return "0 0 16 19";
      case "chevronDown":
        return "0 0 20 20";
      case "chevronUp":
        return "0 0 20 20";
      case "settings":
        return "0 0 16 16";
      case "cameraControl":
        return "0 0 16 16";
      case "imageStyle":
        return "0 0 16 16";
      case "wand":
        return "0 0 16 16";
      case "userCircle":
        return "0 0 16 16";
      case "tshirt":
        return "0 0 16 16";
      case "pose":
        return "0 0 16 16";
      case "faceExtract":
        return "0 0 16 16";
      case "refresh":
        return "0 0 16 16";
      case "delete":
        return "0 0 16 16";
      case "star":
        return "0 0 3.83436 3.83774";
      case "starSmall":
        return "0 0 2.89289 2.89545";
      case "user":
        return "0 0 24 24";
      case "sun":
        return "0 0 24 24";
      case "folder":
        return "0 0 24 24";
      case "sparkle":
        return "0 0 16 16";
      case "brush":
        return "0 0 24 24";
      case "pen":
        return "0 0 24 24";
      case "moreHorizontal":
        return "0 0 12 12";
      case "search":
        return "0 0 24 24";
      default:
        return "0 0 24 24";
    }
  })();

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={viewBox || defaultViewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={path}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface PlayButtonProps {
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  label?: string;
}

export function PlayButton({
  onClick,
  className = "",
  label = "Play",
}: PlayButtonProps) {
  return (
    <div
      className={`group content-stretch flex items-center justify-center p-2.5 relative rounded-full shrink-0 cursor-pointer transition-all duration-200 w-[24px] h-[24px] hover:w-[60px] bg-card hover:bg-primary hover:gap-[4px] border border-border hover:border-primary nodrag ${className}`}
      onClick={onClick}
    >
      <div className="relative shrink-0 size-[12px]">
        <svg
          className="block size-full"
          fill="none"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={iconPaths.play}
            stroke="currentColor"
            strokeWidth={1.5}
            className="text-foreground group-hover:text-primary-foreground"
          />
        </svg>
      </div>
      <span className="hidden group-hover:block text-primary-foreground dark:text-white text-[12px] font-bold whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

export default Icon;
