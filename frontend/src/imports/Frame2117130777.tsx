import svgPaths from "./svg-dq3nslpnj1";

function Group4() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-black border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-black border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group4 />
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

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[6px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1.5px] size-[3.75px]">
            <div aria-hidden="true" className="absolute border-[2.25px] border-black border-solid inset-[-1.125px] pointer-events-none rounded-[2.625px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame27 />
      <div className="bg-black h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 size-[24px]" data-name="处理节点">
      <div className="absolute h-[2.253px] left-[13.5px] top-[3px] w-[2.25px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.83436 3.83774">
            <path d={svgPaths.p3e05000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58436" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.7px] left-[16.5px] top-[9px] w-[1.698px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.89289 2.89545">
            <path d={svgPaths.p3cece00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19535" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame26 />
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
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[9999px] shrink-0 w-[56px]" data-name="Aside">
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

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(28,28,28,0.4)]">
        <p className="css-ew64yg leading-[16.94px]">预设</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component3 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图片变手办</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component4 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">切换人物视角</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component5 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">建筑图转模型</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component6 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">组合物体</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component7 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component8 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图转线稿</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component9 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">按照色卡上色</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component13 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">生成一套角色设定</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component14 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">虚实结合/跨次元</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component15 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">动漫转真人姿势</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component16 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">参考图片转人偶玩具</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component17 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图片转 Funko Pop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component18 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component19 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[12px] text-black tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="流">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æµ">
          <path d={svgPaths.p1bbc5b80} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component20 />
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px]">
            <p className="css-ew64yg leading-[31px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-[173px]" data-name="List">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[8px] relative rounded-[inherit] w-full">
        <Frame28 />
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame6 />
        <Frame7 />
        <Frame8 />
        <Frame9 />
        <Frame10 />
        <Frame11 />
        <Frame12 />
        <Frame13 />
        <Frame14 />
        <Frame15 />
        <Frame16 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[107px] top-[56px]" data-name="导航栏 03">
      <Aside />
      <List />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-black border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-black border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group5 />
      <div className="absolute inset-[-2.08%_0_2.08%_0]" data-name="24*24">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="24*24" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function Component21() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="输入节点">
      <Node1 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[6px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1.5px] size-[3.75px]">
            <div aria-hidden="true" className="absolute border-[#00e424] border-[2.25px] border-solid inset-[-1.125px] pointer-events-none rounded-[2.625px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame30 />
      <div className="bg-[#00e424] h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component22() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 size-[24px]" data-name="处理节点">
      <div className="absolute h-[2.253px] left-[13.5px] top-[3px] w-[2.25px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.83436 3.83774">
            <path d={svgPaths.p3e05000} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.7px] left-[16.5px] top-[9px] w-[1.698px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.89289 2.89545">
            <path d={svgPaths.p3cece00} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Group 10">
          <circle cx="9.5" cy="4" id="Ellipse 7" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <circle cx="21.5" cy="17" id="Ellipse 8" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p18bf4ce0} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Workflow1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Workflow">
      <Group1 />
    </div>
  );
}

function Component23() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="工作流模板">
      <Workflow1 />
    </div>
  );
}

function Aside1() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[9999px] shrink-0 w-[56px]" data-name="Aside">
      <Component21 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component22 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component23 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)]">
        <p className="css-ew64yg leading-[16.94px]">Editor</p>
      </div>
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

function Component25() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="图片">
      <Krea />
    </div>
  );
}

function Component24() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component25 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">图像编辑</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component24 />
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

function Component27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="视频">
      <Frame />
    </div>
  );
}

function Component26() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component27 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">视频制作</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component26 />
    </div>
  );
}

function Component28() {
  return (
    <div className="h-0 relative shrink-0 w-[164px]" data-name="分割线">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 1">
          <g id="åå²çº¿">
            <path d="M10 0.5H154" id="Vector 105" stroke="var(--stroke-0, black)" strokeOpacity="0.04" style={{ stroke: "black", strokeOpacity: "0.04" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)]">
        <p className="css-ew64yg leading-[16.94px]">Output</p>
      </div>
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

function Component30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="图片">
      <Krea1 />
    </div>
  );
}

function Component29() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component30 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">图像预览</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component29 />
    </div>
  );
}

function List1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[16px] shrink-0 w-[180px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Component28 />
      <Frame23 />
      <Frame21 />
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[460px] top-[275px]" data-name="导航栏 02">
      <Aside1 />
      <List1 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-[#00e424] border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-[#00e424] border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group6 />
      <div className="absolute inset-[-2.08%_0_2.08%_0]" data-name="24*24">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="24*24" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="输入节点">
      <Node2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[6px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1.5px] size-[3.75px]">
            <div aria-hidden="true" className="absolute border-[2.25px] border-black border-solid inset-[-1.125px] pointer-events-none rounded-[2.625px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame32 />
      <div className="bg-black h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component32() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 size-[24px]" data-name="处理节点">
      <div className="absolute h-[2.253px] left-[13.5px] top-[3px] w-[2.25px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.83436 3.83774">
            <path d={svgPaths.p3e05000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58436" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.7px] left-[16.5px] top-[9px] w-[1.698px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.89289 2.89545">
            <path d={svgPaths.p3cece00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19535" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Group 10">
          <circle cx="9.5" cy="4" id="Ellipse 7" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <circle cx="21.5" cy="17" id="Ellipse 8" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p18bf4ce0} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Workflow2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Workflow">
      <Group2 />
    </div>
  );
}

function Component33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="工作流模板">
      <Workflow2 />
    </div>
  );
}

function Aside2() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[9999px] shrink-0 w-[56px]" data-name="Aside">
      <Component31 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component32 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component33 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(28,28,28,0.4)] text-left">
        <p className="css-ew64yg leading-[16.94px]">输入</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-1/2 size-[8px] top-[4.5px] translate-x-[-50%]">
      <div className="absolute inset-[-9.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.5 9.5">
          <g id="Group 11">
            <path d="M0.75 0.75H8.75" id="Vector 103" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
            <path d="M4.75002 0.75L4.75002 8.75" id="Vector 104" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
      <Group3 />
    </div>
  );
}

function Component34() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_JP:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">文本</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component34 />
    </div>
  );
}

function Krea2() {
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

function Component36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="图片">
      <Krea2 />
    </div>
  );
}

function Component35() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component36 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">图像</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component35 />
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

function Component38() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="视频">
      <Frame1 />
    </div>
  );
}

function Component37() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full" data-name="Component 20">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Component38 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro:Medium','Noto_Sans_SC:Medium',sans-serif] font-[510] justify-center leading-[0] min-h-px min-w-px relative text-[#1c1c1c] text-[12px] text-left" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="css-4hzbpn leading-[normal]">视频</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Component37 />
    </div>
  );
}

function List2() {
  return (
    <button className="bg-white content-stretch cursor-pointer flex flex-col gap-[8px] items-start p-[8px] relative rounded-[16px] shrink-0 w-[180px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame22 />
      <Frame17 />
      <Frame24 />
      <Frame25 />
    </button>
  );
}

function Component10() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[798px] top-[286px]" data-name="导航栏 01">
      <Aside2 />
      <List2 />
    </div>
  );
}

export default function Frame33() {
  return (
    <div className="bg-[#8e8e8e] relative size-full">
      <Component12 />
      <Component11 />
      <Component10 />
    </div>
  );
}