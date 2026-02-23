import svgPaths from "./svg-9knrcjo0ni";

function Frame1() {
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
      <Frame1 />
    </div>
  );
}

function ExpandIcon() {
  return (
    <div className="relative size-[12px]" data-name="Expand Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Expand Icon">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[12px] text-black tracking-[-0.16px]">
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
          <circle cx="5.54167" cy="2.33333" id="Ellipse 7" r="1.58333" stroke="var(--stroke-0, black)" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          <circle cx="12.5417" cy="9.91667" id="Ellipse 8" r="1.58333" stroke="var(--stroke-0, black)" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p202fa00} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
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
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon1 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">内容组合</p>
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

function Component2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container1 />
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

function Component4() {
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

function Container2() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片1</p>
          </div>
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container2 />
    </div>
  );
}

function Krea1() {
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

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea1 />
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

function Container3() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer1 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片2</p>
          </div>
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container3 />
    </div>
  );
}

function Krea2() {
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

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea2 />
    </div>
  );
}

function Component8() {
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

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer2 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片3</p>
          </div>
          <Component8 />
        </div>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container4 />
    </div>
  );
}

function Krea3() {
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

function IconContainer3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea3 />
    </div>
  );
}

function Component10() {
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

function Container5() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer3 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片4</p>
          </div>
          <Component10 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container5 />
    </div>
  );
}

function Krea4() {
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

function IconContainer4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea4 />
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Add Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Add Icon">
          <path d="M2.49998 6H9.49998" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M6 2.49998V9.49998" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <IconContainer4 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[12px] text-black text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">增加图片变量</p>
          </div>
          <AddIcon />
        </div>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container6 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px]" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="css-ew64yg leading-[1.2]">组合输入的图片内容</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <TextContainer />
    </div>
  );
}

function Component15() {
  return (
    <div className="h-[12px] relative shrink-0 w-[15px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Component 1">
          <path clipRule="evenodd" d={svgPaths.p31d6600} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p2db0400} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_2" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p3ecb1200} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_3" style={{ fill: "black", fillOpacity: "1" }} />
          <path clipRule="evenodd" d={svgPaths.p2af07280} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector_4" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component15 />
    </div>
  );
}

function Component12() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] h-[97px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative size-full">
          <Component13 />
          <Component14 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component5 />
      <Component7 />
      <Component9 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[4px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1px] size-[2.5px]">
            <div aria-hidden="true" className="absolute border-[1.5px] border-black border-solid inset-[-0.75px] pointer-events-none rounded-[1.75px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative w-[2.5px]">
      <Frame3 />
      <div className="bg-black h-[8px] rounded-[1px] shrink-0 w-[2px]" />
    </div>
  );
}

function Component16() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="效果">
      <div className="absolute h-[1.502px] left-[9px] top-[2px] w-[1.5px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.55624 2.55849">
            <path d={svgPaths.p3e11ff40} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05624" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.133px] left-[11px] top-[6px] w-[1.132px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.9286 1.9303">
            <path d={svgPaths.p301a79f2} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.796897" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[2.52px] size-[10.96px] top-[3.52px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame 63">
          <path d={svgPaths.p2c610f00} fill="var(--fill-0, white)" id="Vector 2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component17() {
  return (
    <div className="bg-[#00e424] content-stretch flex gap-[4px] h-[24px] items-center justify-center p-[10px] relative rounded-[51px] shrink-0" data-name="运行按钮">
      <Frame />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[22.499px]">Play</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
          <Component16 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
            <p className="css-4hzbpn leading-[22.499px]">Image Editor</p>
          </div>
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[214px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container />
      <Container7 />
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-[calc(50%+0.5px)] translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="文本输入与运行">
      <OverlayBorderOverlayBlur />
      <Component18 />
    </div>
  );
}