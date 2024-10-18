import { useEffect, useState } from 'react'
import claudeImg from './assets/claude.png'
import StartChat from './startchat.jsx'
import RecentChats from './recentchats.jsx'
import SideBar from './sidebar.jsx'
function App() {
  const [isPinned, setIsPinned] = useState(false)
  document.body.classList.add("bg-bg1")
  useEffect(() => {
    const handleLoad = () => {
      const logo = document.getElementById('logo');
      const greeting = document.getElementById('greeting');
      logo.style.left = '0';
      logo.style.transform = 'scale(1)';
      greeting.style.opacity = '1';
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  return (
    <div className='overflow-hidden'>
      <SideBar isPinned={isPinned} setIsPinned={setIsPinned} />
      <div className={`${isPinned ? 'translate-x-24' : ''} w-screen my-12 flex flex-col items-center space-y-8`} style={{ transition: "transform 300ms" }}>
        <p className="rounded-3xl border border-borderclr2 bg-bg3 px-3 py-2 text-text1">Using limited free plan <span className="text-purple-400 cursor-pointer transition-all hover:text-purple-300 hover:underline hover:transition-all">Upgrade</span></p>
        <div className='flex'><img id='logo' src={claudeImg} className=" delay-300 inline relative size-12 mt-1 transition-all duration-500 scale-150 translate-x-[14vw]" /><p id='greeting' className="text-5xl text-text1 opacity-0 transition-all duration-700 delay-500">Good evening Sahaj</p></div>
        <StartChat />
        <RecentChats />
      </div>
    </div>
  )
}
export default App
