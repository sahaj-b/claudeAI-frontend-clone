function ChatCard({ value, elapsed_time, isCollapsed, delay }) {
  const delay_css = isCollapsed ? '0ms' : `${delay}ms`;
  return (
    <div className={`border border-borderclr2 bg-bg5 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-bg2 hover:border-borderclr ${isCollapsed ? 'scale-90 opacity-0 pointer-events-none' : 'opacity-100 scale-100'}`} style={{
      transition: `opacity 250ms ${delay_css}, transform 250ms ${delay_css}, color 150ms 0ms, background-color 150ms 0ms, border-color 150ms 0ms`
    }}>
      <i className="text-text2 text-sm nf nf-md-chat_outline block"> </i>
      <p className="text-text1 text-md py-2">{value}</p>
      <p className="text-text2 text-sm">{elapsed_time}</p>
    </div >
  )
}
export default ChatCard
