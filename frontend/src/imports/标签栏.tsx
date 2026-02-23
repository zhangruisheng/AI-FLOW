function Component1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0" data-name="Component 10">
      <div className="capitalize css-g0mm18 flex flex-col font-['Gilroy:Bold',sans-serif] justify-center leading-[0] not-italic opacity-40 relative shrink-0 text-[15px] text-black">
        <p className="css-ew64yg leading-[normal]">Workflow</p>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="backdrop-blur-[8px] bg-white content-stretch flex items-center overflow-clip px-[16px] py-[8px] relative rounded-[9999px] size-full" data-name="标签栏">
      <Component1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.05)]" />
    </div>
  );
}