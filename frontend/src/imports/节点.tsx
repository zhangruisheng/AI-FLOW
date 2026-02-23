import svgPaths from "./svg-iojmckemak";
import imgGeneratedVisuals from "figma:asset/2d7160601086bc4a3294287ad45cd52a2430ea18.png";

function Component() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="上传">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="ä¸ä¼ ">
          <path d={svgPaths.p45b6000} fill="currentColor" />
          <path d={svgPaths.p3f4a3300} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-center justify-center left-1/2 top-[calc(50%+0.64px)] translate-x-[-50%] translate-y-[-50%]">
      <Component />
      <div className="flex flex-col font-['SF_Pro_Display:Regular',_'Noto_Sans_JP:Regular',_'Noto_Sans_SC:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[14px] text-center text-nowrap tracking-[-0.2146px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="[text-underline-position:from-font] decoration-solid leading-[22.499px] underline whitespace-pre">上传图片</p>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-[157.371px] min-w-[157.371px] overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Overlay+Shadow+OverlayBlur">
      <Frame18 />
    </div>
  );
}

function Component6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Component 6">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-[-5px] to-[rgba(255,255,255,0)] top-[calc(50%-0.36px)] translate-y-[-50%] via-50% via-[#ffffff] w-[2px]" data-name="Vertical Divider" />
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 bg-[rgba(0,0,0,0.02)] content-stretch flex flex-col grow items-start min-h-px min-w-px relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <Component6 />
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

function Component1() {
  return (
    <div className="absolute backdrop-blur-[10px] backdrop-filter bg-white box-border content-stretch flex flex-col gap-[2px] h-[280px] items-start left-0 p-[4px] rounded-[20px] top-0 w-[240px]" data-name="图片节点">
      <Component5 />
      <Frame14 />
    </div>
  );
}

function Component7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="Component 6">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGeneratedVisuals} />
      </div>
    </div>
  );
}

function Krea8() {
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

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[20px]">
      <Krea8 />
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow h-[24.72px] items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <Frame5 />
      <div className="flex flex-col font-['SF_Pro_Display:Semibold',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] text-nowrap tracking-[-0.2146px]">
        <p className="leading-[22.499px] whitespace-pre">Image input</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] text-nowrap tracking-[-0.2146px]">
        <p className="leading-[22.499px] whitespace-pre">Image</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container1 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute backdrop-blur-[10px] backdrop-filter bg-white box-border content-stretch flex flex-col gap-[2px] h-[280px] items-start left-[251px] p-[4px] rounded-[20px] top-0 w-[240px]" data-name="图片节点">
      <Component7 />
      <Frame17 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-50% via-[#ffffff] w-px" data-name="Vertical Divider" />
    </div>
  );
}

export default function Component3() {
  return (
    <div className="relative size-full" data-name="节点">
      <Component1 />
      <Component2 />
    </div>
  );
}