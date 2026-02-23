import imgImage from "figma:asset/427ddd34e517e3752ac06a4505e101313cc6804a.png";

function Component() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="分割线">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 2">
        <g id="åå²çº¿">
          <path d="M20 1H40" id="Vector 135" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Component1() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="分割线">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 2">
        <g id="åå²çº¿">
          <path d="M20 1H40" id="Vector 135" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="h-[2px] relative shrink-0 w-full" data-name="分割线">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 2">
        <g id="åå²çº¿">
          <path d="M20 1H40" id="Vector 135" stroke="currentColor" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[60px]" data-name="Container">
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <Component />
      <div className="aspect-[59/59] relative rounded-[8px] shrink-0 w-full" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImage} />
      </div>
      <Component1 />
      <Container2 />
      <Component2 />
      <Container3 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex items-center p-[10px] relative rounded-[20px] size-full" data-name="Container">
      <Container1 />
    </div>
  );
}