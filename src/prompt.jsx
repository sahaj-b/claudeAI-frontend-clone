function Prompt({ value, isHidden }) {
  return (
    <>
      <div className={`flex items-center w-2/5 m-2 text-sm group cursor-pointer rounded-xl border border-borderclr2 bg-bg4 px-3 py-2 text-text1 relative hover:border-btext hover:bg-bbg hover:text-btext z-0 ${isHidden ? 'opacity-0 scale-90' : ''}`} style={{ transition: "opacity 300ms 50ms, transform 300ms 50ms, color 150ms 0ms, background-color 150ms 0ms, border-color 150ms 0ms" }}>{value}
        <div className="rounded-3xl bg-bg4 size-3 border border-borderclr2 absolute -left-[2%] top-[85%] group-hover:bg-bbg group-hover:border-btext"></div>
        <div className="rounded-3xl bg-bg4 size-1 border border-borderclr2 absolute -left-[3%] top-[103%] group-hover:bg-bbg group-hover:border-btext"></div>
        <span className="top-[110%] translate-x-1/3 text-xs text-white rounded-md bg-black px-2 py-1 absolute text-nowrap hidden group-hover:inline-block z-20">
          Try this prompt
        </span>
      </div>
    </>
  )
}
export default Prompt
