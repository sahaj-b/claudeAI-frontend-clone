import { useState } from "react";
import Button from "./button.jsx";
function Reply() {
  const [isText, setIsText] = useState(false);
  return (
    <div>
      <div className="w-screen max-w-[50rem] h-24 flex flex-col justify-between rounded-t-2xl border-l border-t border-r border-borderclr bg-bg2 px-5 py-3 fixed bottom-0 left-[calc(50%-25rem)]">
        <div
          className={`${isText ? "max-w-[45.5rem]" : "max-w-[48rem]"} w-screen flex justify-between h-8 space-x-1 relative transition-all`}
        >
          <textarea
            placeholder="Reply to Claude..."
            onChange={(event) => {
              setIsText(Boolean(event.target.value));
            }}
            className="w-screen bg-bg2 resize-none text-lg overflow-hidden text-text1 placeholder-text2 caret-text1 outline-none"
          ></textarea>

          <Button
            value={<i className="nf nf-cod-device_camera"></i>}
            tooltip="Capture Screenshot"
          />

          <Button
            value={<i className="nf nf-fa-paperclip"></i>}
            tooltip={
              <span>
                Upload docs or images
                <span className="text-text2">(Max 5, 30mb each)</span>
              </span>
            }
          />

          <i
            className={`${isText ? "delay-[60ms]" : "duration-[100ms] scale-0"}  absolute left-full nf nf-fa-arrow_up cursor-pointer rounded-xl bg-orng px-2.5 py-2 text-xs text-text1 transition-all duration-300 hover:opacity-90`}
            id="up"
          ></i>
        </div>
        <p className="text-l text-text1">Claude 3.5 Sonnet</p>
      </div>
    </div>
  );
}
export default Reply;
