import svgPaths from "./svg-cgmnt1o3om";

function Component2() {
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

function Component1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[6px] relative rounded-[8px] shrink-0 size-[16px]" data-name="文本优化">
      <Component2 />
    </div>
  );
}

function Component4() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[16px] shrink-0 w-full" data-name="Component 5">
      <div className="flex flex-col items-end justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-end justify-end p-[12px] relative w-full">
          <p className="css-4hzbpn font-['SF_Pro_Display:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#1c1c1c] text-[12px] tracking-[-0.2146px] w-[min-content]">{`The image shows a person sitting on a chair with their hands clasped together. The individual is dressed in a black suit, and their hair is long and dark. The background consists of a white curtain, which creates a soft, diffused light effect. The person appears to be in a contemplative or relaxed pose, with their head slightly bowed. The image has a minimalist and professional aesthetic, with a focus on the subject and the subtle lighting. `}</p>
          <Component1 />
        </div>
      </div>
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

function Component3() {
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

export default function Component() {
  return (
    <div className="backdrop-blur-[10px] bg-white content-stretch flex flex-col gap-[2px] items-start p-[4px] relative rounded-[20px] size-full" data-name="文本节点">
      <Component4 />
      <Container />
      <Component3 />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] h-[60px] right-[-2px] to-[rgba(255,255,255,0)] top-[calc(50%-0.36px)] translate-y-[-50%] via-1/2 via-white w-[2px]" data-name="Vertical Divider" />
    </div>
  );
}