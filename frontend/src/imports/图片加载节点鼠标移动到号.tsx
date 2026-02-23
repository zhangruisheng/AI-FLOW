import svgPaths from "./svg-0rolesr1t5";
import imgGeneratedVisuals from "figma:asset/2d7160601086bc4a3294287ad45cd52a2430ea18.png";

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

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="放大">
      <Group3 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]" data-name="Component 12">
      <Component3 />
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

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[16px]" data-name="跳过">
      <div className="flex items-center justify-center relative shrink-0 size-[11.899px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "22.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]">
      <Component4 />
    </div>
  );
}

function Frame1() {
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

function Component5() {
  return (
    <div className="content-stretch flex h-[16px] items-center overflow-clip px-[3px] py-[2px] relative shrink-0" data-name="删除">
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[8px] shrink-0 size-[24px]">
      <Component5 />
    </div>
  );
}

function Component6() {
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
      <Component6 />
    </div>
  );
}

function Component2() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[8px] h-[32px] items-center px-[12px] relative rounded-[16px] shrink-0" data-name="节点工具栏">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Component12 />
      <Frame3 />
      <Frame2 />
      <Component10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[12.67%_12.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0002 17.9193">
        <g id="Group 6">
          <path d={svgPaths.p31b1ae40} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p807df80} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="替换">
      <Group />
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute bg-[rgba(28,28,28,0.4)] bottom-[20px] content-stretch flex gap-[4px] items-center left-1/2 opacity-0 overflow-clip pl-[16px] pr-[20px] py-[8px] rounded-[47px] translate-x-[-50%]" data-name="按钮">
      <Component11 />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white tracking-[-0.2146px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">替换图片</p>
      </div>
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative rounded-[16px] w-full" data-name="Component 6">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[80px] right-[-4px] to-[rgba(255,255,255,0)] top-[calc(50%-0.36px)] translate-y-[-50%] via-1/2 via-white w-px" data-name="Vertical Divider" />
      <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Generated visuals">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGeneratedVisuals} />
      </div>
      <Component9 />
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

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon container">
      <Krea />
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

function Component7() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] h-[280px] items-start p-[4px] relative rounded-[20px] shrink-0 w-[240px]" data-name="图片节点">
      <Component8 />
      <Container />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute left-[250px] size-[16px] top-[132px]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="5" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Component7 />
      <Component13 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-center relative shrink-0">
      <Component2 />
      <Frame5 />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="节点展示">
      <Frame4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative size-full" data-name="图片加载节点-鼠标移动到+号">
      <Component1 />
    </div>
  );
}