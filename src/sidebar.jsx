import { Link } from "react-router-dom";
import Button from "./button";
import anthropicImg from "./assets/anthropic.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ChatBars from "./chatbars.jsx";

function SideBar({ isPinned, setIsPinned }) {
  const location = useLocation();
  const [mouseover, setMouseover] = useState(false);
  let emailLeftElement = <div className="w-10"></div>;
  let logo = <i className={" nf nf-cod-layout_sidebar_left_off p-1"}></i>;
  let topRightButton = (
    <Button
      value={
        <i
          className={`nf nf-md-arrow_collapse_left ${!isPinned ? "rotate-180" : ""} inline-block text-xs text-text1 transition-all duration-300`}
        ></i>
      }
      tooltip={`${isPinned ? "Unpin sidebar" : "Pin sidebar"}`}
      tooltip_direction="right"
      onClick_function={() => {
        setIsPinned(!isPinned);
      }}
    />
  );
  let topLeftElement = (
    <Link
      to="/"
      className={`${mouseover ? "opacity-100" : ""} opacity-80 pointer-events-auto text-xl font-bold`}
    >
      Claude
    </Link>
  );
  if (window.innerWidth < 768) {
    topLeftElement = (
      <i
        className="nf nf-cod-menu pointer-events-auto text-xl"
        onClick={() => setMouseover(!mouseover)}
      ></i>
    );
    topRightButton = (
      <Button
        value={
          <i
            className={`nf nf-cod-close inline-block text-xs text-text1 transition-all duration-300`}
          ></i>
        }
        onClick_function={() => {
          setMouseover(false);
        }}
      />
    );
    emailLeftElement = (
      <span
        className={` mx-2 w-7 rounded-3xl bg-text1 p-1 text-center font-bold text-bg1 transition-all`}
      >
        SB
      </span>
    );
  }
  if (mouseover || isPinned) {
    logo = (
      <img
        src={anthropicImg}
        className="inline w-7 translate-x-1 p-1 opacity-70 relative Md:-bottom-2"
      ></img>
    );
  }
  return (
    <>
      <div
        className={`${mouseover || isPinned ? "" : "md:opacity-80"} pointer-events-none fixed z-20 flex md:ml-0 h-screen w-32 flex-col justify-between px-3 py-4 text-sm text-text1`}
        onMouseOver={() => {
          !isPinned && setMouseover(true);
        }}
        onMouseOut={() => {
          !isPinned && setMouseover(false);
        }}
      >
        {topLeftElement}
        <div
          className={`${mouseover ? "opacity-100" : ""} Md:opacity-0 flex flex-col space-y-5`}
        >
          <span
            className={`${mouseover || isPinned ? "translate-x-3" : ""} Md:opacity-0 w-7 rounded-3xl bg-text1 p-1 text-center font-bold text-bg1 transition-all`}
          >
            SB
          </span>
          {logo}
        </div>
      </div>

      <div
        className={`${mouseover ? "" : "opacity-0 md:-translate-x-32 -translate-x-96"} fixed z-10 flex h-screen w-72 flex-col justify-between border border-borderclr2 bg-sidebarclr backdrop-blur-[7px] p-2 transition-all`}
        onMouseOver={() => {
          !isPinned && setMouseover(true);
        }}
        onMouseOut={() => {
          !isPinned && setMouseover(false);
        }}
      >
        <div className="flex flex-col justify-evenly space-y-2 ">
          <div className="my-2 flex justify-between">
            <div></div>
            {topRightButton}
          </div>

          <Link
            to="/"
            className={`${location.pathname == "/" ? "bg-bg6" : "hover:bg-bg6"} m-0 cursor-pointer rounded-md px-2 py-1 font-bold text-orng`}
          >
            <i className="nf nf-md-chat_plus_outline"></i> &nbsp;Start new chat
          </Link>

          <div>
            <p className="mx-1 my-2 text-sm font-bold text-text1 opacity-90">
              Starred
            </p>
            <div className="flex items-center justify-center rounded-lg border border-borderclr2 py-8 text-xs text-text2">
              Star chats you use often
            </div>
          </div>

          <div>
            <p className="mx-1 my-2 text-sm font-bold text-text1 opacity-90">
              Recents
            </p>
            <div>
              <ChatBars
                value={"Lorem Ipsum Dolor Sit Amet"}
                selected={location.pathname == "/chat"}
              />
              <ChatBars value={"Consectetur Adipiscing Elit"} />
              <ChatBars value={"Aenean Ac Elit Sollicitudin Ipsum "} />
              <ChatBars value={"Etiam Rutrum, Est Ac Cursus"} />
              <ChatBars value={"Eiam Eortor Eonsectetur Epsum, Et Eccumsan"} />
              <ChatBars value={"Eiam Ente Eec Eurpis"} />
              <ChatBars value={"Lorem Ipsum Dolor Sit Amet"} />
              <ChatBars value={"Consectetur Adipiscing Elit"} />
              <span className="relative top-1 cursor-pointer px-1 text-sm text-text1 opacity-90 transition-all hover:opacity-100 hover:transition-all ">
                View all <i className="nf nf-cod-arrow_right"></i>
              </span>
            </div>
          </div>

          <div className="md:h-[4.2rem] h-[12.5rem]"> </div>

          <div>
            <div className="mx-auto flex w-[calc(100%-2rem)] items-center justify-center rounded-t-md border-l border-r border-t border-borderclr2 bg-bg3 py-1 text-sm text-text2">
              Free plan
            </div>
            <div className="mx-auto flex w-[calc(100%-1rem)] cursor-pointer rounded-md border border-borderclr2 bg-bg4 py-3 text-sm font-bold text-text1">
              {emailLeftElement}
              <div className="font-sans Md:translate-y-1">
                abcxyz123@gmail.com
              </div>
              <i className="nf nf-cod-chevron_down relative top-1 ml-10 text-xs"></i>
            </div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <span className="mt-2 -translate-x-3 cursor-pointer text-xs font-bold text-text2 hover:underline">
              {" "}
              <i className="nf nf-cod-question"></i> Help & support
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideBar;
