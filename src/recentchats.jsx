import { useState } from 'react'
import Button from './button.jsx'
import ChatCard from './chatcard.jsx'
function RecentChats() {
  const [collapseChats, setCollapseChats] = useState(false)
  return (
    <div className='flex flex-col w-screen max-w-2xl'>
      <div className='flex justify-between'>
        <div className='flex'>
          <p className='text-text1 font-bold text-sm'><i className='nf nf-md-chat_outline text-btext'></i> &nbsp; Your recent chats &nbsp;</p>
          <Button value={<><i className={`nf nf-fa-chevron_up text-xs transition-all duration-300 inline-block ${collapseChats ? 'rotate-180 relative -top-0.5' : ''}`}></i><span className='text-sm text-text2'>{collapseChats && ('\u00A0 Show')}</span></>} extraClass='relative  -top-1' onClick_function={() => { setCollapseChats(!collapseChats) }} />
        </div>
        <span className='text-text2 text-sm cursor-pointer transition-all hover:transition-all hover:text-text1 hover:underline'>View all <i className='nf nf-cod-arrow_right'></i></span>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <ChatCard value="Lorem Ipsum Dolor Sit Amet" elapsed_time="5 hours ago" isCollapsed={collapseChats} delay={0} />
        <ChatCard value="Consectetur Adipiscing Elit" elapsed_time="6 hours ago" isCollapsed={collapseChats} delay={100} />
        <ChatCard value="Aenean Ac Elit Sollicitudin Ipsum " elapsed_time="10 hours ago" isCollapsed={collapseChats} delay={150} />
        <ChatCard value="Etiam Rutrum, Est Ac Cursus" elapsed_time="1 day ago" isCollapsed={collapseChats} delay={200} />
        <ChatCard value="Eiam Eortor Eonsectetur Epsum, Et Eccumsan" elapsed_time="1 day ago" isCollapsed={collapseChats} delay={250} />
        <ChatCard value="Eiam Ente Eec Eurpis" elapsed_time="2 days ago" isCollapsed={collapseChats} delay={300} />
      </div>
    </div>
  )
}
export default RecentChats
