import svgPaths from "./svg-zxqemja5je";

function Group1() {
  return (
    <div className="h-[4.199px] relative w-[4px]">
      <div className="absolute inset-[-17.86%_-18.75%_-17.87%_-18.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50001 5.69959">
          <g id="Group 12">
            <path d={svgPaths.p283a4110} id="Vector 108" stroke="currentColor" />
            <path d={svgPaths.p192c33c0} id="Vector 109" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 h-[4.199px] ml-[6px] mt-0 relative row-1 w-[4px]">
      <div className="absolute inset-[-17.86%_-18.75%_-17.87%_-18.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.50001 5.69959">
          <g id="Group 13">
            <path d={svgPaths.p283a4110} id="Vector 108" stroke="currentColor" />
            <path d={svgPaths.p192c33c0} id="Vector 109" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 flex h-[4.199px] items-center justify-center ml-0 mt-[6px] relative row-1 w-[4px]">
        <div className="flex-none rotate-[180deg]">
          <Group1 />
        </div>
      </div>
      <Group2 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="放大">
      <Group3 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]" data-name="Component 12">
      <Component2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative size-[11.899px]">
      <div className="absolute inset-[-6.31%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8995 12.6495">
          <g id="Frame 14">
            <g id="Group 16">
              <path d={svgPaths.p3b0ed200} id="Vector 108" stroke="currentColor" />
              <path d={svgPaths.p1c6fa900} fill="currentColor" />
            </g>
            <circle cx="5.94975" cy="11.6495" fill="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="跳过">
      <div className="flex items-center justify-center relative shrink-0 size-[11.899px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "927" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]">
      <Component3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10px]">
      <div className="absolute inset-[-6.25%_-17.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <g id="Frame 2117130727">
            <g id="Group 15">
              <path d="M5.25 0.75H8.25" id="Vector 110" stroke="currentColor" />
              <path d="M0.75 2.75H12.75" id="Vector 111" stroke="currentColor" />
            </g>
            <path d={svgPaths.pc502b80} id="Vector 112" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex h-[16px] items-center overflow-clip px-[3px] py-[2px] relative shrink-0" data-name="删除">
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]">
      <Component4 />
    </div>
  );
}

function Component5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="更多">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="æ´å¤">
          <path d={svgPaths.p2025da80} id="Vector" stroke="currentColor" />
          <path d={svgPaths.p36e45a00} id="Vector_2" stroke="currentColor" />
          <path d={svgPaths.p39c9bf80} id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]" data-name="Component 10">
      <Component5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[8px] h-[32px] items-center px-[12px] relative rounded-[16px] shrink-0" data-name="节点工具栏">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component12 />
      <Frame7 />
      <Frame6 />
      <Component10 />
    </div>
  );
}

function Frame2() {
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
      <Frame2 />
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

function Component8() {
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

function Container1() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon1 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片变手办</p>
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

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container1 />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px] w-full">
        <p className="css-4hzbpn leading-[1.5]">turn this photo into a character figure, An anime-style image of a female character standing on a display platform, with the background being an exhibition or event venue. Keep the character pose on a transparent display platform. Background: a blurred exhibition environment with other visitors. Style, anime style, 3D rendering effect</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Component 6">
      <TextContainer />
    </div>
  );
}

function Component15() {
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

function Component14() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component15 />
    </div>
  );
}

function Component11() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative w-full">
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
      <Component8 />
      <Component9 />
      <Component11 />
    </div>
  );
}

function Divider() {
  return (
    <div className="relative shrink-0 w-full" data-name="Divider">
      <div className="content-stretch flex flex-col items-start px-[8px] relative w-full">
        <div className="h-0 relative shrink-0 w-[206px]">
          <div className="absolute inset-[-0.75px_-0.36%]" style={{ "--fill-0": "rgba(255, 255, 255, 1)", "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.5 1.5">
              <path d="M0.75 0.75H206.75" id="Vector 2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeOpacity="0.2" strokeWidth="1.5" style={{ stroke: "white", strokeOpacity: "0.2" }} />
            </svg>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-[81.495px]">
          <div className="absolute inset-[-0.75px_-0.92%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82.9945 1.5">
              <path d="M0.75 0.75H82.2445" id="Vector 3" stroke="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
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

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative w-[2.5px]">
      <Frame4 />
      <div className="bg-[#1c1c1c] h-[8px] rounded-[1px] shrink-0 w-[2px]" />
    </div>
  );
}

function Component16() {
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
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
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
      <Frame1 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[22.499px]">Play</p>
      </div>
    </div>
  );
}

function Container2() {
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
    <div className="bg-white relative rounded-[16px] shrink-0 w-[214px]" data-name="Overlay+Border+OverlayBlur">
      <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[4px] relative rounded-[inherit] w-full">
        <Container />
        <Divider />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border-[#00e424] border-[1.5px] border-solid inset-[-0.75px] pointer-events-none rounded-[16.75px]" />
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute content-stretch flex items-center left-[8px] top-px" data-name="文本输入与运行">
      <OverlayBorderOverlayBlur />
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute left-0 size-[16px] top-[180px]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="5" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute left-[214px] size-[16px] top-[180px]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="5" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="h-[376px] relative shrink-0 w-full" data-name="节点-图片编辑-执行中">
      <Component7 />
      <Component18 />
      <Component19 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative size-full" data-name="选中">
      <Component1 />
      <Component6 />
    </div>
  );
}