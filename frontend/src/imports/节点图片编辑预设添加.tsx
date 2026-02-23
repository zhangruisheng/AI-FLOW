import svgPaths from "./svg-3o34h6pwfi";

function Frame16() {
  return (
    <div className="relative shrink-0 size-[9px]">
      <div className="absolute inset-[-8.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 10.5">
          <g id="Frame 2117130685">
            <path d="M0.75 0.75L3.75 3.75" id="Vector 99" stroke="currentColor" />
            <path d="M6.75 3.75L9.75 0.75" id="Vector 102" stroke="currentColor" />
            <path d="M0.75 9.75L3.75 6.75" id="Vector 101" stroke="currentColor" />
            <path d="M6.75 6.75L9.75 9.75" id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[16px]" data-name="Icon">
      <Frame16 />
    </div>
  );
}

function ExpandIcon() {
  return (
    <div className="relative size-[12px]" data-name="Expand Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Expand Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[12px] tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Nano Banana</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
            <div className="flex-none rotate-[-90deg]">
              <ExpandIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group() {
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

function Workflow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[14px]" data-name="workflow">
      <Group />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Icon">
      <Workflow />
    </div>
  );
}

function ExpandIcon1() {
  return (
    <div className="relative size-[12px]" data-name="Expand Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Expand Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-[rgba(0,228,36,0)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div aria-hidden="true" className="absolute border border-[#00e424] border-solid inset-[-1px] pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon1 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[12px] text-[rgba(28,28,28,0.4)]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-4hzbpn leading-[16.5px]">图片编辑模块</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
            <div className="flex-none rotate-[-90deg]">
              <ExpandIcon1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Krea() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="Krea 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="Krea 7">
          <path clipRule="evenodd" d={svgPaths.p2cec1fc0} fill="currentColor" />
          <path d={svgPaths.p33dfc580} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.pa9a9200} fill="currentColor" id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea />
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[9px] relative shrink-0 w-[7.5px]">
      <div className="absolute inset-[-5.56%_-16.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <g id="Frame 2117130727">
            <g id="Group 15">
              <path d="M3.875 0.5H6.125" id="Vector 110" stroke="currentColor" />
              <path d="M0.5 2H9.5" id="Vector 111" stroke="currentColor" />
            </g>
            <path d={svgPaths.p23780380} id="Vector 112" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame20 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute left-[-12px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片1</p>
          </div>
          <Component5 />
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container1 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[1.5]">Enter text …</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <TextContainer />
    </div>
  );
}

function Component9() {
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

function Component10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component9 />
    </div>
  );
}

function Component7() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[97px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[12px] relative size-full">
          <Component8 />
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[4px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1px] size-[2.5px]">
            <div aria-hidden="true" className="absolute border-[#1c1c1c] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative w-[2.5px]">
      <Frame18 />
      <div className="bg-[#1c1c1c] h-[8px] rounded-[1px] shrink-0 w-[2px]" />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="效果">
      <div className="absolute h-[1.502px] left-[9px] top-[2px] w-[1.5px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.55624 2.55849">
            <path d={svgPaths.p3e11ff40} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.133px] left-[11px] top-[6px] w-[1.132px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.9286 1.9303">
            <path d={svgPaths.p301a79f2} id="Vector" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[2.52px] size-[10.96px] top-[3.52px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame 63">
          <path d={svgPaths.p2c610f00} id="Vector 2" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[51px] shrink-0 size-[24px]" data-name="运行按钮">
      <Frame15 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
          <Component11 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
            <p className="css-4hzbpn leading-[22.499px]">Image Editor</p>
          </div>
          <Component12 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[214px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
      <Container2 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[214px]" data-name="文本输入与运行">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
      <Component1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(28,28,28,0.4)]">
        <p className="css-ew64yg leading-[16.94px]">预设</p>
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

function Component13() {
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
          <Component13 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-ew64yg leading-[16.5px]">图片反推</p>
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

function Component14() {
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
          <Component14 />
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

function Component15() {
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
          <Component15 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
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

function Component16() {
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
          <Component16 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
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

function Component17() {
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
          <Component17 />
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

function Component18() {
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
          <Component18 />
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

function Component19() {
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
          <Component19 />
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

function Component20() {
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
          <Component20 />
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

function Component21() {
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
          <Component21 />
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

function Component22() {
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
          <Component22 />
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

function Component23() {
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
          <Component23 />
          <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.16px]" style={{ fontVariationSettings: "'wght' 500" }}>
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

function Component24() {
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
          <Component24 />
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

function Component25() {
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
          <Component25 />
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

function Component26() {
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
          <Component26 />
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

function Component27() {
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
          <Component27 />
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
        <Frame19 />
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

export default function Component() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="节点-图片编辑-预设添加">
      <Frame21 />
      <List />
    </div>
  );
}