import svgPaths from "./svg-b30tbogavy";
import imgGeneratedVisuals from "figma:asset/05bd0e17ef904ff5fe2eb9ea076cc4e0db7973b9.png";

function OverlayShadowOverlayBlur() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] items-start justify-center min-h-[157.3714599609375px] min-w-[157.3714599609375px] overflow-clip relative rounded-[16px] w-full" data-name="Overlay+Shadow+OverlayBlur">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals} />
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 5">
      <Component3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 13">
          <path d={svgPaths.p7af9000} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-black tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Use</p>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 13">
          <path d={svgPaths.p27930380} fill="currentColor" />
          <path d={svgPaths.p18a5d080} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(0,0,0,0.04)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-black tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Save</p>
          </div>
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Krea() {
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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <Krea />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <Frame2 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Preview</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative size-full">
          <Container />
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px p-[4px] relative rounded-[20px] w-[240px]" data-name="图片节点">
      <Component2 />
      <Frame3 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Frame6 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="结果">
      <Component1 />
    </div>
  );
}