import { useState } from 'react'
import claudeImg from './assets/claude.png'
import StartChat from './startchat.jsx'
import RecentChats from './recentchats.jsx'
import SideBar from './sidebar.jsx'
function App() {
  const [isPinned, setIsPinned] = useState(false)
  document.body.classList.add("bg-bg1")
  return (
    <div className='overflow-hidden'>
      <SideBar isPinned={isPinned} setIsPinned={setIsPinned} />
      <div className={`${isPinned ? 'translate-x-24' : ''} w-screen my-12 flex flex-col items-center space-y-8`} style={{ transition: "transform 300ms" }}>
        <p className="rounded-3xl border border-borderclr2 bg-bg3 px-3 py-2 text-text1">Using limited free plan <span className="text-purple-400 cursor-pointer transition-all hover:text-purple-300 hover:underline hover:transition-all">Upgrade</span></p>
        <p className="text-5xl text-text1 "><img src={claudeImg} className="inline size-14" />Good evening Sahaj</p>
        <StartChat />
        <RecentChats />
      </div>
    </div>
  )
}
export default App
