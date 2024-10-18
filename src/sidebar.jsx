import Button from "./button"
import anthropicImg from "./assets/anthropic.png"
import { useState } from 'react'
import ChatBars from './chatbars.jsx'

function SideBar({ isPinned, setIsPinned }) {
  const [mouseover, setMouseover] = useState(false)
  var logo = (<i className={" nf nf-cod-layout_sidebar_left_off p-1"}></i>)
  if (mouseover || isPinned) {
    logo = (<img src={anthropicImg} className="opacity-70 w-7 inline p-1 translate-x-1"></img>)
  }
  return (
    <>
      <div className={`${(mouseover || isPinned) ? '' : 'opacity-80'} text-text1 text-sm fixed h-screen w-32 py-4 px-3 flex flex-col justify-between z-20 pointer-events-none`} onMouseOver={() => { !isPinned && setMouseover(true) }} onMouseOut={() => { !isPinned && setMouseover(false) }}>
        <span className="text-xl font-bold">Claude</span>
        <div className="flex flex-col space-y-5">
          <span className={`font-bold rounded-3xl text-bg1 bg-text1 w-7 text-center p-1 transition-all ${(mouseover || isPinned) ? 'translate-x-3' : ''}`}>SB</span>
          {logo}

        </div>
      </div >
      <div className={`flex flex-col justify-between bg-sidebarclr w-72 h-screen border border-borderclr2 fixed p-2 z-10 transition-all ${mouseover ? '' : '-translate-x-32 opacity-0 '}`} onMouseOver={() => { !isPinned && setMouseover(true) }} onMouseOut={() => { !isPinned && setMouseover(false) }}>
        <div className="flex flex-col justify-evenly space-y-2 ">
          <div className="flex justify-between my-2">

            <div></div>

            <Button value={<i className={`nf nf-md-arrow_collapse_left text-text1 text-xs inline-block transition-all duration-300 ${!isPinned ? 'rotate-180' : ''}`}></i>} tooltip={`${isPinned ? 'Unpin sidebar' : 'Pin sidebar'}`} tooltip_direction="right" onClick_function={() => { setIsPinned(!isPinned) }} />
          </div>

          <p className="text-orng bg-bg6 rounded-md py-1 px-2 m-0 font-bold cursor-pointer"><i className="nf nf-md-chat_plus_outline"></i> &nbsp;Start new chat</p>

          <div>
            <p className="text-text1 opacity-90 my-2 mx-1 text-sm font-bold">Starred</p>
            <div className="py-8 border border-borderclr2 rounded-lg flex items-center justify-center text-xs text-text2">Star chats you use often</div>
          </div>

          <div>
            <p className="text-text1 opacity-90 my-2 mx-1 text-sm font-bold">Recents</p>
            <div>
              <ChatBars value={"Lorem Ipsum Dolor Sit Amet"} />
              <ChatBars value={"Consectetur Adipiscing Elit"} />
              <ChatBars value={"Aenean Ac Elit Sollicitudin Ipsum "} />
              <ChatBars value={"Etiam Rutrum, Est Ac Cursus"} />
              <ChatBars value={"Eiam Eortor Eonsectetur Epsum, Et Eccumsan"} />
              <ChatBars value={"Eiam Ente Eec Eurpis"} />
              <ChatBars value={"Lorem Ipsum Dolor Sit Amet"} />
              <ChatBars value={"Consectetur Adipiscing Elit"} />
              <span className='text-text1 opacity-90 text-sm cursor-pointer transition-all hover:transition-all hover:opacity-100 px-1 relative top-1 '>View all <i className='nf nf-cod-arrow_right'></i></span>
            </div>
          </div>

          <div className="h-[4.2rem]"> </div>

          <div>
            <div className="py-1 mx-auto border-l border-r border-t border-borderclr2 rounded-t-md bg-bg3 flex w-[calc(100%-2rem)] text-text2 text-sm items-center justify-center">Free plan</div>
            <div className="cursor-pointer py-3 mx-auto border border-borderclr2 rounded-md bg-bg4 flex w-[calc(100%-1rem)] text-text1 text-sm font-bold"><div className="w-10"></div><div>abcxyz123@gmail.com</div><i className="nf nf-cod-chevron_down relative top-1 ml-10 text-xs"></i></div>
          </div>
          <div className="flex justify-between">
            <div></div>
            <span className="text-text2 text-xs font-bold hover:underline cursor-pointer mt-2 -translate-x-3"> <i className="nf nf-cod-question"></i> Help & support</span>
          </div>

        </div>
      </div>
    </>
  )
}
export default SideBar
