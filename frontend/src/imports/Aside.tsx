import svgPaths from "./svg-5xohdiwmph";

function Group1() {
  return (
    <div className="absolute contents left-[2px] top-[2px]">
      <div className="absolute border-2 border-black border-solid left-[2px] rounded-[7.035px] size-[20px] top-[2px]" />
      <div className="absolute border-2 border-black border-solid left-[8px] rounded-[3px] size-[8px] top-[8px]" />
    </div>
  );
}

function Node() {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Node">
      <Group1 />
      <div className="absolute inset-[-2.08%_0_2.08%_0]" data-name="24*24">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="24*24" opacity="0" />
        </svg>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="输入节点">
      <Node />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[6px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative rounded-[1.5px] size-[3.75px]">
            <div aria-hidden="true" className="absolute border-[2.25px] border-black border-solid inset-[-1.125px] pointer-events-none rounded-[2.625px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[1.5px] items-center relative w-[3.75px]">
      <Frame1 />
      <div className="bg-black h-[12px] rounded-[1.5px] shrink-0 w-[3px]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex gap-[15px] items-center justify-center relative shrink-0 size-[24px]" data-name="处理节点">
      <div className="absolute h-[2.253px] left-[13.5px] top-[3px] w-[2.25px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.83436 3.83774">
            <path d={svgPaths.p3e05000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.58436" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute h-[1.7px] left-[16.5px] top-[9px] w-[1.698px]" data-name="Vector">
        <div className="absolute inset-[-35.16%_-35.21%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.89289 2.89545">
            <path d={svgPaths.p3cece00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19535" style={{ stroke: "black", strokeOpacity: "1" }} />
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[3.78px] size-[16.44px] top-[5.28px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[21px] relative shrink-0 w-[31px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Group 10">
          <circle cx="9.5" cy="4" id="Ellipse 7" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <circle cx="21.5" cy="17" id="Ellipse 8" r="3" stroke="var(--stroke-0, black)" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
          <path d={svgPaths.p18bf4ce0} id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{ stroke: "black", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Workflow() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[24px]" data-name="Workflow">
      <Group />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="工作流模板">
      <Workflow />
    </div>
  );
}

export default function Aside() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[8px] items-center justify-center overflow-clip px-[8px] py-[16px] relative rounded-[9999px] size-full" data-name="Aside">
      <Component />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component1 />
      <div className="h-0 relative shrink-0 w-[8px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 1">
            <path d="M0 0.5H8" id="Vector 132" stroke="var(--stroke-0, black)" strokeOpacity="0.05" style={{ stroke: "black", strokeOpacity: "0.05" }} />
          </svg>
        </div>
      </div>
      <Component2 />
    </div>
  );
}