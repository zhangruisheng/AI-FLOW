import svgPaths from "./svg-vdomieo79n";
import imgGeneratedVisuals from "figma:asset/9af5ac1f50087a6f8a64eb8de01852907537f857.png";

function Component6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Component 6">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeneratedVisuals} />
      </div>
    </div>
  );
}

function Krea7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Krea 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Krea 7">
          <path clipRule="evenodd" d={svgPaths.p9a6a300} fill="currentColor" />
          <path d={svgPaths.p3c3abd80} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.p22723b00} fill="currentColor" id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[20px]">
      <Krea7 />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[24.72px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Frame4 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap tracking-[-0.2146px]">
        <p className="leading-[22.499px] whitespace-pre">Image input</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] text-nowrap tracking-[-0.2146px]">
        <p className="leading-[22.499px] whitespace-pre">Image</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container />
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="backdrop-blur-[10px] backdrop-filter bg-white relative rounded-[20px] size-full" data-name="图片节点">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[2px] items-start p-[4px] relative size-full">
          <Component6 />
          <Frame14 />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-50% via-[#ffffff] w-px" data-name="Vertical Divider" />
        </div>
      </div>
    </div>
  );
}