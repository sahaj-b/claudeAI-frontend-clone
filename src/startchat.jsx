import { useState } from 'react'
import Button from './button.jsx'
import Prompt from './prompt.jsx'
function StartChat() {
  const [hideSuggestions, setHideSuggestions] = useState(false);
  return (
    <div>
      <div className='rounded-2xl border border-borderclr bg-bg2 px-5 py-3'>
        <textarea placeholder="How can Claude help you today?" className='text-lg h-20 w-screen max-w-2xl resize-none rounded-xl bg-bg2 text-text1 placeholder-text2 caret-text1 outline-none'></textarea>
        <p className='text-l text-text1'>Claude 3.5Sonnet</p>
      </div>
      <div className=' p-3 border-l border-r border-b border-borderclr2 border-r-borderclr2 border-b-borderclr2 rounded-b-2xl relative max-w-2xl m-auto bg-bg3 flex flex-col'>
        <div className='flex justify-between'>
          <button onClick={() => { setHideSuggestions(false) }} className={`text-sm text-text2 ${hideSuggestions ? 'font-bold' : 'cursor-default'}`}>{hideSuggestions ? 'Show suggestions' : 'Get started with an example below'}</button>
          <div className='px-2'>
            <Button value={<i className='nf nf-cod-device_camera'></i>} tooltip="Capture Screenshot" />
            <Button value={<i className='nf nf-fa-paperclip'> Add Content</i>} tooltip={<span>Upload docs or images<span className='text-text2'>(Max 5, 30mb each)</span></span>} />
          </div>
        </div>
        <div className={`flex ${hideSuggestions ? 'scale-0 h-0 ' : 'transition-all duration-300'}`}>
          <Prompt value="Extract insights from report" isHidden={hideSuggestions} />
          <Prompt value="Generate excel formulas" isHidden={hideSuggestions} />
          <Prompt value="Generate interview questions" isHidden={hideSuggestions} />
          <div className='flex flex-col m-auto space-y-1'>
            <Button value={<i className='nf nf-cod-close opacity-70 hover:opacity-100 text-xs'></i>} tooltip="Hide suggestions" tooltip_direction="right" onClick_function={() => { setHideSuggestions(true) }} />
            <Button value={<i className='nf nf-fa-refresh opacity-70 hover:opacity-100 text-xs'></i>} tooltip="Reload suggestions" tooltip_direction="right" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default StartChat
