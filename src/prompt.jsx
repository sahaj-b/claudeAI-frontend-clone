function Prompt({ value, isHidden }) {
  return (
    <>
      <div
        className={`${isHidden ? "opacity-0 scale-90" : ""} group relative m-2 ml-4 md:ml-2 flex md:w-2/5 cursor-pointer items-center rounded-xl border md:border-borderclr2 border-borderclr bg-bg4 px-3 md:py-2 py-4 text-sm text-text1 hover:border-btext hover:bg-bbg hover:text-btext`}
        style={{
          transition:
            "opacity 300ms 50ms, transform 300ms 50ms, color 150ms 0ms, background-color 150ms 0ms, border-color 150ms 0ms",
        }}
      >
        {value}
        <div className="absolute -left-[2%] top-[85%] size-3 rounded-3xl border md:border-borderclr2 border-borderclr bg-bg4 group-hover:border-btext group-hover:bg-bbg"></div>
        <div className="absolute -left-[3%] top-[103%] size-1 rounded-3xl border md:border-borderclr2 border-borderclr bg-bg4 group-hover:border-btext group-hover:bg-bbg"></div>
        <span className="absolute top-[110%] z-20 hidden translate-x-1/3 text-nowrap rounded-md bg-black px-2 py-1 text-xs text-white group-hover:inline-block">
          Try this prompt
        </span>
      </div>
    </>
  );
}
export default Prompt;
