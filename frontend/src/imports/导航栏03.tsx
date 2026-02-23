import svgPaths from "./svg-swls5eaz84";

function Group16() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-[#1c1c1c] border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-[#1c1c1c] border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group16 />
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

function Frame16() {
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame16 />
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
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame15 />
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

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(28,28,28,0.4)]">
        <p className="css-ew64yg leading-[16.94px]">Preset</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component3 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图片变手办</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow2 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component4 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">切换人物视角</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group3 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component5 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">建筑图转模型</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group4 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component6 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">组合物体</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group5 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component7 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group6 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow6 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component8 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图转线稿</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group7 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component9 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">按照色卡上色</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group8 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow8 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component11 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">生成一套角色设定</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group9 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component12 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">虚实结合/跨次元</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group10 />
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component13 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">动漫转真人姿势</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group11 />
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow11 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component14 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">参考图片转人偶玩具</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group12 />
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component15 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图片转 Funko Pop</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group13 />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component16 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group14 />
    </div>
  );
}

function Component17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow14 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component17 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">高清修复</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.25">
        <g id="Group 10">
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="currentColor" />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="currentColor" />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Workflow15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group15 />
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="流">
      <Workflow15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="h-[32px] relative rounded-[30px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative size-full">
          <Component18 />
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
    <div className="bg-white relative rounded-[16px] shrink-0 w-[200px]" data-name="List">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[8px] relative rounded-[inherit] w-full">
        <Frame17 />
        <Frame />
        <Frame1 />
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
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

export default function Component10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative size-full" data-name="导航栏 03">
      <Aside />
      <List />
    </div>
  );
}