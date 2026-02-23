import svgPaths from "./svg-f5q9jfisuy";

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px] w-full">
        <p className="css-4hzbpn leading-[1.5]">turn this photo into a character figure, An anime-style image of a female character standing on a display platform, with the background being an exhibition or event venue. Keep the character pose on a transparent display platform. Background: a blurred exhibition environment with other visitors. Style, anime style, 3D rendering effect</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
      <TextContainer />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Component 1">
          <path clipRule="evenodd" d={svgPaths.p31d6600} fill="currentColor" />
          <path clipRule="evenodd" d={svgPaths.p2db0400} fill="currentColor" />
          <path clipRule="evenodd" d={svgPaths.p3ecb1200} fill="currentColor" />
          <path clipRule="evenodd" d={svgPaths.p2af07280} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component />
    </div>
  );
}

export default function Component1() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-col gap-[12px] items-end justify-center p-[12px] relative rounded-[16px] size-full" data-name="Component 5">
      <Component2 />
      <Component3 />
    </div>
  );
}