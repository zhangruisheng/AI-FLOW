import svgPaths from "./svg-2deayg5n3v";

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Text Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[1.2]">Enter text …</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Component 6">
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[105px] right-[-13px] to-[rgba(255,255,255,0)] top-[calc(50%-0.14px)] translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
      <TextContainer />
    </div>
  );
}

function Component2() {
  return (
    <div className="bg-[rgba(0,0,0,0.02)] content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px p-[12px] relative rounded-[16px] w-[232px]" data-name="Component 5">
      <Component3 />
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

function IconContainer() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[20px]" data-name="Icon Container">
      <Krea />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-[24.72px] items-center min-h-px min-w-px overflow-clip relative" data-name="Container">
      <IconContainer />
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1c1c1c] text-[14px] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text Input</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['SF_Pro_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(28,28,28,0.4)] tracking-[-0.2146px]">
        <p className="css-ew64yg leading-[22.499px]">Text</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-end px-[8px] py-[4px] relative shrink-0 w-[232px]" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Component1() {
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

export default function Component() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] items-start p-[4px] relative rounded-[20px] size-full" data-name="文本节点">
      <Component2 />
      <Container />
      <Component1 />
    </div>
  );
}