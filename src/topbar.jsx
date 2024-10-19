import { useState, useRef, useEffect } from "react";
import Button from "./button";

function TopBar({ isPinned }) {
  const [dropDown, setDropDown] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(false);
      }
    };
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`flex justify-between py-1 text-center px-3 h-16 z-[1] w-screen bg-gradient-to-b from-bg1 via-[#2c2b28cc] from-60% via-80% fixed`}
    >
      <div className="w-[140px]"></div>
      <div ref={ref}>
        <p
          onClick={() => setDropDown(!dropDown)}
          id="drop"
          className={`transition-all text-xl mt-2 cursor-pointer text-center text-text1 rounded-xl py-1 px-2 hover:bg-bg4 ${isPinned ? "translate-x-24" : ""}`}
          style={{ transition: "transform 300ms, background-color 200ms" }}
        >
          <i className="nf nf-md-chat_outline text-sm mr-2 relative -top-0.5"></i>
          Lorem Ipsum Dolor Sit Amet
          <i className="nf text-xs ml-2 relative -top-0.5 nf-cod-chevron_down"></i>
        </p>
        <div
          className={`relative left-1/3 p-1 rounded-lg bg-bg4 w-36 border border-borderclr2 text-left ${dropDown ? "" : "hidden"}`}
        >
          <p className="text-text1 opacity-90 hover:bg-bg6 rounded-lg px-3 py-1 cursor-pointer hover:opacity-100">
            Rename
          </p>
          <p
            className={`text-text1 opacity-90 hover:bg-bg6 rounded-lg px-3 py-1 cursor-pointer hover:opacity-100 `}
          >
            Delete
          </p>
        </div>
      </div>
      <div className="-translate-x-5">
        <Button
          value={<i className="nf nf-oct-star"></i>}
          tooltip="Star chat"
          extraClass="text-xl m-1"
        />
        <Button
          value={<i className="nf nf-fa-sliders"></i>}
          tooltip="Chat controls"
          extraClass="text-xl m-1"
        />
        <Button
          value={<i className="nf nf-md-chat_plus_outline"></i>}
          tooltip="New chat"
          extraClass="text-xl bg-orng rounded-full m-2 opacity-100 hover:opacity-90 hover:bg-orng"
        />
      </div>
    </div>
  );
}
export default TopBar;
