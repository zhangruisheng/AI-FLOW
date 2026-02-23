import svgPaths from "./svg-hczmulhsbg";

function Minus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Minus">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">-</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Plus">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">+</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Container">
      <Minus />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">80%</p>
      </div>
      <Plus />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d={svgPaths.p23616880} id="Vector 127" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3d70a0} id="Vector 129" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p1b8de280} id="Vector 128" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p3017a570} id="Vector 130" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function ScreenNormal1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Screen Normal">
      <IconFrame />
    </div>
  );
}

function ScreenNormal() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0" data-name="Screen Normal">
      <ScreenNormal1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[57px] items-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Container2 />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 131" stroke="var(--stroke-0, black)" strokeOpacity="0.04" style={{ stroke: "black", strokeOpacity: "0.04" }} />
          </svg>
        </div>
      </div>
      <ScreenNormal />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container1 />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="手 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_54_956)" id="æ 1">
          <path d={svgPaths.p142f0a0} id="Vector 114" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_54_956">
            <rect fill="white" height="17" style={{ fill: "white", fillOpacity: "1" }} width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="手">
      <Component1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[rgba(0,228,36,0.1)] content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[44px]">
      <Component />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="手 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_54_953)" id="æ 1">
          <path d={svgPaths.p83f39e0} fill="currentColor" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_54_953">
            <rect fill="white" height="17" style={{ fill: "white", fillOpacity: "1" }} width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="手">
      <Component3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[44px]">
      <Component2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="回退">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="åé">
          <path d={svgPaths.p13ca960c} id="Vector 115" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[44px]">
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="前进">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="åè¿">
          <path d={svgPaths.p192447f0} id="Vector 115" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[44px]">
      <Component5 />
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Toolbar">
      <Frame3 />
      <Frame />
      <Frame1 />
      <Frame2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Toolbar">
      <Toolbar1 />
    </div>
  );
}

function Clear() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Clear">
          <path d={svgPaths.p2448c380} id="Vector" stroke="currentColor" />
          <path d={svgPaths.p3ddd2d80} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.p40def80} id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component9() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Component 19">
      <Clear />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Clear1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Clear">
          <path d={svgPaths.p167e7f00} fill="currentColor" />
          <path d={svgPaths.p2d12d80} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="下载">
      <Clear1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[16px] relative shrink-0 w-[14px]">
      <div className="absolute inset-[-6.25%_-7.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 18">
          <g id="Group 237">
            <path d={svgPaths.pe8dae00} id="Vector 102" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="保存">
      <Group />
    </div>
  );
}

function Component7() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="保存">
      <Component8 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Container">
      <Component9 />
      <Component6 />
      <Component7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Container">
      <Container4 />
    </div>
  );
}

export default function BottomBar() {
  return (
    <div className="content-stretch flex items-end justify-between relative size-full" data-name="Bottom Bar">
      <Container />
      <Toolbar />
      <Container3 />
    </div>
  );
}