import { useState } from "react";
function Question({ value }) {
  const [hovering, setHovering] = useState(false);
  return (
    <div
      className="relative flex justify-left bg-bg4 text-text1 rounded-xl p-3 w-screen max-w-3xl Md:max-w-[23rem]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <span className="flex items-center justify-center size-7 mr-2 text-sm rounded-3xl bg-text1 p-2 text-center font-bold text-bg1">
        SB
      </span>
      <p>{value}</p>
      <i
        className={`${hovering ? "scale-100" : "scale-0"} absolute -bottom-2 -right-1 text-text2 border border-borderclr2 overflow-hidden rounded-lg cursor-pointer p-1 text-sm w-6 hover:w-14   whitespace-nowrap transition-all duration-200 nf nf-cod-edit bg-bg5 hover:text-text1`}
      >
        &nbsp; Edit
      </i>
    </div>
  );
}
export default Question;
