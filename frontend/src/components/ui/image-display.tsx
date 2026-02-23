import React from 'react';

interface ImageDisplayProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageDisplay({
  src,
  alt,
  width = 76,
  height = 52,
  className = ''
}: ImageDisplayProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-cover ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`
      }}
    />
  );
}

export function ThumbnailImage({
  src,
  alt,
  className = ''
}: Omit<ImageDisplayProps, 'width' | 'height'>) {
  return (
    <div className="w-[76px] h-[52px] rounded-[8px] overflow-hidden bg-white border border-border/20">
      <ImageDisplay
        src={src}
        alt={alt}
        width={76}
        height={52}
        className={className}
      />
    </div>
  );
}
