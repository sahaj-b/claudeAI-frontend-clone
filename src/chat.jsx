import { useEffect } from "react";
import claudeImg from "./assets/claude.png";
import SideBar from "./sidebar.jsx";
import TopBar from "./topbar.jsx";
import Button from "./button.jsx";
import Chats from "./chats.jsx";
import Reply from "./reply.jsx";

function Chat({ isPinned, setIsPinned }) {
  document.body.classList.add("bg-bg1");
  useEffect(() => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  return (
    <div className="overflow-hidden">
      <SideBar isPinned={isPinned} setIsPinned={setIsPinned} />
      <TopBar isPinned={isPinned} />
      <div
        className={`${isPinned ? "translate-x-24" : ""} flex flex-col w-screen mt-16 items-center space-y-5`}
        style={{ transition: "transform 300ms" }}
      >
        <Chats />
        <div className="mt-20 w-screen max-w-3xl h-10 flex justify-between items-center">
          <Button
            value={<img src={claudeImg} />}
            tooltip="Hi, I am Claude. How can I help you today?"
            tooltip_direction="right"
            extraClass={"size-14 hover:bg-bg1 cursor-auto px-0 py-0"}
          />
          <Button
            value="Claude can make mistakes. Please double-check responses."
            tooltip="Knowledge limited past April 2024. Learn more"
            extraClass={
              "hover:bg-bg1 hover:underline text-text2 text-xs hover:text-text2 px-0 py-0"
            }
          />
        </div>
        <div className="h-24"></div>
        <Reply />
      </div>
    </div>
  );
}
export default Chat;
