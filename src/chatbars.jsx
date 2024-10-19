import { Link } from "react-router-dom";
function ChatBars({ value }) {
  return (
    <Link
      to={"/chat"}
      className={`relative -left-1 block cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg px-2 py-1 text-sm text-text1 transition-all hover:bg-bg6`}
    >
      <i className="nf nf-md-chat_outline"></i> <span>&nbsp;{value}</span>
    </Link>
  );
}
export default ChatBars;
