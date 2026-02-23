import React from "react";
import { cn } from "./ui/utils";

// SVG paths from imports/svg-yvcw1riqtw.ts
const svgPaths = {
  p16ed3d80: "M6.28574 5.91029C6.28574 6.48627 5.81854 6.95343 5.24257 6.95343C4.6666 6.95343 4.19996 6.48627 4.19996 5.91029C4.19996 5.33433 4.6666 4.86713 5.24257 4.86713C5.81854 4.86713 6.2852 5.33376 6.28574 5.90917V5.91029Z",
  p20d5dc80: "M9.45476 7.86696C10.5162 7.86696 11.4926 8.81616 12 9.28584V11.467H2.39996C2.39996 11.467 3.17945 10.2277 3.99512 9.62082C4.8108 9.01398 5.74003 9.96078 6.76034 9.96078C7.78118 9.96078 8.39384 7.86696 9.45476 7.86696Z",
  p3ae1a8f0: "M10.2109 5.13411C9.97103 4.93421 9.97103 4.56579 10.2109 4.36589L11.9299 2.93341C12.2555 2.66202 12.75 2.8936 12.75 3.31752V6.18248C12.75 6.6064 12.2555 6.83798 11.9299 6.56659L10.2109 5.13411Z",
  pe3a2d00: "M10.8 2.31715H3.59996C2.52301 2.31715 1.64996 3.1902 1.64996 4.26715V10.2672C1.64996 11.3441 2.52301 12.2172 3.59996 12.2172H10.8C11.8769 12.2172 12.75 11.3441 12.75 10.2672V4.26715C12.75 3.1902 11.8769 2.31715 10.8 2.31715Z",
};

function ImageEditorIcon() {
  return (
    <div className="relative shrink-0 size-[14.4px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <path
          clipRule="evenodd"
          d={svgPaths.p16ed3d80}
          fill="currentColor"
          fillRule="evenodd"
        />
        <path
          d={svgPaths.pe3a2d00}
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d={svgPaths.p20d5dc80}
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
}

function VideoProductionIcon() {
  return (
    <div className="relative shrink-0 w-[12px] h-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9.5">
        <g>
          <rect
            height="8"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
            width="9"
            x="0.75"
            y="0.75"
          />
          <path
            d={svgPaths.p3ae1a8f0}
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

function SidebarItem({ icon, label, onClick }: SidebarItemProps) {
  return (
    <div 
      className="h-[32px] relative rounded-[30px] shrink-0 w-full hover:bg-muted/50 transition-colors cursor-pointer group"
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-start px-[10px] py-[4px] relative size-full">
          <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px] text-foreground">
            {icon}
          </div>
          <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px relative text-foreground text-[12px] font-medium">
            <p className="leading-normal">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center justify-start px-[8px] py-[4px] relative shrink-0 w-full">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-muted-foreground">
        <p className="leading-[17px]">{title}</p>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px relative shrink-0 w-full my-1">
      <div className="absolute inset-x-0 top-0 h-px bg-border opacity-50" />
    </div>
  );
}

export function SidebarList() {
  return (
    <div className="bg-card content-stretch flex flex-col gap-[4px] items-start p-[8px] relative rounded-[var(--radius)] w-full border border-border/50">
      <SectionHeader title="Editor" />
      
      <SidebarItem 
        icon={<ImageEditorIcon />} 
        label="图像编辑" 
      />
      
      <SidebarItem 
        icon={<VideoProductionIcon />} 
        label="视频制作" 
      />
      
      <Divider />
      
      <SectionHeader title="Output" />
      
      <SidebarItem 
        icon={<ImageEditorIcon />} 
        label="图像预览" 
      />
    </div>
  );
}
