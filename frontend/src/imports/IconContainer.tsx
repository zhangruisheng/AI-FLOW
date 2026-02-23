function Frame() {
  return (
    <div className="h-[16px] relative w-0">
      <div className="absolute inset-[-7.03%_-1.13px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2.25 18.25"
        >
          <g id="Frame 2117130796">
            <path
              d="M1.125 6.125L1.125 1.125"
              id="Vector 102"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M1.125 17.125L1.125 12.125"
              id="Vector 101"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[16px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-0">
      <div className="absolute inset-[-7.03%_-1.13px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 2.25 18.25"
        >
          <g id="Frame 2117130797">
            <path
              d="M1.125 6.125L1.125 1.125"
              id="Vector 102"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
            <path
              d="M1.125 17.125L1.125 12.125"
              id="Vector 101"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div
        className="absolute flex h-0 items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[16px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "0",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <Frame />
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

export default function IconContainer() {
  return (
    <div className="backdrop-blur-[8px] bg-card content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] size-full text-foreground">
      <Component />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}
