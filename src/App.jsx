import claudeImg from './assets/claude.png'
import camImg from './assets/camera.png'
import clipImg from './assets/clip.png'
import hamImg from './assets/hamburger.png'
import Button from './button.jsx'
import Prompt from './prompt.jsx'
import ChatCard from './chatcard.jsx'
import StartChat from './startchat.jsx'
import react, { useState } from 'react'
function App() {
  const [hideSuggestions, setHideSuggestions] = useState(false)
  const [collapseChats, setCollapseChats] = useState(true)
  document.body.classList.add("bg-bg1")
  return (
    <div className='my-12 flex flex-col items-center justify-center space-y-8'>
      <p className="rounded-3xl border border-borderclr2 bg-bg3 px-3 py-2 text-text1">Using limited free plan <span className="text-purple-400 cursor-pointer transition-all hover:text-purple-300 hover:underline hover:transition-all">Upgrade</span></p>
      <p className="text-5xl text-text1 "><img src={claudeImg} className="inline size-14" />Good evening Sahaj</p>
      <StartChat />

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
    </div>
  )
}
export default App
