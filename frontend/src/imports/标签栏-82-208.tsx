import svgPaths from "./svg-79gga1yhii";

function Component3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-black">
        <p className="css-ew64yg leading-[normal]">Workflow</p>
      </div>
    </div>
  );
}

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

function Component2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="删除">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="å é¤">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex gap-[7px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] size-full" data-name="标签栏">
      <Component3 />
      <Component1 />
      <Component2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}