import { Link } from "react-router-dom";
import Button from "./button";
import anthropicImg from "./assets/anthropic.png";
import { useState } from "react";
import ChatBars from "./chatbars.jsx";

function SideBar({ isPinned, setIsPinned }) {
  const [mouseover, setMouseover] = useState(false);
  var logo = <i className={" nf nf-cod-layout_sidebar_left_off p-1"}></i>;
  if (mouseover || isPinned) {
    logo = (
      <img
        src={anthropicImg}
        className="inline w-7 translate-x-1 p-1 opacity-70"
      ></img>
    );
  }
  return (
    <>
      <div
        className={`${mouseover || isPinned ? "" : "opacity-80"} pointer-events-none fixed z-20 flex h-screen w-32 flex-col justify-between px-3 py-4 text-sm text-text1`}
        onMouseOver={() => {
          !isPinned && setMouseover(true);
        }}
        onMouseOut={() => {
          !isPinned && setMouseover(false);
        }}
      >
        <Link to="/" className="pointer-events-auto text-xl font-bold">
          Claude
        </Link>
        <div className="flex flex-col space-y-5">
          <span
            className={`${mouseover || isPinned ? "translate-x-3" : ""} w-7 rounded-3xl bg-text1 p-1 text-center font-bold text-bg1 transition-all`}
          >
            SB
          </span>
          {logo}
        </div>
      </div>

      <div
        className={`${mouseover ? "" : "opacity-0 -translate-x-32 "} fixed z-10 flex h-screen w-72 flex-col justify-between border border-borderclr2 bg-sidebarclr p-2 transition-all`}
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
          </div>

          <Link
            to="/"
            className="m-0 cursor-pointer rounded-md bg-bg6 px-2 py-1 font-bold text-orng"
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
              <ChatBars value={"Lorem Ipsum Dolor Sit Amet"} />
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

          <div className="h-[4.2rem]"> </div>

          <div>
            <div className="mx-auto flex w-[calc(100%-2rem)] items-center justify-center rounded-t-md border-l border-r border-t border-borderclr2 bg-bg3 py-1 text-sm text-text2">
              Free plan
            </div>
            <div className="mx-auto flex w-[calc(100%-1rem)] cursor-pointer rounded-md border border-borderclr2 bg-bg4 py-3 text-sm font-bold text-text1">
              <div className="w-10"></div>
              <div>abcxyz123@gmail.com</div>
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
