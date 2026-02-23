import svgPaths from "./svg-3wlogtnfkf";

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
      <div className="absolute flex items-center justify-center left-[3.74px] size-[24.513px] top-[3.74px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[56px] items-center justify-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0 w-[64px]" data-name="Icon Container">
      <IconImage />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] opacity-40 relative shrink-0 text-[15px] text-black" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="css-ew64yg leading-[normal]">当前工作流</p>
      </div>
    </div>
  );
}

function Workflow() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Workflow">
      <Component2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex h-[52px] items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Medium','Noto_Sans_JP:Medium',sans-serif] justify-center leading-[0] relative shrink-0 text-[15px] text-black" style={{ fontVariationSettings: "'wght' 500" }}>
        <p className="css-ew64yg leading-[normal]">工作流2</p>
      </div>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Edit">
          <path d={svgPaths.p2136c500} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Workflow1() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Workflow 2">
      <Component3 />
      <Edit />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Group() {
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
      <Group />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[56px]" data-name="Component 10">
      <Add1 />
    </div>
  );
}

function Add() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Add">
      <Component4 />
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

function Component() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col items-center justify-center px-[24px] py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="上传">
      <Upload />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Left Section">
      <IconContainer />
      <Workflow />
      <Workflow1 />
      <Add />
      <Component />
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

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[44px]" data-name="Icon Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[8px] relative size-full">
          <Icon />
        </div>
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
            <path d="M1 1L5.5 5.5" id="Vector 99" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M1 14L5.5 9.5" id="Vector 101" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
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
            <path d="M5.5 5.5L1 1" id="Vector 102" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
            <path d="M5.5 9.5L1 14" id="Vector 100" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "white", strokeOpacity: "1" }} />
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

function ButtonIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Button Icon">
      <Container1 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="bg-[#1c1c1c] content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Button:margin">
      <ButtonIcon />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[14px] text-white" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="css-ew64yg leading-[normal]">编辑</p>
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

function LinkIcon() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Link Icon">
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
          <LinkIcon />
        </div>
      </div>
    </div>
  );
}

function Component1() {
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
          <Component1 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center p-[8px] relative rounded-[9999px] shrink-0">
      <IconContainer1 />
      <ButtonMargin />
      <LinkMargin />
      <Button />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative" data-name="Container">
      <Frame2 />
    </div>
  );
}

function IconFrame1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d={svgPaths.p3106a200} fill="var(--stroke-0, black)" id="Subtract" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function DarkMode1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dark Mode">
      <IconFrame1 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <DarkMode1 />
    </div>
  );
}

function DarkMode() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Dark Mode">
      <Component5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="User Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="User Icon">
          <path d={svgPaths.p356e7680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <UserIcon />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center justify-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0 size-[56px]" data-name="Icon Container">
      <Component6 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Right Section">
      <DarkMode />
      <IconContainer2 />
    </div>
  );
}

export default function TopBar() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full" data-name="Top Bar">
      <LeftSection />
      <Container />
      <RightSection />
    </div>
  );
}