function Component() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="节点">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="èç¹">
          <circle cx="8" cy="8" fill="var(--fill-0, white)" id="Ellipse 1" r="5" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[10px]">
      <div className="absolute inset-[-7.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <g id="Group 1">
            <path d="M1 6H11" id="Vector 3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
            <path d="M6 11L6 1" id="Vector 4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "black", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[37px] shrink-0 size-[24px]" data-name="+">
      <Group1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative rounded-[37px] shrink-0 w-[24px]" data-name="+">
      <Component1 />
    </div>
  );
}

export default function Frame2117130709() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full">
      <Component />
      <Component2 />
    </div>
  );
}