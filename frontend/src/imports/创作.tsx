import svgPaths from "./svg-b8uhajvlx8";
import img609145664181030673088184308462517726728444269N2 from "figma:asset/d4d2110422af3cb1a7e0e6ea4671b792a124ddef.png";

function Frame() {
  return (
    <div className="relative size-[13px]" data-name="Frame">
      <div className="absolute inset-[-0.49%_0_-0.38%_-0.49%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0643 13.114">
          <g id="Frame">
            <path d="M1.125 1.125L4.125 4.125" id="Vector 99" stroke="currentColor" />
            <path d={svgPaths.p384a0fe0} id="Vector 102" stroke="currentColor" />
            <path d={svgPaths.p125b9100} id="Vector 101" stroke="currentColor" />
            <path d={svgPaths.p23239600} id="Vector 100" stroke="currentColor" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconImage() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon Image">
      <div className="absolute flex items-center justify-center left-[2.81px] size-[18.385px] top-[2.81px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center overflow-clip px-[12px] relative rounded-[9999px] shrink-0" data-name="Icon">
      <IconImage />
    </div>
  );
}

function IconContainer() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[52px] items-center overflow-clip p-[8px] relative rounded-[9999px] shrink-0" data-name="Icon Container">
      <Icon />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function LeftSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Left Section">
      <IconContainer />
    </div>
  );
}

function Frame1() {
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

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip p-[3px] relative shrink-0 size-[24px]" data-name="Icon">
      <Frame1 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-black content-stretch flex gap-[4px] h-[44px] items-center justify-center pl-[12px] pr-[16px] relative rounded-[9999px] shrink-0" data-name="Container">
      <Icon1 />
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

function Icon2() {
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
          <Icon2 />
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

function Icon3() {
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
          <Icon3 />
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

function Frame6() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] h-[56px] items-center p-[8px] relative rounded-[9999px] shrink-0">
      <Container />
      <ButtonMargin />
      <LinkMargin />
      <Button />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
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

function DarkModeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Dark Mode Icon">
      <IconFrame1 />
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <DarkModeIcon />
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[52px] items-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0" data-name="Icon Container">
      <Component3 />
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

function Component4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[52px]" data-name="Component 10">
      <UserIcon />
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex h-[52px] items-center overflow-clip py-[8px] relative rounded-[9999px] shrink-0" data-name="Icon Container">
      <Component4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}

function RightSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-h-px min-w-px relative" data-name="Right Section">
      <IconContainer1 />
      <IconContainer2 />
    </div>
  );
}

function TopBar() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Top Bar">
      <LeftSection />
      <Frame6 />
      <RightSection />
    </div>
  );
}

function ImageTitle() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[11px] shrink-0" data-name="Image Title">
      <div className="css-g0mm18 flex flex-col font-['Gilroy:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="css-ew64yg leading-[normal]">参考图</p>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="bg-white content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0 size-[56px]" data-name="Image Container">
      <div aria-hidden="true" className="absolute border-[1.474px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="609145664_18103067308818430_8462517726728444269_n 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
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

function EffectIcon() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="Effect Icon">
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
      <div className="absolute flex items-center justify-center left-[2.52px] size-[10.96px] top-[3.52px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "1443.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function IconFrame2() {
  return (
    <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon Frame">
          <g id="Base" />
          <path d={svgPaths.pb7a0100} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p26f64880} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function SwapIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Swap Icon">
      <IconFrame2 />
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 13">
          <path d={svgPaths.p27930380} fill="currentColor" />
          <path d={svgPaths.p18a5d080} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10px]">
      <div className="absolute inset-[-6.25%_-17.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <g id="Frame 2117130727">
            <g id="Group 15">
              <path d="M5.25 0.75H8.25" id="Vector 110" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
              <path d="M0.75 2.75H12.75" id="Vector 111" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
            </g>
            <path d={svgPaths.pc502b80} id="Vector 112" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DeleteIcon() {
  return (
    <div className="content-stretch flex h-[16px] items-center overflow-clip px-[3px] py-[2px] relative shrink-0" data-name="Delete Icon">
      <Frame7 />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[12px] items-start justify-center px-[16px] py-[10px] right-[0.5px] rounded-[30px]" data-name="Action Bar">
      <EffectIcon />
      <SwapIcon />
      <IconContainer3 />
      <DeleteIcon />
    </div>
  );
}

function ImageSection() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Image Section">
      <ImageTitle />
      <ImageContainer />
      <div className="absolute h-[443px] left-[calc(50%+0.25px)] top-[174px] translate-x-[-50%] w-[332px]" data-name="609145664_18103067308818430_8462517726728444269_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
      <ActionBar />
    </div>
  );
}

function ActionContainer() {
  return (
    <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[34px] shrink-0" data-name="Action Container">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[34px]" />
      <div className="css-g0mm18 flex flex-col font-['Gilroy:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="css-ew64yg leading-[normal]">开始视觉反推</p>
      </div>
    </div>
  );
}

function Frame5() {
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative w-[2.5px]">
      <Frame5 />
      <div className="bg-black h-[8px] rounded-[1px] shrink-0 w-[2px]" />
    </div>
  );
}

function EffectIcon1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 size-[16px]" data-name="Effect Icon">
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
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function EffectContainer() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[10px] p-[4px] top-[10px]" data-name="Effect Container">
      <EffectIcon1 />
      <div className="css-g0mm18 flex flex-col font-['Gilroy:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="css-ew64yg leading-[normal]">视觉解构</p>
      </div>
    </div>
  );
}

function BottomSection() {
  return (
    <div className="bg-white h-[200px] relative rounded-[20px] shrink-0 w-full" data-name="Bottom Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center p-[10px] relative size-full">
          <ActionContainer />
          <EffectContainer />
        </div>
      </div>
    </div>
  );
}

function LeftPanelContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Left Panel Content">
      <ImageSection />
      <BottomSection />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="Left Panel">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <LeftPanelContent />
      </div>
    </div>
  );
}

function ResultTitle() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[11px] shrink-0" data-name="Result Title">
      <div className="css-g0mm18 flex flex-col font-['Gilroy:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="css-ew64yg leading-[normal]">生成结果</p>
      </div>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0 size-[56px]" data-name="Image Container">
      <div aria-hidden="true" className="absolute border-[1.474px] border-black border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="609145664_18103067308818430_8462517726728444269_n 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0 size-[56px]" data-name="Image Container">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="609145664_18103067308818430_8462517726728444269_n 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[12px] shrink-0 size-[56px]" data-name="Image Container">
      <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[8px]" data-name="609145664_18103067308818430_8462517726728444269_n 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="创作记录">
      <ImageContainer1 />
      <ImageContainer2 />
      <ImageContainer3 />
    </div>
  );
}

function RightPanelContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="Right Panel Content">
      <ResultTitle />
      <Component2 />
      <div className="absolute h-[557px] left-[calc(50%-0.25px)] top-[117px] translate-x-[-50%] w-[418px]" data-name="609145664_18103067308818430_8462517726728444269_n 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img609145664181030673088184308462517726728444269N2} />
      </div>
    </div>
  );
}

function AdjustIcon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Adjust Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Adjust Icon">
          <path d={svgPaths.p382b0b80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame 13">
          <path d={svgPaths.p27930380} fill="currentColor" />
          <path d={svgPaths.p18a5d080} id="Vector 1" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10px]">
      <div className="absolute inset-[-6.25%_-17.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 13.5">
          <g id="Frame 2117130727">
            <g id="Group 15">
              <path d="M5.25 0.75H8.25" id="Vector 110" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
              <path d="M0.75 2.75H12.75" id="Vector 111" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
            </g>
            <path d={svgPaths.pc502b80} id="Vector 112" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DeleteIcon1() {
  return (
    <div className="content-stretch flex h-[16px] items-center overflow-clip px-[3px] py-[2px] relative shrink-0" data-name="Delete Icon">
      <Frame8 />
    </div>
  );
}

function ActionBar1() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex gap-[12px] items-start justify-center px-[16px] py-[10px] right-0 rounded-[30px]" data-name="Action Bar">
      <AdjustIcon />
      <IconContainer4 />
      <DeleteIcon1 />
    </div>
  );
}

function RightPanelContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative w-full" data-name="Right Panel Content">
      <RightPanelContent1 />
      <ActionBar1 />
    </div>
  );
}

function RightPanel() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[20px]" data-name="Right Panel">
      <div className="content-stretch flex flex-col items-start p-[10px] relative size-full">
        <RightPanelContent />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px min-w-px relative w-full" data-name="Main Content">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-px relative">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#62748e] text-[12px] tracking-[1.2px] uppercase">最近使用</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative">
        <p className="css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#1d293d] text-[12px] text-center">全部</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Heading />
        <Button1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">📮</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">雪夜邮筒</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container8 />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🍃</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">生活美学</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container9 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🪞</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">镜面自拍</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container10 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">👥</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">前后视图</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container11 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">👤</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">纯净写真</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container12 />
        <Text9 />
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🦶</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">极端透视</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container13 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🎞️</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">真实胶片</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container14 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🔍</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[40px] not-italic text-[#62748e] text-[12px] text-center top-px translate-x-[-50%]">高清修复</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container15 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[36px] relative shrink-0 w-[30px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[36px] not-italic relative shrink-0 text-[#0f172b] text-[30px] text-center tracking-[0.3955px]">🎬</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[64px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_0px_0px_4px_rgba(0,0,0,0.05),0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[2px] relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[16px] relative shrink-0 w-[80px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute css-4hzbpn font-['Inter:Bold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[16px] left-[42px] not-italic text-[12px] text-black text-center top-px translate-x-[-50%] w-[84px]">电影分镜九宫格</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[88px] relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-full items-center relative">
        <Container16 />
        <Text17 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1054px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center overflow-clip relative rounded-[inherit] size-full">
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function BottomSettingsPanel() {
  return (
    <div className="h-[192px] relative rounded-[24px] shrink-0 w-[1120.5px]" data-name="BottomSettingsPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-px pt-[17px] relative rounded-[inherit] size-full">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function LeftSection1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start max-w-[400px] overflow-clip px-[8px] relative rounded-[30px] self-stretch shrink-0 w-[400px]" data-name="Left Section">
      <BottomSettingsPanel />
    </div>
  );
}

function AddImageText() {
  return (
    <div className="content-stretch flex items-start py-[8px] relative shrink-0" data-name="Add Image Text">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#90a1b9] text-[16px] tracking-[-0.3125px]">添加图片</p>
    </div>
  );
}

function ItalicText() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10.5px]" data-name="Italic Text">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 12">
        <g id="Italic Text">
          <path d="M5.25 11L5.25 2" id="Vector 3" stroke="var(--stroke-0, black)" strokeLinecap="round" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M0.75 6.5H9.75" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[9px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Medium','Noto_Sans_SC:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[12px] left-[6.5px] not-italic text-[#90a1b9] text-[8px] text-center top-[0.13px] tracking-[0.2057px] translate-x-[-50%]">图片</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col gap-[5.5px] items-center justify-center overflow-clip pb-[1.5px] relative rounded-[14px] shadow-[0px_0px_0px_1px_#e2e8f0] shrink-0 size-[88px]" data-name="Button">
      <ItalicText />
      <Text18 />
    </div>
  );
}

function ImageControlBar() {
  return (
    <div className="h-full relative rounded-[40px] shrink-0" data-name="ImageControlBar">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13px] h-full items-start px-[20px] py-[12px] relative">
        <AddImageText />
        <Button11 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[rgba(226,232,240,0.6)] h-full relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function TextArea() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[10px] py-[8px] relative size-full">
          <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal leading-[26px] not-italic opacity-40 relative shrink-0 text-[#90a1b9] text-[16px] tracking-[-0.3125px]">描述您想要生成的画面...</p>
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-start min-h-px min-w-px relative" data-name="Container">
      <TextArea />
    </div>
  );
}

function PromptInput1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative w-full" data-name="Prompt Input">
      <Container19 />
    </div>
  );
}

function Option() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Option">
      <p className="css-ew64yg font-['Inter:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px]">Gemini 2.5 Flash (最新免费)</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex gap-[10px] items-start p-[10px] relative shrink-0" data-name="Dropdown">
      <Option />
    </div>
  );
}

function ItalicText1() {
  return <div className="shrink-0 size-[10px]" data-name="Italic Text" />;
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <ItalicText1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] content-stretch flex flex-col h-full items-start justify-center px-[7px] relative rounded-[16px] shrink-0 w-[206px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container22 />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[15px] relative shrink-0 w-[39px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute css-ew64yg font-['Inter:Bold','Noto_Sans_JP:Bold',sans-serif] font-bold leading-[15px] left-[8px] not-italic text-[#90a1b9] text-[10px] top-[0.5px] tracking-[1.6172px] uppercase">数量</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center">1</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-center">2</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative rounded-[14px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="css-ew64yg font-['Inter:Black',sans-serif] font-black leading-[16px] not-italic relative shrink-0 text-[#90a1b9] text-[12px] text-center">4</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[28px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start relative size-full">
        <Button12 />
        <Button13 />
        <Button14 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] content-stretch flex gap-[8px] h-full items-center px-[7px] py-px relative rounded-[16px] shrink-0 w-[157px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text19 />
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[16px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#90a1b9] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Text20() {
  return (
    <div className="relative shrink-0 w-[24.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
        <p className="css-ew64yg font-['Inter:Bold',sans-serif] font-bold leading-[16px] not-italic relative shrink-0 text-[#45556c] text-[12px] text-center">1:1</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[rgba(248,250,252,0.8)] content-stretch flex gap-[8px] h-full items-center px-[13px] py-px relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#f1f5f9] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container25 />
      <Text20 />
    </div>
  );
}

function OptionsContainer() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Options Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative size-full">
        <Container21 />
        <Container23 />
        <Button15 />
      </div>
    </div>
  );
}

function InterfaceFavoriteStar5StreamlinePlump() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="interface-favorite-star-5--Streamline-Plump">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_56_507)" id="interface-favorite-star-5--Streamline-Plump">
          <path clipRule="evenodd" d={svgPaths.p332a700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.p31f68800} fill="var(--fill-0, white)" id="Vector_2" style={{ fill: "white", fillOpacity: "1" }} />
          <path d={svgPaths.pfca0100} fill="var(--fill-0, white)" id="Vector_3" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_56_507">
            <rect fill="white" height="20" style={{ fill: "white", fillOpacity: "1" }} width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ItalicText2() {
  return (
    <div className="relative shrink-0" data-name="Italic Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative">
        <p className="css-ew64yg font-['Inter:Medium','Noto_Sans_JP:Medium',sans-serif] font-medium leading-[26px] not-italic relative shrink-0 text-[14px] text-white tracking-[-0.3125px]">生成</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-black h-[48px] relative rounded-[16px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center pl-[20px] pr-[28px] relative">
        <InterfaceFavoriteStar5StreamlinePlump />
        <ItalicText2 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center pl-[4px] relative w-full">
          <OptionsContainer />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function PromptInput() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[40px]" data-name="PromptInput">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[13px] items-start py-[12px] relative size-full">
        <PromptInput1 />
        <Container20 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] self-stretch" data-name="Container">
      <div className="content-stretch flex gap-[8px] items-start px-[16px] relative size-full">
        <ImageControlBar />
        <Container18 />
        <PromptInput />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative rounded-[20px] shrink-0 w-full" data-name="Container">
      <LeftSection1 />
      <Container17 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full" data-name="创作">
      <TopBar />
      <MainContent />
      <Container4 />
    </div>
  );
}