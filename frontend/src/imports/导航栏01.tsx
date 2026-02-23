import svgPaths from "./svg-qcxhivcrap";

function Group3() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-[#00e424] border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-[#00e424] border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group3 />
      <div className="absolute inset-[-2.08%_0_2.08%_0]" data-name="24*24">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="24*24" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="输入节点">
      <Node />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[6px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1.5px] size-[3.75px]">
            <div aria-hidden="true" className="absolute border-[#1c1c1c] border-[2.25px] border-solid inset-[-1.125px] pointer-events-none rounded-[2.625px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame11 />
      <div className="bg-[#1c1c1c] h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 size-[24px]" data-name="处理节点">
      <div className="absolute h-[2.253px] left-[13.5px] top-[3px] w-[2.25px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.83436 3.83774">
            <path d={svgPaths.p3e05000} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.7px] left-[16.5px] top-[9px] w-[1.698px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.89289 2.89545">
            <path d={svgPaths.p3cece00} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "15.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[21px] relative shrink-0 w-[31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Group 10">
          <circle cx="9.5" cy="4" id="Ellipse 7" r="3" stroke="currentColor" />
          <circle cx="21.5" cy="17" id="Ellipse 8" r="3" stroke="currentColor" />
          <path d={svgPaths.p18bf4ce0} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Workflow">
      <Group />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="工作流模板">
      <Workflow />
    </div>
  );
}

function Aside() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[9999px] shrink-0 w-[48px]" data-name="Aside">
      <Component />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component1 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] text-left">
        <p className="css-ew64yg leading-[16.94px]">Input</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute left-1/2 size-[8px] top-[4.5px] translate-x-[-50%]">
      <div className="absolute inset-[-9.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
          <g id="Group 11">
            <path d="M0.75 0.75H8.75" id="Vector 103" stroke="currentColor" />
            <path d="M4.75002 0.75L4.75002 8.75" id="Vector 104" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <Group1 />
    </div>
  );
}

function Component9() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component9 />
    </div>
  );
}

function Krea() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Krea 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Krea 7">
          <path clipRule="evenodd" d={svgPaths.p16ed3d80} fill="currentColor" />
          <path d={svgPaths.pe3a2d00} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.p20d5dc80} fill="currentColor" id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="图片">
      <Krea />
    </div>
  );
}

function Component10() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component3 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Image</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[8px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <div className="absolute inset-[-9.38%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9.5">
          <g id="Frame 12">
            <rect height="8" id="Rectangle 3" rx="2" stroke="currentColor" width="9" x="0.75" y="0.75" />
            <path d={svgPaths.p3ae1a8f0} fill="currentColor" id="Rectangle 4" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="视频">
      <Frame />
    </div>
  );
}

function Component11() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component4 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Video</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component11 />
    </div>
  );
}

function Component5() {
  return (
    <div className="h-0 relative shrink-0 w-[164px]" data-name="分割线">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 1">
          <g id="åå²çº¿">
            <path d="M10 0.5H154" id="Vector 105" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] text-left">
        <p className="css-ew64yg leading-[16.94px]">Output</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute left-1/2 size-[8px] top-[4.5px] translate-x-[-50%]">
      <div className="absolute inset-[-9.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
          <g id="Group 11">
            <path d="M0.75 0.75H8.75" id="Vector 103" stroke="currentColor" />
            <path d="M4.75002 0.75L4.75002 8.75" id="Vector 104" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <Group2 />
    </div>
  );
}

function Component12() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon1 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Text Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component12 />
    </div>
  );
}

function Krea1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Krea 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Krea 7">
          <path clipRule="evenodd" d={svgPaths.p16ed3d80} fill="currentColor" />
          <path d={svgPaths.pe3a2d00} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.p20d5dc80} fill="currentColor" id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="图片">
      <Krea1 />
    </div>
  );
}

function Component13() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component6 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Image Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component13 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[8px] left-1/2 top-[4px] translate-x-[-50%] w-[12px]">
      <div className="absolute inset-[-9.38%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 9.5">
          <g id="Frame 12">
            <rect height="8" id="Rectangle 3" rx="2" stroke="currentColor" width="9" x="0.75" y="0.75" />
            <path d={svgPaths.p3ae1a8f0} fill="currentColor" id="Rectangle 4" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="视频">
      <Frame1 />
    </div>
  );
}

function Component14() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component7 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">Video Preview</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component14 />
    </div>
  );
}

function List() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex flex-col gap-[8px] items-start p-[8px] relative rounded-[16px] shrink-0 w-[200px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame3 />
      <Frame2 />
      <Frame4 />
      <Frame5 />
      <Component5 />
      <Frame7 />
      <Frame8 />
      <Frame6 />
      <Frame9 />
    </button>
  );
}

export default function Component8() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="导航栏 01">
      <Aside />
      <List />
    </div>
  );
}