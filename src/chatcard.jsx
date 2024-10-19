import { Link } from "react-router-dom";
function ChatCard({ value, elapsed_time, isCollapsed, delay }) {
  const delay_css = isCollapsed ? "0ms" : `${delay}ms`;
  return (
    <Link
      to="/chat"
      className={`${isCollapsed ? "scale-90 pointer-events-none" : "opacity-100 scale-100"} cursor-pointer rounded-xl border border-borderclr2 bg-bg5 p-3 opacity-0 transition-all duration-300 hover:border-borderclr hover:bg-bg2`}
      style={{
        transition: `opacity 250ms ${delay_css}, transform 250ms ${delay_css}, color 150ms 0ms, background-color 150ms 0ms, border-color 150ms 0ms`,
      }}
    >
      <i className="nf nf-md-chat_outline block text-sm text-text2"> </i>
      <p className="text-md py-2 text-text1">{value}</p>
      <p className="text-sm text-text2">{elapsed_time}</p>
    </Link>
  );
}
export default ChatCard;
