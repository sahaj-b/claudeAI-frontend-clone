import { useEffect, useState } from "react";
import claudeImg from "./assets/claude.png";
import StartChat from "./startchat.jsx";
import RecentChats from "./recentchats.jsx";
import SideBar from "./sidebar.jsx";

function Home({ isPinned, setIsPinned }) {
  const [isLoaded, setIsLoaded] = useState(false);
  document.body.classList.add("bg-bg1");
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("load", setIsLoaded(true));
    return () => {
      window.removeEventListener("load", setIsLoaded(true));
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <SideBar isPinned={isPinned} setIsPinned={setIsPinned} />
      <div
        className={`${isPinned ? "translate-x-24" : ""} my-12 flex w-screen flex-col items-center space-y-8`}
        style={{ transition: "transform 300ms" }}
      >
        <p className="rounded-3xl border border-borderclr2 bg-bg3 px-3 py-2 text-text1">
          Using limited free plan
          <span className="cursor-pointer text-purple-400 transition-all hover:text-purple-300 hover:underline hover:transition-all">
            Upgrade
          </span>
        </p>
        <div className="flex">
          <img
            src={claudeImg}
            className={`${isLoaded ? "left-0 scale-100" : "scale-150 translate-x-[14vw]"}  relative  mt-1 inline size-12 transition-all delay-300 duration-500`}
          />
          <p
            className={`${isLoaded ? "opacity-1" : "opacity-0"} text-5xl text-text1 transition-all delay-500 duration-700`}
          >
            Good evening Sahaj
          </p>
        </div>
        <StartChat />
        <RecentChats />
      </div>
    </div>
  );
}
export default Home;
