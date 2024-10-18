function ChatBars({ value }) {
  return (
    <div className={`rounded-lg cursor-pointer transition-all text-text1 text-sm px-2 py-1 hover:bg-bg6 whitespace-nowrap overflow-hidden overflow-ellipsis relative -left-1`}>
      <i className="nf nf-md-chat_outline"></i> <span>&nbsp;{value}</span>
    </div >
  )
}
export default ChatBars
