import svgPaths from "./svg-1hsnnkawi0";

function Frame() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Frame">
      <div className="absolute inset-[-8.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.25 15.25">
          <g id="Frame">
            <path d="M1.125 1.125L5.625 5.625" id="Vector 99" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M9.625 5.625L14.125 1.125" id="Vector 102" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M1.125 14.125L5.625 9.625" id="Vector 101" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M9.625 9.625L14.125 14.125" id="Vector 100" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.25" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Icon />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">创作</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M1 1L5.5 5.5" id="Vector 99" stroke="currentColor" />
            <path d="M1 14L5.5 9.5" id="Vector 101" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M5.5 5.5L1 1" id="Vector 102" stroke="currentColor" />
            <path d="M5.5 9.5L1 14" id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Container1 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function IconFrame() {
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

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconFrame />
        </div>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Link:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Component2() {
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
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Component2 />
        </div>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center left-[100px] p-[8px] rounded-[9999px] top-[100px]" data-name="导航栏">
      <Container />
      <ButtonMargin />
      <LinkMargin />
      <Button />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
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

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Icon Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
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

function Container6() {
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

function Container4() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function ButtonIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Button Icon">
      <Container4 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Button:margin">
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

function LinkMargin1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Link:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <LinkIcon />
        </div>
      </div>
    </div>
  );
}

function Component4() {
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

function Button1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Component4 />
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center left-[100px] p-[8px] rounded-[9999px] top-[176px] w-[253px]" data-name="导航栏">
      <IconContainer />
      <ButtonMargin1 />
      <LinkMargin1 />
      <Button1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Frame2() {
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

function Icon5() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M1 1L5.5 5.5" id="Vector 99" stroke="currentColor" />
            <path d="M1 14L5.5 9.5" id="Vector 101" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M5.5 5.5L1 1" id="Vector 102" stroke="currentColor" />
            <path d="M5.5 9.5L1 14" id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]" data-name="Container">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Container7 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="h-[14.25px] relative w-[15.75px]" data-name="Icon Frame">
      <div className="absolute inset-[-14.91%_0_-4.39%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.75 17.0001">
          <g id="Icon Frame">
            <path d={svgPaths.p10acb280} id="Vector 99" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d={svgPaths.p97656c0} id="Vector 102" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M1.125 16.0001H11.625" id="Vector 101" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconFrame2 />
        </div>
      </div>
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Link:margin">
      <Icon7 />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">灵感</p>
      </div>
    </div>
  );
}

function Component6() {
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

function Button2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Component6 />
        </div>
      </div>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center left-[100px] p-[8px] rounded-[9999px] top-[252px]" data-name="导航栏">
      <Icon4 />
      <ButtonMargin2 />
      <LinkMargin2 />
      <Button2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Frame3() {
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

function Icon9() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Icon">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M1 1L5.5 5.5" id="Vector 99" stroke="currentColor" />
            <path d="M1 14L5.5 9.5" id="Vector 101" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[13px] relative shrink-0 w-[4.5px]" data-name="Container">
      <div className="absolute inset-[-7.69%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.5 15">
          <g id="Container">
            <path d="M5.5 5.5L1 1" id="Vector 102" stroke="currentColor" />
            <path d="M5.5 9.5L1 14" id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_2px] items-center justify-center relative shrink-0 w-[14px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Container10 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Button:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function IconFrame3() {
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

function Icon12() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <IconFrame3 />
        </div>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Link:margin">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon12 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Icon">
      <LinkMargin3 />
    </div>
  );
}

function Component8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="资产">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="èµäº§">
          <g id="Container">
            <path d={svgPaths.p24ab6f00} id="Vector 102" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
          <path d={svgPaths.p33809c00} id="Vector 103" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Component8 />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">资产</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center left-[100px] p-[8px] rounded-[9999px] top-[328px]" data-name="导航栏">
      <Icon8 />
      <ButtonMargin3 />
      <Icon11 />
      <Button3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-black relative size-full" data-name="导航栏">
      <Component1 />
      <Component3 />
      <Component5 />
      <Component7 />
    </div>
  );
}