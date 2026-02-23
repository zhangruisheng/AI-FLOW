import svgPaths from "./svg-wn5eva58rf";

function Component1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="编辑">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ç¼è¾">
          <path d={svgPaths.p265c6080} fill="var(--fill-0, black)" id="Union" style={{ fill: "black", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
      <Component1 />
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center">
        <p className="css-ew64yg leading-[normal]">Basic Workflow Information</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[40px] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[15px] py-[10px] relative size-full">
          <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black">
            <p className="css-ew64yg leading-[normal]">Workflow</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.4)] text-center">
        <p className="css-ew64yg leading-[normal]">Name</p>
      </div>
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[120px] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="content-stretch flex items-start p-[15px] relative size-full">
        <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] relative shrink-0 text-[13px] text-black" style={{ fontVariationSettings: "'wght' 700" }}>
          <p className="css-ew64yg leading-[normal]">一个简单流程</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-[rgba(0,0,0,0.4)] text-center">
        <p className="css-ew64yg leading-[normal]">introduce</p>
      </div>
      <Frame1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] items-start overflow-clip px-[10px] py-[15px] relative rounded-[20px] size-full" data-name="信息编辑">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}