import svgPaths from "./svg-lyrwnqxtm1";
import imgGeneratedVisuals from "figma:asset/2d7160601086bc4a3294287ad45cd52a2430ea18.png";
import imgGeneratedVisuals1 from "figma:asset/05bd0e17ef904ff5fe2eb9ea076cc4e0db7973b9.png";
import imgGeneratedVisuals2 from "figma:asset/fc6bc9a065ba741c116a3c69872b5372e54c51ac.png";
import imgGeneratedVisuals3 from "figma:asset/65c0d73b733245479f5c5a2cdd6ff1ab4bd17846.png";
import imgGeneratedVisuals4 from "figma:asset/9af5ac1f50087a6f8a64eb8de01852907537f857.png";

function Component6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Component 6">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals} />
      </div>
    </div>
  );
}

function Krea2() {
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

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon container">
      <Krea2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image input</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[286px] items-start left-[433px] p-[4px] rounded-[20px] top-[764px] w-[240px]" data-name="图片节点">
      <Component6 />
      <Container />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Component2 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Frame13() {
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
      <Frame13 />
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

function Component3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[12px] tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Nano Banana</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.2502">
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

function Container4() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon1 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">内容组合</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22.5" } as React.CSSProperties}>
            <div className="flex-none rotate-[-90deg]">
              <ExpandIcon1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component4() {
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

function IconContainer1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea3 />
    </div>
  );
}

function Frame21() {
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

function Component7() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame21 />
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

function Container5() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer1 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片1</p>
          </div>
          <Component7 />
          <Component8 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
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

function IconContainer2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea4 />
    </div>
  );
}

function Frame22() {
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

function Component10() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame22 />
    </div>
  );
}

function Component11() {
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

function Container6() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer2 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片2</p>
          </div>
          <Component10 />
          <Component11 />
        </div>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container6 />
    </div>
  );
}

function Krea5() {
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
      <Krea5 />
    </div>
  );
}

function Frame23() {
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

function Component13() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame23 />
    </div>
  );
}

function Component14() {
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

function Container7() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer3 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片3</p>
          </div>
          <Component13 />
          <Component14 />
        </div>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container7 />
    </div>
  );
}

function Krea6() {
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
      <Krea6 />
    </div>
  );
}

function Frame24() {
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

function Component16() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame24 />
    </div>
  );
}

function Component17() {
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

function Container8() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer4 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片4</p>
          </div>
          <Component16 />
          <Component17 />
        </div>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container8 />
    </div>
  );
}

function Krea7() {
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

function IconContainer5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea7 />
    </div>
  );
}

function AddIcon() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Add Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Add Icon">
          <path d="M2.49998 6H9.49998" id="Vector" stroke="currentColor" />
          <path d="M6 2.49998V9.49998" id="Vector_2" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <IconContainer5 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-center text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">增加图片变量</p>
          </div>
          <AddIcon />
        </div>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container9 />
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

function Component20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <TextContainer />
    </div>
  );
}

function Component22() {
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

function Component21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component22 />
    </div>
  );
}

function Component19() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[97px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative size-full">
          <Component20 />
          <Component21 />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Component3 />
      <Component4 />
      <Component5 />
      <Component9 />
      <Component12 />
      <Component15 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Frame16() {
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

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative w-[2.5px]">
      <Frame16 />
      <div className="bg-[#1c1c1c] h-[8px] rounded-[1px] shrink-0 w-[2px]" />
    </div>
  );
}

function Component23() {
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
      <div className="absolute flex items-center justify-center left-[2.52px] size-[10.96px] top-[3.52px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame15 />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
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

function Component24() {
  return (
    <div className="bg-[#00e424] content-stretch flex gap-[4px] h-[24px] items-center justify-center p-[10px] relative rounded-[51px] shrink-0" data-name="运行按钮">
      <Frame10 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white">
        <p className="css-ew64yg leading-[22.499px]">Play</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
          <Component23 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
            <p className="css-4hzbpn leading-[22.499px]">Image Editor</p>
          </div>
          <Component24 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[214px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container3 />
      <Container10 />
    </div>
  );
}

function Component25() {
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

function Frame12() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[1144px] top-[525px] w-[214px]">
      <OverlayBorderOverlayBlur />
      <Component25 />
    </div>
  );
}

function Line() {
  return (
    <div className="absolute h-[220px] left-[673px] top-[689px] w-[471px]" data-name="line">
      <div className="absolute inset-[-3.64%_-1.7%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 487 236">
          <g id="line">
            <path d={svgPaths.p24f32d00} id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="228" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="228" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="479" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="479" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Line1() {
  return (
    <div className="h-[283px] relative w-[138px]" data-name="line">
      <div className="absolute inset-[-2.83%_-5.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 299">
          <g id="line">
            <path d={svgPaths.p38498d80} id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="291" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="291" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="146" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="146" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function OverlayShadowOverlayBlur() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-[1_0_0] items-start justify-center min-h-[157.3714599609375px] min-w-[157.3714599609375px] overflow-clip relative rounded-[16px] w-full" data-name="Overlay+Shadow+OverlayBlur">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals1} />
      </div>
    </div>
  );
}

function Component29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <OverlayShadowOverlayBlur />
    </div>
  );
}

function Component28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 5">
      <Component29 />
    </div>
  );
}

function Frame6() {
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

function Frame2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[12px] tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Use</p>
          </div>
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
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

function Frame3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[30px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[12px] tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Save</p>
          </div>
          <Frame7 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
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

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]">
      <Krea8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <Frame4 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[15px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Preview</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative size-full">
          <Container11 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Component27() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px p-[4px] relative rounded-[20px] w-[240px]" data-name="图片节点">
      <Component28 />
      <Frame5 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Frame8 />
    </div>
  );
}

function Component26() {
  return (
    <div className="absolute content-stretch flex flex-col h-[474px] items-center justify-center left-[1656px] top-[241px] w-[240px]" data-name="结果">
      <Component27 />
    </div>
  );
}

function Component31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Component 6">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals2} />
      </div>
    </div>
  );
}

function Krea9() {
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

function IconContainer6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon container">
      <Krea9 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer6 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image input</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container13 />
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Component32() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component30() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[460px] items-start left-[766px] p-[4px] rounded-[20px] top-[104px] w-[240px]" data-name="图片节点">
      <Component31 />
      <Container12 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Component32 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Component34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Component 6">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals3} />
      </div>
    </div>
  );
}

function Krea10() {
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

function IconContainer7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon container">
      <Krea10 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer7 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image input</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container16 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Component35() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component33() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[258px] items-start left-[766px] p-[4px] rounded-[20px] top-[614px] w-[240px]" data-name="图片节点">
      <Component34 />
      <Container15 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Component35 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Component37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Component 6">
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals4} />
      </div>
    </div>
  );
}

function Krea11() {
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

function IconContainer8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon container">
      <Krea11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer8 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image input</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Image</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Component38() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component36() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[286px] items-start left-[766px] p-[4px] rounded-[20px] top-[909px] w-[240px]" data-name="图片节点">
      <Component37 />
      <Container18 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-0 to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <Component38 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Frame14() {
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

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[16px]" data-name="Icon">
      <Frame14 />
    </div>
  );
}

function ExpandIcon2() {
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

function Component40() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon2 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[12px] tracking-[-0.16px]">
            <p className="css-4hzbpn leading-[16.5px]">Nano Banana</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0 size-[12px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-[-90deg]">
              <ExpandIcon2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[12.25px] relative shrink-0 w-[18.083px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0833 12.2502">
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

function Icon3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[16px]" data-name="Icon">
      <Workflow1 />
    </div>
  );
}

function AddIcon1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Add Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Add Icon">
          <path d="M2.49998 6H9.49998" id="Vector" stroke="currentColor" />
          <path d="M6 2.49998V9.49998" id="Vector_2" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component41() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[32px] relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[10px] py-[4px] relative size-full">
          <Icon3 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_JP:Medium','Noto_Sans_SC:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px relative text-[12px] text-[rgba(28,28,28,0.4)]" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-4hzbpn leading-[16.5px]">未添加 预设</p>
          </div>
          <AddIcon1 />
        </div>
      </div>
    </div>
  );
}

function Krea12() {
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

function IconContainer9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="Icon Container">
      <Krea12 />
    </div>
  );
}

function Frame25() {
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

function Component43() {
  return (
    <div className="content-stretch flex h-[12px] items-center opacity-40 overflow-clip px-[2.25px] py-[1.5px] relative shrink-0" data-name="删除">
      <Frame25 />
    </div>
  );
}

function Component44() {
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

function Container22() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] flex-[1_0_0] h-[32px] min-h-px min-w-px relative rounded-[15px]" data-name="Container">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-end px-[10px] py-[4px] relative size-full">
          <IconContainer9 />
          <div className="css-g0mm18 flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] min-h-px min-w-px overflow-hidden relative text-[#1c1c1c] text-[12px] text-ellipsis" style={{ fontVariationSettings: "'wght' 500" }}>
            <p className="css-g0mm18 leading-[16.5px] overflow-hidden">图片1</p>
          </div>
          <Component43 />
          <Component44 />
        </div>
      </div>
    </div>
  );
}

function Component42() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[15px] shrink-0 w-full" data-name="预设">
      <Container22 />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[1.5]">Enter text …</p>
      </div>
    </div>
  );
}

function Component46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <TextContainer1 />
    </div>
  );
}

function Component48() {
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

function Component47() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="Component 10">
      <Component48 />
    </div>
  );
}

function Component45() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] h-[97px] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-center size-full">
        <div className="content-stretch flex flex-col items-end justify-center p-[16px] relative size-full">
          <Component46 />
          <Component47 />
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Component40 />
      <Component41 />
      <Component42 />
      <Component45 />
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

function Component49() {
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
      <div className="absolute flex items-center justify-center left-[2.52px] size-[10.96px] top-[3.52px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
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

function Component50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[51px] shrink-0 size-[24px]" data-name="运行按钮">
      <Frame11 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[4px] relative size-full">
          <Component49 />
          <div className="flex flex-[1_0_0] flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#1c1c1c] text-[13px] tracking-[-0.2146px]">
            <p className="css-4hzbpn leading-[22.499px]">Image Editor</p>
          </div>
          <Component50 />
        </div>
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start p-[4px] relative rounded-[16px] shrink-0 w-[214px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container21 />
      <Container23 />
    </div>
  );
}

function Component51() {
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

function Component39() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-[1144px] top-[249px] w-[214px]" data-name="文本输入与运行">
      <OverlayBorderOverlayBlur1 />
      <Component51 />
    </div>
  );
}

function Line2() {
  return (
    <div className="h-[7px] relative w-[138px]" data-name="line">
      <div className="absolute inset-[-114.29%_-5.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 23">
          <g id="line">
            <path d="M8 15C77 15 77 8 146 8" id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="15" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="15" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="146" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="146" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Line3() {
  return (
    <div className="absolute h-[99px] left-[1006px] top-[653px] w-[138px]" data-name="line">
      <div className="absolute inset-[-8.08%_-5.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 115">
          <g id="line">
            <path d="M8 107C77 107 77 8 146 8" id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="107" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="107" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="146" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="146" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Line4() {
  return (
    <div className="absolute h-[325px] left-[1006px] top-[725px] w-[138px]" data-name="line">
      <div className="absolute inset-[-2.46%_-5.8%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154 341">
          <g id="line">
            <path d="M8 333C77 333 77 8 146 8" id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="333" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="333" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="146" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="146" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Line5() {
  return (
    <div className="h-[93px] relative w-[282px]" data-name="line">
      <div className="absolute inset-[-8.6%_-2.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 109">
          <g id="line">
            <path d="M8 101C149 101 149 8 290 8" id="line_2" stroke="currentColor" />
            <g id="èç¹">
              <g id="Ellipse 1">
                <circle cx="8" cy="101" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="8" cy="101" r="5" stroke="currentColor" />
              </g>
            </g>
            <g id="èç¹_2">
              <g id="Ellipse 1_2">
                <circle cx="290" cy="8" fill="var(--fill-0, white)" r="6" style={{ fill: "white", fillOpacity: "1" }} />
                <circle cx="290" cy="8" r="5" stroke="currentColor" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute contents left-[433px] top-[104px]" data-name="Main Content">
      <Component1 />
      <Frame12 />
      <Line />
      <div className="absolute flex h-[283px] items-center justify-center left-[1006px] top-[334px] w-[138px]">
        <div className="flex-none scale-y-[-100%]">
          <Line1 />
        </div>
      </div>
      <Component26 />
      <Component30 />
      <Component33 />
      <Component36 />
      <Component39 />
      <div className="absolute flex h-[7px] items-center justify-center left-[1006px] top-[334px] w-[138px]">
        <div className="flex-none scale-y-[-100%]">
          <Line2 />
        </div>
      </div>
      <Line3 />
      <Line4 />
      <div className="absolute flex h-[93px] items-center justify-center left-[1374px] top-[376px] w-[282px]">
        <div className="flex-none scale-y-[-100%]">
          <Line5 />
        </div>
      </div>
    </div>
  );
}

function Group4() {
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
      <Group4 />
      <div className="absolute inset-[-2.08%_0_2.08%_0]" data-name="24*24">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="24*24" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function Component52() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="输入节点">
      <Node />
    </div>
  );
}

function Frame20() {
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

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame20 />
      <div className="bg-[#1c1c1c] h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component53() {
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
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame19 />
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
          <circle cx="9.5" cy="4" id="Ellipse 7" r="3" stroke="currentColor" />
          <circle cx="21.5" cy="17" id="Ellipse 8" r="3" stroke="currentColor" />
          <path d={svgPaths.p18bf4ce0} id="Vector 4" stroke="currentColor" />
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

function Component54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="工作流模板">
      <Workflow2 />
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center left-[10px] overflow-clip px-[8px] py-[16px] rounded-[9999px] top-1/2 translate-y-[-50%] w-[56px]" data-name="Aside">
      <Component52 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <Component53 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(28, 28, 28, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="currentColor" />
          </svg>
        </div>
      </div>
      <Component54 />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d={svgPaths.p23616880} id="Vector 127" stroke="currentColor" />
          <path d={svgPaths.p3d70a0} id="Vector 129" stroke="currentColor" />
          <path d={svgPaths.p1b8de280} id="Vector 128" stroke="currentColor" />
          <path d={svgPaths.p3017a570} id="Vector 130" stroke="currentColor" />
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

function Minus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Minus">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">-</p>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[20px]" data-name="Plus">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">+</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0" data-name="Container">
      <Minus />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.16px]">
        <p className="css-ew64yg leading-[16.5px]">80%</p>
      </div>
      <Plus />
    </div>
  );
}

function Container25() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[48px] items-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Container">
      <ScreenNormal />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 131" stroke="var(--stroke-0, black)" strokeOpacity="0.03" style={{ stroke: "black", strokeOpacity: "0.03" }} />
          </svg>
        </div>
      </div>
      <Container26 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Container25 />
    </div>
  );
}

function Component57() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="手 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_103_2609)" id="æ 1">
          <path d={svgPaths.p142f0a0} id="Vector 114" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_103_2609">
            <rect fill="white" height="17" style={{ fill: "white", fillOpacity: "1" }} width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component56() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="手">
      <Component57 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[rgba(0,228,36,0.1)] content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px]">
      <Component56 />
    </div>
  );
}

function Component59() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="手 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g clipPath="url(#clip0_103_2604)" id="æ 1">
          <path d={svgPaths.p83f39e0} fill="currentColor" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_103_2604">
            <rect fill="white" height="17" style={{ fill: "white", fillOpacity: "1" }} width="17" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component58() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="手">
      <Component59 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px]">
      <Component58 />
    </div>
  );
}

function Component60() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="回退">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="åé">
          <path d={svgPaths.p13ca960c} id="Vector 115" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px]">
      <Component60 />
    </div>
  );
}

function Component61() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="前进">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="åè¿">
          <path d={svgPaths.p192447f0} id="Vector 115" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[6px] py-[8px] relative rounded-[9999px] shrink-0 size-[40px]">
      <Component61 />
    </div>
  );
}

function Component55() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[48px] items-center p-[8px] relative rounded-[9999px] shrink-0" data-name="工具栏">
      <Frame29 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative" data-name="Toolbar">
      <Component55 />
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

function Component62() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Component 19">
      <Clear />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
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

function Component63() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="下载">
      <Clear1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Group5() {
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

function Component65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[24px]" data-name="保存">
      <Group5 />
    </div>
  );
}

function Component64() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="保存">
      <Component65 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Container">
      <Component62 />
      <Component63 />
      <Component64 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px min-w-px relative" data-name="Container">
      <Container28 />
    </div>
  );
}

function BottomBar() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-end justify-between left-1/2 p-[10px] translate-x-[-50%] w-[2329px]" data-name="Bottom Bar">
      <Container24 />
      <Toolbar />
      <Container27 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[1.2]">Enter text …</p>
      </div>
    </div>
  );
}

function Component68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <TextContainer2 />
    </div>
  );
}

function Component67() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-[12px] relative rounded-[16px] w-[232px]" data-name="Component 5">
      <Component68 />
    </div>
  );
}

function Krea() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Krea 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Krea 4">
          <path d={svgPaths.p2137800} fill="currentColor" />
          <path d={svgPaths.p366c4e00} fill="currentColor" />
          <path d={svgPaths.p255f91c0} id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon Container">
      <Krea />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer10 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text Input</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative shrink-0 w-[232px]" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Component69() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-1/2 translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component66() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[140px] items-start left-[430px] p-[4px] rounded-[20px] top-[195px]" data-name="文本节点">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-1/2 translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
      <Component67 />
      <Container29 />
      <Component69 />
    </div>
  );
}

function Krea1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Krea 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Krea 4">
          <path d={svgPaths.p2137800} fill="currentColor" />
          <path d={svgPaths.p366c4e00} fill="currentColor" />
          <path d={svgPaths.p255f91c0} id="Vector_3" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon Container">
      <Krea1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer11 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text Input</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative w-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Component71() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
          <p className="css-4hzbpn font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px] w-full">{`The image shows a person sitting on a chair with their hands clasped together. The individual is dressed in a black suit, and their hair is long and dark. The background consists of a white curtain, which creates a soft, diffused light effect. The person appears to be in a contemplative or relaxed pose, with their head slightly bowed. The image has a minimalist and professional aesthetic, with a focus on the subject and the subtle lighting. `}</p>
        </div>
      </div>
    </div>
  );
}

function Component72() {
  return (
    <div className="absolute right-[-24px] size-[16px] top-[calc(50%-0.36px)] translate-y-[-50%]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component70() {
  return (
    <div className="absolute backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] items-start left-[430px] p-[4px] rounded-[20px] top-[375px] w-[240px]" data-name="文本节点">
      <Container32 />
      <Component71 />
      <Component72 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-[calc(50%-0.36px)] translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative size-[17.333px]" data-name="Frame">
      <div className="absolute inset-[-0.49%_0_-0.38%_-0.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4191 17.4853">
          <g id="Frame">
            <path d="M1.5 1.5L5.5 5.5" id="Vector 99" stroke="currentColor" />
            <path d={svgPaths.pfdcc500} id="Vector 102" stroke="currentColor" />
            <path d={svgPaths.pe15f120} id="Vector 101" stroke="currentColor" />
            <path d={svgPaths.p25e0a2e0} id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon Image">
      <div className="absolute flex items-center justify-center left-[3.74px] size-[24.513px] top-[3.74px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[48px] items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 w-[64px]" data-name="Icon Container">
      <IconImage />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Component74() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[#1c1c1c] text-[15px]">
        <p className="css-ew64yg leading-[normal]">Workflow</p>
      </div>
    </div>
  );
}

function Component73() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[48px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="标签栏">
      <Component74 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Component76() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[15px]">
        <p className="css-ew64yg leading-[normal]">Workflow</p>
      </div>
    </div>
  );
}

function Component75() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[48px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="标签栏">
      <Component76 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute left-1/2 size-[18px] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="absolute inset-[-5.56%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Group 19">
            <path d="M1 10H19" id="Vector" stroke="currentColor" />
            <path d="M10 1V19" id="Vector_2" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Add">
      <Group3 />
    </div>
  );
}

function Component77() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Component 10">
      <Add1 />
    </div>
  );
}

function Add() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[48px] items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 w-[56px]" data-name="Add">
      <Component77 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Upload">
          <path d={svgPaths.p29b4780} fill="currentColor" />
          <path d={svgPaths.p2d12d80} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component78() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[48px] items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 w-[56px]" data-name="上传">
      <Upload />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Left Section">
      <IconContainer12 />
      <Component73 />
      <Component75 />
      <Add />
      <Component78 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <div className="absolute inset-[-8.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 15.25">
          <g id="Frame">
            <path d="M1.125 1.125L5.625 5.625" id="Vector 99" stroke="currentColor" />
            <path d="M9.625 5.625L14.125 1.125" id="Vector 102" stroke="currentColor" />
            <path d="M1.125 14.125L5.625 9.625" id="Vector 101" stroke="currentColor" />
            <path d="M9.625 9.625L14.125 14.125" id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function IconContainer13() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Icon Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M1 1L5.5 5.5" id="Vector 99" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M1 14L5.5 9.5" id="Vector 101" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M5.5 5.5L1 1" id="Vector 102" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M5.5 9.5L1 14" id="Vector 100" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]" data-name="Container">
      <Container37 />
      <Container38 />
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Button Icon">
      <Container36 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[40px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Button:margin">
      <ButtonIcon />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">编辑</p>
      </div>
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="h-[14.25px] relative w-[15.75px]" data-name="Icon Frame">
      <div className="absolute inset-[-14.91%_0_-4.39%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 17.0001">
          <g id="Icon Frame">
            <path d={svgPaths.p10acb280} id="Vector 99" stroke="currentColor" />
            <path d={svgPaths.p97656c0} id="Vector 102" stroke="currentColor" />
            <path d="M1.125 16.0001H11.625" id="Vector 101" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LinkIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Link Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconFrame1 />
        </div>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <LinkIcon />
        </div>
      </div>
    </div>
  );
}

function Component80() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="资产">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="èµäº§">
          <g id="Container">
            <path d={svgPaths.p24ab6f00} id="Vector 102" stroke="currentColor" />
          </g>
          <path d={svgPaths.p33809c00} id="Vector 103" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Component80 />
        </div>
      </div>
    </div>
  );
}

function Component79() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[48px] items-center p-[4px] relative rounded-[9999px] shrink-0 w-[237px]" data-name="导航栏">
      <IconContainer13 />
      <ButtonMargin />
      <LinkMargin />
      <Button />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_0px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Container">
      <Component79 />
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d={svgPaths.p3106a200} fill="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function DarkMode1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dark Mode">
      <IconFrame2 />
    </div>
  );
}

function Component81() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <DarkMode1 />
    </div>
  );
}

function DarkMode() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Dark Mode">
      <Component81 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="User Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User Icon">
          <path d={svgPaths.p356e7680} id="Vector" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component82() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <UserIcon />
    </div>
  );
}

function IconContainer14() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Icon Container">
      <Component82 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Right Section">
      <DarkMode />
      <IconContainer14 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top Bar">
      <div className="content-stretch flex items-start justify-between p-[10px] relative w-full">
        <LeftSection />
        <Container35 />
        <RightSection />
      </div>
    </div>
  );
}

function TobBar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-1/2 top-0 translate-x-[-50%] w-[2329px]" data-name="tob Bar">
      <TopBar />
    </div>
  );
}

export default function Component() {
  return (
    <div className="relative size-full" data-name="编辑" style={{ backgroundImage: "linear-gradient(90deg, rgba(28, 28, 28, 0.1) 0%, rgba(28, 28, 28, 0.1) 100%), linear-gradient(90deg, rgb(28, 28, 28) 0%, rgb(28, 28, 28) 100%)" }}>
      <MainContent />
      <Aside />
      <BottomBar />
      <Component66 />
      <Component70 />
      <TobBar />
    </div>
  );
}